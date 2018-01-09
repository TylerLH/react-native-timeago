var React = require('react')
var ReactNative = require('react-native');
var moment = require('moment');
var TimerMixin = require('react-timer-mixin');

//var { PropTypes } = React;
var { Text } = ReactNative;
import PropTypes from 'prop-types';

export default class TimeAgo extends React.Component {
constructor(props) {
    super(props);
  }
  static defaultProps = {
    hideAgo: false,
    interval: 5000
  };
static propTypes= {
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    interval: PropTypes.number,
    hideAgo: PropTypes.bool
  };

  componentDidMount() {
    var {interval} = this.props;
    TimerMixin.setInterval(this.update, interval);
  }

  componentWillUnmount() {
    TimerMixin.clearInterval(this.update);
  }

    // i don't know how to make this happen .. sorry
  update() {
//    this.forceUpdate();
  }

  render() {
    return (
      <Text {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
    );
  }
}

module.exports = TimeAgo;
