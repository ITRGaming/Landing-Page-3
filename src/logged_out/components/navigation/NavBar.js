import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar } from "@mui/material";
import Logo from '../../../images/logged_out/isbmuniLogo.png'
import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  imgLogo: {
    width: '200px',
    padding: '10px 0'
  }
});

function NavBar(props) {
  const {
    classes,
  } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img src={Logo} alt="logo" className={classes.imgLogo} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
