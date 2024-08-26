import React, { Fragment, useState, useEffect } from "react";
import './headsection.css';
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import BannerVideo from "../../../images/video/bannerVideo.mp4";
import { GetState, GetCity } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    width: "100%",
    overflow: "hidden",
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    position: "absolute",
    width: "100%",
    paddingTop: theme.spacing(1),
    bottom: '0',
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([
    {
      id: 57837,
      name: "Bamboo Flat",
      latitude: "11.70000000",
      longitude: "92.71667000",
    },
    {
      id: 133213,
      name: "Nicobar",
      latitude: "7.03002000",
      longitude: "93.79028000",
    },
    {
      id: 133482,
      name: "Port Blair",
      latitude: "11.66613000",
      longitude: "92.74635000",
    },
    {
      id: 134006,
      name: "South Andaman",
      latitude: "10.75776000",
      longitude: "92.52136000",
    },
  ]);

  useEffect(() => {
    GetState(101).then((result) => {
      setStateList(result);
    });
  });

  return (
    <Fragment>
      <div className={classNames("pt-5", classes.wrapper)} style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <video muted autoPlay loop style={{ width: "100%" }}>
            <source src={BannerVideo} type="video/mp4" />
          </video>
          <WaveBorder
            upperColor="transparent"
            lowerColor="#8E1E77"
            className={classes.waveBorder}
            animationNegativeDelay={2}
          />
        </div>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-around"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography variant={isWidthUpLg ? "h4" : "h5"} style={{textAlign: 'center'}} className="headerCard">
                          <span className="impGradient">Boost your Career</span> with <span className="impGradient"> UGC </span>approved programmes
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <table style={{textAlign: 'center'}}>
                            <tr>
                              <td>School of Management</td>
                              <td>School of Science</td>
                            </tr>
                            <tr>
                              <td>School of Commerce</td>
                              <td>School of Arts and Humanities</td>
                            </tr>
                            <tr>
                              <td>School of Engineering and Technology</td>
                              <td>School of Information and Technology</td>
                            </tr>
                            <tr>
                              <td>School of Design</td>
                              <td>School of Pharmacy</td>
                            </tr>
                            <tr>
                              <td>School of School of Life Science</td>
                              <td>School of Yoga and Naturopathy</td>
                            </tr>
                            <tr>
                              <td>School of Law</td>
                              <td>School of Library and Information Science</td>
                            </tr>
                            <tr>
                              <td>School of Journalism and Mass Communication</td>
                              <td>School of Education</td>
                            </tr>
                            <tr>
                              <td>School of Hotel Management</td>
                              <td>School of Health and Allied Science</td>
                            </tr>
                            <tr>
                              <td>School of Vocational Management</td>
                              <td>School of Media and Entertainment</td>
                            </tr>
                          </table>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                    <Grid item md={6} style={{display: 'flex', justifyContent: 'center'}}>
                      <form className="g-3 row enquiryForm">
                        <div className="header">
                          <h3 className="formTitle">Enquire Now</h3>
                          {/* <i className="imp">
                *Please provide the information below, and our counsellor will
                get in touch with you.
              </i> */}
                        </div>
                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label " name="name">
                            Name:
                          </label>
                          <br />
                          <input
                            className="form-control "
                            type="text"
                            name="name"
                            placeholder="Name"
                          ></input>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label " name="email">
                            Email:
                          </label>
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Email"
                          ></input>
                        </div>

                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label" name="number">
                            Number:
                          </label>
                          <br />
                          <input
                            className="form-control"
                            type="tel"
                            name="number"
                            pattern={"[0-9]{5}-[0-9]{5}"}
                            placeholder="Number"
                          ></input>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label" name="state">
                            State:
                          </label>
                          <select
                            className="form-control level"
                            onChange={(e) => {
                              const state = stateList[e.target.value]; //here you will get full state object.
                              // setStateid(state.id);

                              GetCity(101, state.id).then((result) => {
                                setCityList(result);
                                console.log(result);
                                console.log(cityList);
                              });
                            }}
                          >
                            {stateList.map((item, index) => (
                              <option key={index} value={index}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label" name="city">
                            City:
                          </label>
                          <select className="form-control level">
                            {cityList.map((item, index) => (
                              <option key={index} value={index}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
                          <label className="form-label" name="degree">
                            Degree:
                          </label>
                          <select
                            className="form-control level"
                            id="level"
                            name="level"
                            required=""
                          >
                            <option value="Doctorate">Doctorate</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="Post Graduate Diploma">
                              Post Graduate Diploma
                            </option>
                            <option value="Graduate">Graduate</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Advance Diploma">
                              Advance Diploma
                            </option>
                            <option value="Management Certification Courses">
                              Management Certification Courses
                            </option>
                            <option value="Professional Courses">
                              Professional Courses
                            </option>
                            <option value="Advance Certificate">
                              Advance Certificate
                            </option>
                          </select>
                        </div>
                        <div className="form-group input-group-sm">
                          <label className="form-label" name="program">
                            Program:
                          </label>
                          <select
                            className="form-control course"
                            id="course"
                            name="course"
                            required=""
                          >
                            <option value="">Select course</option>
                          </select>
                        </div>
                        <div className="checkbox">
                          <input type="checkbox"></input>
                          <p className="imp">
                            By clicking on the above button, I authorize ISTM
                            and/or their representative to contact me via Phone,
                            SMS, WhatsApp, and/or email.
                          </p>
                        </div>
                        <div className="">
                          <button type="submit" className="customBtn">
                            Submit
                          </button>
                        </div>
                      </form>
                    </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
