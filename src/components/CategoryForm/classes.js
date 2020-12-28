import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    button: {
      margin: "10px auto",
    },
  }));