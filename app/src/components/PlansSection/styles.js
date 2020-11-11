import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(40)
  }
}));

export default useStyles;
