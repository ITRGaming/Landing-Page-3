import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Hidden,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  footerInner: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: theme.palette.primary.light,
  },
  socialIcon: {
    fill: theme.palette.common.white,
    backgroundColor: "transparent",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
});

const infos = [
  {
    icon: <PhoneIcon />,
    description: "+1 555 123456",
  },
  {
    icon: <MailIcon />,
    description: "support@company.com",
  },
];

const socialIcons = [
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <g>
          <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />

          <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />

          <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
        </g>
      </svg>
    ),
    label: "Instagram",
    href: "https://instagram.com/isbm_university?utm_medium=copy_link",
  },
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Facebook</title>
        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
      </svg>
    ),
    label: "Facebook",
    href: "https://www.facebook.com/isbmuniversity/",
  },
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/13211303/admin/",
  },
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Twitter</title>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    ),
    label: "Twitter",
    href: "https://twitter.com/ISBMUniversity",
  },
];

function Footer(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <footer className="lg-p-top">
      <WaveBorder
        upperColor={theme.palette.common.white}
        lowerColor={theme.palette.secondary.main}
        animationNegativeDelay={4}
      />
      <div className={classes.footerInner}>
        <Grid container spacing={isWidthUpMd ? 10 : 5}>
          <Hidden lgDown>
            <Grid item xs={12} md={6} lg={4}>
              <Box display="flex" justifyContent="center">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={1} key={index}>
                      <Box mr={2}>
                        <IconButton
                          className={classes.infoIcon}
                          tabIndex={-1}
                          disabled
                          size="large"
                        >
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Typography variant="h6" className="text-white">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" paragraph className="text-white">
            © 2024 ISBM University, All Right Reserved.
            </Typography>
            <Box display="flex">
              {socialIcons.map((socialIcon, index) => (
                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                  <IconButton
                    aria-label={socialIcon.label}
                    className={classes.socialIcon}
                    href={socialIcon.href}
                    size="large"
                  >
                    {socialIcon.icon}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
