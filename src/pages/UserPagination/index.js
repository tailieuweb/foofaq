import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* ta can truyen tong so trang qua ben kia */}
      <Pagination count={props.tongTrang} variant="outlined" shape="rounded" onChange={props.OnThayDoi} />
    </div>
  );
}