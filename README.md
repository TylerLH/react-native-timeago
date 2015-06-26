# react-native-timeago

An auto-updating timeago component for React Native using moment.js.

## Usage

```jsx
var React = require('react-native');
var TimeAgo = require('react-native-timeago');
var timestamp = "2015-06-21T06:24:44.124Z"; // Any valid date string

var MyComponent = React.createClass({
  ...

  render() {
    return (
      <TimeAgo time={timestamp} />
    )
  }

  ...
});
```

All normal Text props are applicable (including style). Use the `interval` prop to change the update interval in milliseconds (default: 60000).

```jsx
// This component would update every 20 seconds
<TimeAgo time={timestamp} interval={20000} />
```

## Contributing

If you'd like to see something added or changed to this module please open a new GitHub issue. Pull requests are always welcome.

### Author
Created and maintained by [Tyler Hughes](https://twitter.com/iampbt).
