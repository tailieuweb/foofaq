import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export const DialogDecline = (props) => {
  return (
    <Dialog
      open={props.decline}
      onClose={props.handleCloseDecline}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure to decline ?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={props.handleCloseDecline} color="primary">
          Disagree
        </Button>
        <Button onClick={props.handleClickOpenDecline} color="primary" autoFocus>
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  );
};




// export const DialogFeedback = (props) => {
//   return (
//     <Dialog
//       open={feedback}
//       onClose={handleFeedBack}
//       aria-labelledby="form-dialog-title"
//     >
//       <DialogTitle id="form-dialog-title">
//         Decline post an give feedback
//       </DialogTitle>
//       <DialogContent>
//         <DialogContentText>You can feedback here.</DialogContentText>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           label="Feedback"
//           type="text"
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleFeedBack} color="primary">
//           Cancel
//         </Button>
//         <Button onClick={handleFeedBack} color="primary">
//           Feedback
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };
