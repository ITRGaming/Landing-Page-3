import React from "react";
import { Grid, Typography } from "@mui/material";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

import Fees from '../../../images/logged_out/affordable.png';
import Job from '../../../images/logged_out/jobOP.png';
import Placement from '../../../images/logged_out/placement.png';
import Learning from '../../../images/logged_out/learning.png';

const features = [
  {
    color: "#A82682",
    headline: "Committed towards providing the best in Education",
    icon: <i class="fa fa-line-chart fa-2xl" aria-hidden="true"></i>,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#A82682",
    headline: "Focused on the Overall Development of the Students",
    icon: <i class="fa fa-graduation-cap fa-2xl" aria-hidden="true"></i>,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#A82682",
    headline: "Promoting the Research Activities in the University",
    icon: <i class="fa fa-star fa-2xl" aria-hidden="true"></i>,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#A82682",
    headline: "Preparing the Students for Globalized World",
    icon: <i class="fa fa-trophy fa-2xl" aria-hidden="true"></i>,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#fff",
    headline: "Affordable Fees",
    icon: <img src={Fees} style={{ height:'40px' }} alt="fees" />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Job Oriented Programs",
    icon: <img src={Job} style={{ height:'40px' }} alt="job" />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#304FFE",
    headline: "Best Placements7",
    icon: <img src={Placement} style={{ height:'40px' }} alt="placement" />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#C51162",
    headline: "Digital Learning Resources",
    icon: <img src={Learning} style={{ height:'40px' }} alt="learning" />,
    mdDelay: "200",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="mb-5 heading">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
