import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  buttonr: {
    borderColor: green[500],
    marginRight: "20px",
    outline: "none",
  },
  pag: {
    marginBottom: "50px",
    width: "100%",
  },
  pagechill: {
    marginLeft: "30%",
  },
  checkIcon: {
    color: green[500],
    fontSize: 30,
  },
  buttonc: {
    borderColor: "red",
    outline: "none",
  },
  closeIcon: {
    fontSize: 30,
    fontWeight: "bold",
    cursor: "pointer",
    color: "red",
  },
  fillterDate: {
    marginBottom: "50px ",
    textAlign: "right",
    marginRight: "50px",
  },
  textField: { marginRight: "30px" },
  btnDate: { marginTop: "15px" },
  btnApprove: { fontSize: "50px", cursor: "pointer" },
  btnClear: { fontSize: "50px", cursor: "pointer", marginLeft: "15px" },
}));
