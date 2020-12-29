import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  questionDetail: {
    maxWidth: "89,5%",
  },
  buttonEdit: {
    float: "right",
  },
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
  footerCard: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
    buttonView: {
      padding: "10px",
    },
  },
  buttonSave: {
    float: "right",
    marginRight: "10px",
  },
  views: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "0.5rem 0.5rem 0 0",
    },
  },
}));
