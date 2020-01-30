import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis
} from "recharts";
import format from "date-fns/format";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  cardContentInner: {
    marginTop: -1 * theme.spacing(4)
  }
});

function labelFormatter(label) {
  return format(new Date(label * 1000), "MMMM d, p yyyy");
  // return format(new Date(label * 1000), "MMMM d, p");
}

function calculateMin(data, yKey, factor) {
  let max = Number.POSITIVE_INFINITY;
  Object.values(data).forEach(element => {
    if (max > element[yKey]) {
      max = element[yKey];
    }
  });
  return Math.round(max - max * factor);
}

const ITEM_HEIGHT = 48;
const options = ["1 Week", "1 Month", "6 Months"];

class CardChart extends PureComponent {
  state = { anchorEl: null, selectedOption: "1 Month" };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  getSeconds = () => {
    const { selectedOption } = this.state;
    switch (selectedOption) {
      case "1 Week":
        return 60 * 60 * 24 * 7;
      case "1 Month":
        return 60 * 60 * 24 * 7 * 31;
      case "6 Months":
        return 60 * 60 * 24 * 7 * 31 * 6;
      default:
        throw new Error("No branch selected in switch-statement");
    }
  };

  getSubtitle = () => {
    const { selectedOption } = this.state;
    switch (selectedOption) {
      case "1 Week":
        return "Last week";
      case "1 Month":
        return "Last month";
      case "6 Months":
        return "Last 6 months";
      default:
        throw new Error("No branch selected in switch-statement");
    }
  };

  processData = () => {
    const { data } = this.props;
    const seconds = this.getSeconds();
    const minSeconds = new Date() / 1000 - seconds;
    const arr = [];
    for (let i = 0; i < data.length; i += 1) {
      if (minSeconds < data[i].timestamp) {
        arr.unshift(data[i]);
      }
    }
    return arr;
  };

  selectOption = selectedOption => {
    this.setState({ selectedOption, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { color, data, title, classes, theme, height, yKey } = this.props;
    const { anchorEl, selectedOption } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Card>
        <div className="p-2">
          <div className="d-flex justify-content-between mb-1">
            <div>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="body2" className="text-secondary-greyed">
                {this.getSubtitle()}
              </Typography>
            </div>
            <div>
              <IconButton
                aria-label="More"
                aria-owns={open ? "long-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200
                  }
                }}
              >
                {options.map(option => (
                  <MenuItem
                    key={option}
                    selected={option === selectedOption}
                    onClick={() => {
                      this.selectOption(option);
                    }}
                    name={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
        <CardContent>
          <div
            className={classNames(classes.cardContentInner, "w-100")}
            style={{ height }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={this.processData()} type="number">
                <XAxis
                  dataKey="timestamp"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  hide
                />
                <YAxis
                  domain={[calculateMin(data, yKey, 0.05), "dataMax"]}
                  hide
                />
                <Area
                  type="monotone"
                  dataKey={yKey}
                  stroke={color}
                  fill={color}
                />
                <Tooltip
                  labelFormatter={labelFormatter}
                  cursor={false}
                  contentStyle={{
                    border: "none",
                    padding: theme.spacing(1),
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[1]
                  }}
                  labelStyle={theme.typography.body1}
                  itemStyle={{
                    fontSize: theme.typography.body1.fontSize,
                    letterSpacing: theme.typography.body1.letterSpacing,
                    fontFamily: theme.typography.body1.fontFamily,
                    lineHeight: theme.typography.body1.lineHeight,
                    fontWeight: theme.typography.body1.fontWeight
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  }
}

CardChart.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
  title: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.object,
  height: PropTypes.string,
  yKey: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(CardChart);
