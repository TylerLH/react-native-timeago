// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from "moment";

export default class TimeAgo extends Component {
  props: {
    time: string,
    timeFrom?: string,
    interval?: number,
    hideAgo?: boolean
  };
  state: { timer: null | number } = { timer: null };

  static defaultProps = {
    hideAgo: false,
    interval: 60000
  };

  componentDidMount() {
    this.createTimer();
  }

  createTimer = () => {
    this.setState({
      timer: setTimeout(() => {
        this.update();
      }, this.props.interval)
    });
  };

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  update = () => {
    this.forceUpdate();
    this.createTimer();
  };

  render() {
    const { time, timeFrom, hideAgo, ...restProps } = this.props;
    if (timeFrom) {
      return (
        <Text {...restProps}>
          {moment(time).from(timeFrom, hideAgo)}
        </Text>
      )
    }
    return (
      <Text {...restProps}>
        {moment(time).fromNow(hideAgo)}
      </Text>
    );
  }
}
