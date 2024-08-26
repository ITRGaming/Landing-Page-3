import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  card: {
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    [theme.breakpoints.up("lg")]: {
      height: "370px",
    },
    [theme.breakpoints.down("lg")]: {
      height: "270px",
    },
    [theme.breakpoints.down("md")]: {
      height: "380px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "370px",
    },

    "&:hover": {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: theme.palette.primary.light,
      transition: 'all 0.5s ease-in-out',
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2),
      },
      [theme.breakpoints.up("lg")]: {
        height: "390px",
      },
      [theme.breakpoints.down("lg")]: {
        height: "290px",
      },
      [theme.breakpoints.down("md")]: {
        height: "400px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "390px",
      },
      '& > div> h5, & > div> h3': {
        color: theme.palette.common.white,
        transition: 'color 0.5s ease-in-out',
      },
    },
  },
  title: {
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
});

function AboutUsCard(props) {
  const { classes, title, description } = props;
  return (
    <div className={classes.card}>
      <Box mb={2} >
        <h5 className={classes.title}>{title}</h5>
      </Box>
      <Box mb={2}>
        <h3 className={classes.subTitle}>{description}</h3>
      </Box>
    </div>
  );
}

AboutUsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutUsCard);
