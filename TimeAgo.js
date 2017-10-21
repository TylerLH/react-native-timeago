import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import TimerMixin from 'react-timer-mixin';

class TimeAgo extends Component {
  static propTypes = {
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool
  };

  getDefaultProps() {
    return {
      hideAgo: false,
      interval: 60000
    };
  }

  componentDidMount() {
    const { interval } = this.props;
    this.setInterval(this.update, interval);
  }

  componentWillUnmount() {
    this.clearInterval(this.update);
  }

  // We're using this method because of a weird bug
  // where autobinding doesn't seem to work w/ straight this.forceUpdate
  update() {
    this.forceUpdate();
  }

  render() {
    return (
      <Text {...this.props}>
        {moment(this.props.time).fromNow(this.props.hideAgo)}
      </Text>
    );
  }
}

Object.assign(TimeAgo.prototype, TimerMixin);

export default TimeAgo;
