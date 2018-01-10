// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from "moment";

export default class TimeAgo extends Component {
  props: {
    time: string,
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
    const { time, hideAgo, timeFormat } = this.props;
    return (
      <Text {...this.props}>
        {
        timeFormat ? timeFormat(time) : moment(time).fromNow(hideAgo)
        }
      </Text>
    );
  }
}
