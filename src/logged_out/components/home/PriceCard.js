import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    
    '&.title': {
        color: theme.black,
      },

    '&:hover': {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      border: `3px solid ${theme.palette.primary.dark}`,
      borderRadius: theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2),
      },
      '$.title': {
        color: theme.white,
      }
      },
  },
});

function PriceCard(props) {
  const { classes, title, description } = props;
  return (
    <div className={classes.card}>
      <Box mb={2}>
        <h5
          className={classes.title}
        >
          {title}
        </h5>
      </Box>
      <Box mb={2}>
        <h3
          className={classes.title}
        >
          {description}
        </h3>
      </Box>
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(PriceCard);
