import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3, 5),
    height: "100%"
  },
  subtitle: {
    fontWeight: "normal"
  },
  heading: {
    lineHeight: 1
  }
}));

export default useStyles;
