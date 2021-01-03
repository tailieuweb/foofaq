import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  questionInfo: {
    margin: "5%",
  },
  answerDetail: {
    margin: "5%",
    border: "1px solid #ced4da",
    width: "89.5%",
    borderRadius: " 15px",
    position: "relative",
  },
  answersText: {
    position: "absolute",
    top: "-5%",
    left: "1%",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "5px",
  },
  skeletion: {
    margin: "0.5rem auto",
  },
}));
