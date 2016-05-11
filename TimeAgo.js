var React = require('react')
var ReactNative = require('react-native');
var moment = require('moment');
var TimerMixin = require('react-timer-mixin');

var { PropTypes } = React;
var { Text } = ReactNative;

var TimeAgo = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    time: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.array,
      React.PropTypes.instanceOf(Date)
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool
  },

  getDefaultProps() {
    return {
      hideAgo: false,
      interval: 60000
    }
  },

  componentDidMount() {
    var {interval} = this.props;
    this.setInterval(this.update, interval);
  },

  componentWillUnmount() {
    this.clearInterval(this.update);
  },

  // We're using this method because of a weird bug
  // where autobinding doesn't seem to work w/ straight this.forceUpdate
  update() {
    this.forceUpdate();
  },

  render() {
    return (
      <Text {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
    );
  }
});

module.exports = TimeAgo;
