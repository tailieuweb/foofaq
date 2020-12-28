import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "2% auto",
    flexGrow: 1,
    maxWidth: "89.5%",
    width: "89.5%",
    display: "block",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  userAnswerInfo: {
    backgroundColor: "#D5E8D4",
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 30,
  },
}));
