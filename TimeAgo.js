import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import TimerMixin from 'react-timer-mixin';

export default class TimeAgo extends Component {

  componentDidMount() {
    TimerMixin.setInterval(this.forceUpdate.bind(this), this.props.interval);
  }

  componentWillUnmount() {
    TimerMixin.clearInterval(this.forceUpdate.bind(this));
  }

  render() {
    return (
      <Text {...this.props}>{moment('this.props.time').fromNow(false)}</Text>
    )
  }
}

TimeAgo.propTypes= {
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool
  }

TimeAgo.getDefaultProps() {
  return {
    hideAgo: false,
    interval: 60000
  }
}
