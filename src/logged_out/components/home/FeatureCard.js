import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  },
});


function FeatureCard(props) {
  const { classes, Icon, color, headline, text } = props;
  return (
    <Fragment>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
        style={{
          color: color,
          fill: color,
          padding: 12,
        }}
      >
        {Icon}
      </div>
      <Typography variant="h5" paragraph>
        {headline}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {text}
      </Typography>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
