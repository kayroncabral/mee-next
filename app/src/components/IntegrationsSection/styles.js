import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    padding: theme.spacing(4, 2),
    maxWidth: theme.spacing(62)
  },
  subtitle: {
    fontWeight: "normal"
  },
  heading: {
    lineHeight: 1
  },
  topic: {
    fontWeight: "normal"
  },
  grid: {
    height: "100%"
  },
  swipeableViewsContainer: {
    position: "relative"
  },
  stepper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent"
  },
  iconButton: {
    border: `2px solid ${theme.palette.primary.main}`,
    "&:disabled": {
      border: `2px solid`
    }
  }
}));

export default useStyles;
