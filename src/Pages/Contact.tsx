// React Imports
import React, { forwardRef } from "react";
import emailjs from "emailjs-com";
import {
  SubmitHandler,
  useForm,
  DeepMap,
  FieldError,
  ValidationRules,
  Controller,
} from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { EMAIL_REGEX } from "../Utils/constants";
import {
  EMAILJS_USER_ID,
  SERVICE_ID,
  TEMPLATE_ID,
} from "../Utils/CONFIDENTIAL";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../Redux/selectors";
import {
  setContact,
  setContactLoading,
  setContactSuccess,
} from "../Redux/actions";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  capitalize,
  CircularProgress,
  InputProps,
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
  component?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette }) => ({
  formContainer: ({ component }) => ({
    minHeight: 459,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "stretch",
    padding: component ? undefined : 20,
  }),
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
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
  submit: ({ errors }) => ({
    margin: "10px 0px",
    cursor: errors ? "not-allowed" : "pointer",
  }),
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
  submitTitle: {
    textAlign: "center",
  },
  submitIcon: ({ success }) => ({
    margin: "20px 0px",
    width: 100,
    height: 100,
    color: success ? palette.success.main : palette.error.main,
  }),
  submitExplanation: {
    marginBottom: 10,
    textAlign: "center",
  },
  submitInfo: {
    margin: "10px 0px",
  },
  submitAnother: {
    marginTop: 10,
  },
}));

interface ContactFormProps {
  component?: boolean;
}

export interface Inputs {
  name: string;
  message: string;
  email: string;
  bugs: string;
  rating: number | null;
}

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  ({ component }, ref) => {
    const dispatch = useDispatch();

    const inputs: (keyof Inputs)[] = [
      "name",
      "message",
      "email",
      "bugs",
      "rating",
    ];

    const contact = useSelector(getContact);

    const { name, email, message, bugs, rating, loading, success } = contact;

    const { executeRecaptcha } = useGoogleReCaptcha();

    const { register, handleSubmit, errors, control, reset } = useForm<Inputs>({
      mode: "onTouched",
      defaultValues: {
        name,
        email,
        message,
        bugs,
        rating,
      },
    });

    const errorsBool = Boolean(Object.keys(errors).length);

    const classes = useStyles({
      errors: errorsBool,
      success,
      component,
    });

    const onSubmit: SubmitHandler<Inputs> = async (inputs, e) => {
      //eslint-disable-next-line
      e?.preventDefault();
      dispatch(setContact(inputs));
      dispatch(setContactLoading(true));
      try {
        const token = await executeRecaptcha?.("contact_form");
        if (!token) {
          throw new Error("ReCaptcha was unable to authorize this response.");
        } else {
          await emailjs.send(SERVICE_ID, TEMPLATE_ID, inputs, EMAILJS_USER_ID);

          dispatch(setContactSuccess(true));
        }
      } catch (err) {
        dispatch(setContactSuccess(false));
      } finally {
        dispatch(setContactLoading(false));
      }
    };

    return (
      <div ref={ref} className={classes.formContainer}>
        {loading ? (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        ) : success === null ? (
          <form className={classes.contact} onSubmit={handleSubmit(onSubmit)}>
            <InputField errors={errors} name="name" register={register} />
            <InputField
              errors={errors}
              name="message"
              register={register}
              textarea
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
            <InputField
              errors={errors}
              name="bugs"
              register={register}
              props={{
                label: "Any Bugs?",
              }}
              textarea
              notRequired
            />
            <Typography className={classes.rate} variant="body1">
              Rate the site?
            </Typography>
            <Controller
              name="rating"
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Rating
                  name="rating"
                  value={parseInt(value)}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              className={classes.rating}
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
            <Typography className={classes.submitTitle} variant="h4">
              {success
                ? "Form submission successful"
                : "Form submission failed"}
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
              onClick={() => {
                reset(contact);
                dispatch(setContactSuccess(null));
              }}
              className={classes.submitAnother}
            >
              {success ? "Submit another response" : "Try again"}
            </Button>
          </Paper>
        )}
      </div>
    );
  }
);

const useInputFieldStyles = makeStyles((theme) => ({
  input: {
    margin: "10px 0px",
  },
}));

interface InputFieldProps {
  name: keyof Inputs;
  register: (rules?: Partial<ValidationRules>) => (ref: any) => void;
  errors: DeepMap<Inputs, FieldError>;
  props?: TextFieldProps;
  inputProps?: InputProps;
  rules?: Partial<ValidationRules>;
  textarea?: boolean;
  notRequired?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  errors,
  register,
  props,
  rules,
  inputProps,
  textarea,
  notRequired,
}) => {
  const classes = useInputFieldStyles();

  return (
    <TextField
      error={Boolean(errors[name])}
      helperText={errors[name]?.message}
      className={classes.input}
      variant="outlined"
      label={`${capitalize(name)}${notRequired ? "" : "*"}`}
      fullWidth
      name={name}
      {...(textarea
        ? {
            multiline: true,
            rows: 2,
            rowsMax: 20,
          }
        : null)}
      inputRef={register({
        required: notRequired ? false : "This field is required",
        ...rules,
      })}
      InputProps={{ ...inputProps }}
      {...props}
    />
  );
};

export default ContactForm;
