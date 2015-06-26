var React = require('react-native');
var {
  Text
} = React;
var moment = require('moment');

var TimeAgo = React.createClass({

  propTypes: {
    time: React.propTypes.string.isRequired,
    interval: React.propTypes.number
  },

  getDefaultProps() {
    return {
      interval: 60000
    }
  },

  componentDidMount() {
    var {interval} = this.props;
    setInterval(this.update, interval);
  },

  componentWillUnmount() {
    clearInterval(this.update);
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
