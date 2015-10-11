var React = require('react-native');
var {
  PropTypes,
  Text
} = React;
var moment = require('moment');
var TimerMixin = require('react-timer-mixin');

var TimeAgo = React.createClass({
  mixins: [TimerMixin],
  propTypes: {
    time: PropTypes.string.isRequired,
    interval: PropTypes.number
  },

  getDefaultProps() {
    return {
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
      <Text {...this.props}>{moment(this.props.time).fromNow()}</Text>
    );
  }
});

module.exports = TimeAgo;
