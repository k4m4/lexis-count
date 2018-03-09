'use strict';
const condenseWhitespace = require('condense-whitespace');

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return condenseWhitespace(str).match(/\S+/g).length;
};