# lexis-count [![Build Status](https://travis-ci.org/k4m4/lexis-count.svg?branch=master)](https://travis-ci.org/k4m4/lexis-count)

> Retrieve the number of words in a string.


## Install

```
~ ❯❯❯ npm install lexis-count
```


## Usage

```js
const lexisCount = require('lexis-count');

lexisCount('Lorem ipsum dolor sit amet')
//=> 5

lexisCount(' Lorem ipsum dolor   sit amet  ')
//=> 5
```


## API

### lexisCount()

Type: `string`

Returns the number of words in a string.


## Related

- [lexis](https://github.com/k4m4/lexis) - CLI for this module


## Credits

- The regular expression used has been adapted from [word-regex](https://github.com/regexhq/word-regex) by [regexhq](https://github.com/regexhq).


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)