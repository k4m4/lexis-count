'use strict';
const condenseWhitespace = require('condense-whitespace');

module.exports = function (str, opts) {
	const words = condenseWhitespace(String(str)).match(/\S+/g)
	if (words != null) {
		return words.length;
	} else {
		return 0;
	}
};