import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import WaveBorder from "../../../shared/components/WaveBorder";
import AboutUsCard from "./AboutUsCard";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../../shared/functions/useWidth";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },  
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 400,
    },
    minHeight: 300,
    width: '100%',
  },
  divPrice: {
    position: "relative",
    "::before": {
      content: "",
      position: "absolute",
      top: "-10rem",
      left: "0",
      width: "100%",
      height: "30px",
      borderRadius: "10 10 0 0",
    },
  },
  waveBorder: {
    position: "absolute",
    width: "100%",
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4),
    bottom: "",
  },
  cardContent: {
    width: '100%',
  },
});

function AboutUsSection(props) {
  const { classes, theme } = props;
  const width = useWidth();

  return (
      <div
        className={classNames("py-5 ", classes.divPrice)}
        style={{ backgroundColor: "#f7d4ef" }}
      >
        <Typography variant="h3" align="center" className="mb-5 heading">
          About Us
        </Typography>
        <div className={classNames("container-fluid", classes.containerFix)}>
          <Grid
            container
            spacing={calculateSpacing(width, theme)}
            className={classes.gridContainer}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              className={classes.cardWrapper}
              data-aos="zoom-in-up"
              data-aos-delay={"600"}
            >
              <AboutUsCard
                title="Starter"
                description={
                  <Typography >
                    Our university offers a variety of courses to meet the needs
                    of every student. From Business to Biology, and from
                    Psychology to Politics, our university provides the right
                    courses to help students reach their educational goals.
                  </Typography>
                }
              />
            </Grid>
            <Grid
              item
              className={classes.cardWrapper}
              xs={12}
              sm={6}
              lg={3}
              data-aos="zoom-in-up"
              data-aos-delay={"600"}
            >
              <AboutUsCard
                title="Premium"
                description={
                  <Typography className={classes.cardContent}>
                    Our university provides a wide range of facilities to ensure
                    that all students have the best possible educational
                    experience. We offer state-of-the-art classNamerooms,
                    computer labs, and libraries; recreational and athletic
                    facilities; and a variety of student services.
                  </Typography>
                }
              />
            </Grid>
            <Grid
              item
              className={classes.cardWrapper}
              xs={12}
              sm={6}
              lg={3}
              data-aos="zoom-in-up"
              data-aos-delay={"600"}
            >
              <AboutUsCard
                title="Business"
                description={
                  <Typography>
                    The Library of Knowledge is a comprehensive collection of
                    resources available to students and faculty at our
                    university. It includes books, journals, magazines, and
                    other materials that can be used to further research, expand
                    knowledge, and enhance understanding.
                  </Typography>
                }
              />
            </Grid>
            <Grid
              item
              className={classes.cardWrapper}
              xs={12}
              sm={6}
              lg={3}
              data-aos="zoom-in-up"
              data-aos-delay={"600"}
            >
              <AboutUsCard
                title="Tycoon"
                description={
                  <Typography>
                    Get ready to learn from the best! Our university provides
                    skilled instructors for your educational needs. Our
                    university is dedicated to providing you with the best
                    educational experience.
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </div>
        <WaveBorder
          upperColor="#F7D4EF"
          lowerColor="#fff"
          className={classes.waveBorder}
          animationNegativeDelay={2}
        />
      </div>
  );
}

AboutUsSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(AboutUsSection);
