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
      timer: setInterval(() => {
        this.update();
      }, this.props.interval)
    });
  };

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  update = () => {
    this.forceUpdate();
  };

  render() {
    const { time, hideAgo } = this.props;
    return (
      <Text {...this.props}>
        {moment(time).fromNow(hideAgo)}
      </Text>
    );
  }
}
