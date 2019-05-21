# Test URL

Manually check if a URL renders properly while testing.

## Install

```sh
npm install --save test-url
```

## Usage

The URL will be opened in a browser via [puppeteer](https://github.com/GoogleChrome/puppeteer), if everything looks alright just close the browser, if something is wrong stop testing.

```ts
import testURL from 'test-url';

async function runTests () {

  // Some other tests...

  const url = `file://${encodeURI ( __dirname )}/index.html`;

  await testURL ( url ); // Opening the URL, waiting for the browser to be closed

}

runTests ();
```

## License

MIT © Fabio Spampinato
