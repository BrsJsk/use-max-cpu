# use-max-cpu [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

```
A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.
```

## Installation

```sh
$ npm install --save use-max-cpu
```

## Usage

```js
const {startServer} = require('use-max-cpu');
const http = require('http');

startServer(() => {
    console.log('Worker started..')
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
      }).listen(8000);
})
```
## License

MIT © [Boris Joskic](https://www.mallot.info/)


[npm-image]: https://badge.fury.io/js/use-max-cpu.svg
[npm-url]: https://npmjs.org/package/use-max-cpu
[travis-image]: https://travis-ci.com/BrsJsk/use-max-cpu.svg?branch=master
[travis-url]: https://travis-ci.com/BrsJsk/use-max-cpu
[daviddm-image]: https://david-dm.org/BrsJsk/use-max-cpu.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/BrsJsk/use-max-cpu
[coveralls-image]: https://coveralls.io/repos/BrsJsk/use-max-cpu/badge.svg
[coveralls-url]: https://coveralls.io/r/BrsJsk/use-max-cpu

