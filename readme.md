# heroku-connect-configuration-comb [![Build Status](https://travis-ci.org/mitsuruog/heroku-connect-configuration-comb.svg?branch=master)](https://travis-ci.org/mitsuruog/heroku-connect-configuration-comb)

> Makes your Heroku Connect Configuration beautiful

## Install

```
$ npm install --save heroku-connect-configuration-comb
```


## Usage

```js
const herokuConnectConfigurationComb = require('heroku-connect-configuration-comb');

herokuConnectConfigurationComb('input.json', 'output.json');
//=> 'input.json => output.json'
```


## API

### herokuConnectConfigurationComb(input, output, [options])

#### input

Type: `string`


#### output

Type: `string`

default is `input` value.

## CLI

```
$ npm install --global heroku-connect-configuration-comb
```

```
$ heroku-connect-configuration-comb --help

  Usage
    heroku-connect-configuration-comb [input] [output]

  Examples
    $ heroku-connect-configuration-comb input.json output.json
    input.json => output.json
    $ heroku-connect-configuration-comb input.json
    input.json => input.json
```

## License

MIT © [mitsuruog](https://github.com/mitsuruog)
