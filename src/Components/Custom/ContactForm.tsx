// React Imports
import React from "react";
import {
  SubmitHandler,
  useForm,
  DeepMap,
  FieldError,
  ValidationRules,
  Controller,
} from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { EMAIL_REGEX } from "../../Utils/constants";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../Redux/selectors";
import { setContact, setContactSuccess } from "../../Redux/actions";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  capitalize,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from "@material-ui/core";
import { CheckCircle, Cancel } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

interface StyleProps {
  errors: boolean;
  success: boolean | null;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette }) => ({
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rate: {
    marginTop: 10,
    marginBottom: 3,
  },
  rating: {
    marginBottom: 10,
  },
  submit: {
    margin: "10px 0px",
    cursor: ({ errors }) => (errors ? "not-allowed" : "pointer"),
  },
  submitDisabled: {
    cursor: "not-allowed",
  },
  submitPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  submitIcon: {
    margin: "20px 0px",
    width: 100,
    height: 100,
    color: ({ success }) =>
      success ? palette.success.main : palette.error.main,
  },
  submitExplanation: {
    marginBottom: 10,
  },
  submitInfo: {
    margin: "10px 0px",
  },
  submitAnother: {
    marginTop: 10,
  },
}));

interface ContactFormProps {}

export interface Inputs {
  name: string;
  message: string;
  email: string;
  rating: number | undefined;
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const dispatch = useDispatch();

  const inputs: (keyof Inputs)[] = ["name", "message", "email", "rating"];

  const contact = useSelector(getContact);

  const { name, email, message, success, rating } = contact;

  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit, errors, control } = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: {
      name,
      email,
      message,
    },
  });

  const errorsBool = Boolean(Object.keys(errors).length);

  const classes = useStyles({
    errors: errorsBool,
    success,
  });

  const onSubmit: SubmitHandler<Inputs> = async (inputs, e) => {
    dispatch(setContact(inputs));
    try {
      const token = await executeRecaptcha?.("contact_form");
      e?.preventDefault();
      if (!token) {
        throw new Error("ReCaptcha was unable to authorize this response.");
      } else {
        const response = await fetch(
          "https://hooks.zapier.com/hooks/catch/8641341/og4nv0l/",
          {
            method: "post",
            body: JSON.stringify(inputs),
          }
        );
        const json = await response.json();
        if (json.status === "success") {
          dispatch(setContactSuccess(true));
        }
      }
    } catch (err) {
      dispatch(setContactSuccess(false));
    }
  };

  return (
    <div>
      {success === null ? (
        <form className={classes.contact} onSubmit={handleSubmit(onSubmit)}>
          <InputField errors={errors} name="name" register={register} />
          <InputField
            errors={errors}
            name="message"
            register={register}
            props={{
              multiline: true,
              rows: 2,
              rowsMax: 20,
            }}
          />
          <InputField
            errors={errors}
            name="email"
            register={register}
            rules={{
              pattern: {
                value: EMAIL_REGEX,
                message: "Please enter a valid email address",
              },
            }}
          />
          <Typography className={classes.rate} variant="body1">
            Rate the site?
          </Typography>
          <Controller
            name="rating"
            control={control}
            as={<Rating />}
          ></Controller>
          <Button
            className={classes.submit}
            color="primary"
            variant="outlined"
            type={errorsBool ? undefined : "submit"}
          >
            Submit
          </Button>
        </form>
      ) : (
        <Paper className={classes.submitPaper}>
          <Typography variant="h4">
            {success ? "Form submission successful" : "Form submission failed"}
          </Typography>
          {success ? (
            <CheckCircle className={classes.submitIcon} />
          ) : (
            <Cancel className={classes.submitIcon} />
          )}
          <Typography variant="body1" className={classes.submitExplanation}>
            {success
              ? "Thanks for your response! I'll try to get back to you within a few days. "
              : "An error occurred while submitting your response. Please try again. "}
            Here is what was submitted:
          </Typography>
          {inputs.map((input, i) => {
            return (
              contact[input] && (
                <Typography
                  key={i}
                  className={classes.submitInfo}
                  variant="body1"
                >
                  <strong>{capitalize(input)}: </strong>
                  {contact[input]}
                </Typography>
              )
            );
          })}
          <Button
            color="primary"
            variant="contained"
            onClick={() => dispatch(setContactSuccess(null))}
            className={classes.submitAnother}
          >
            {success ? "Submit another response" : "Try again"}
          </Button>
        </Paper>
      )}
    </div>
  );
};

const useInputFieldStyles = makeStyles((theme) => ({
  input: {
    margin: "10px 0px",
    width: "100%",
  },
}));

interface InputFieldProps {
  name: keyof Inputs;
  register: (rules?: Partial<ValidationRules>) => (ref: any) => void;
  errors: DeepMap<Inputs, FieldError>;
  props?: TextFieldProps;
  rules?: Partial<ValidationRules>;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  errors,
  register,
  props,
  rules,
}) => {
  const classes = useInputFieldStyles();

  return (
    <TextField
      error={Boolean(errors[name])}
      helperText={errors[name]?.message}
      className={classes.input}
      variant="outlined"
      label={capitalize(name)}
      name={name}
      inputRef={register({
        required: { message: "This field is required", value: true },
        ...rules,
      })}
      {...props}
    />
  );
};

export default ContactForm;
