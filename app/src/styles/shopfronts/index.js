import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  section1: {
    backgroundImage: "url('arc.svg')",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto"
  },
  section2: {
    backgroundColor: "#3c037c"
  },
  paper: {
    padding: theme.spacing(3, 5),
    height: "100%"
  }
}));

export default useStyles;
