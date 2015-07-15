# react-native-timeago

[![View package on npm](https://img.shields.io/npm/v/react-native-timeago.svg?style=flat-square)](https://www.npmjs.com/package/react-native-timeago)

An auto-updating timeago component for React Native using [moment.js](http://momentjs.com/).

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

## Author
Created and maintained by [Tyler Hughes](https://twitter.com/iampbt).

## License
Copyright (c) 2015, Tyler Hughes <iampbt@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
