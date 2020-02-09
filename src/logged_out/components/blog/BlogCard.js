import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { Typography, Card, withStyles } from "@material-ui/core";

const styles = theme => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8,
    "&:hover": {
      boxShadow: "0 0 1.25rem rgba(108,118,134,.1)!important"
    }
  },
  title: {
    transition: `background-color ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.standard}ms`,
    "&:hover": {
      color: theme.palette.secondary.main
    },
    cursor: "pointer"
  },
  card: {
    boxShadow: theme.shadows[2]
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  link: {
    transition: `background-color ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.complex}ms`,
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
});

function BlogCard(props) {
  const { classes, url, src, date, title, snippet } = props;
  return (
    <Card className={classes.card}>
      <Link to={url}>
        <img src={src} className={classes.img} alt="" />
      </Link>
      <div className="p-2">
        <Typography variant="body2" color="textSecondary">
          {format(new Date(date * 1000), "PPP", {
            awareOfUnicodeTokens: true
          })}
        </Typography>
        <Link to={url} className={classes.noDecoration}>
          <Typography
            variant="h6" /* If we dont place the className into the child
        component the whole width will  clickable */
          >
            <span className={classes.title}>{title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {snippet}
          <Link to={url} className={classes.noDecoration}>
            <span className={classes.link}> read more...</span>
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(BlogCard);
