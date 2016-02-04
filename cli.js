#!/usr/bin/env node
'use strict';
var meow = require('meow');
var herokuConnectConfigurationComb = require('./');

var cli = meow([
	'Usage',
	'  $ heroku-connect-configuration-comb [input] [output]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ heroku-connect-configuration-comb',
	'  unicorns & rainbows',
	'  $ heroku-connect-configuration-comb ponies',
	'  ponies & rainbows'
]);

herokuConnectConfigurationComb(cli.input[0], cli.input[1]);
