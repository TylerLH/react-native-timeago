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
      <TimeAgo time={time} />
    )
  }

  ...
});
```

You can also pass any styles directly onto the component's props as you would with any other component.
