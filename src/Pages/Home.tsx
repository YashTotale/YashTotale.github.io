//React Imports
import React from "react";

//Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);
  return {};
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  return <div>Home</div>;
};

export default HomePage;
