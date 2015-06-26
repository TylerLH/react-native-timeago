var React = require('react-native');
var {
  Text
} = React;
var moment = require('moment');

var TimeAgo = React.createClass({

  componentDidMount() {
    setInterval(this.update, 60000);
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
