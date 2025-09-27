# lwc-jest-console-issue

LWR project to illsutrate issue when we use the Console API in Jest with LWC

## Here come Johnny

If we use some Console API statements such as `console.info` in LWC's tests, we could have some non-obvious behaviour.
Indeed, if in a getter of my LWC components, I have:

```javascript
set config(config) {
    console.info('Provided config:', config);
    this._config = { ...(config ?? DEFAULT_CONFIG) };
    this.counter = this._config.counter;
}
```

When I run Jest tests, I could see:
![Empty object on a non-empty object](empty-object-which-is-not-empty.png)

Because LWC wraps all the objects in a LWC membrame for proxification.
That's why when you run a LWC app, there is a [https://github.com/salesforce/lwc/blob/e0e08795137ae53b5de71cdbaccf036c3fabe5ba/packages/%40lwc/engine-dom/src/formatters/index.ts#L12](Chrome DevTools Custom formatter which is injected) to format the object correctly.

## Commands

### Running the app

```bash
npm install
npm run dev
```

Open the site at [http://localhost:3000](http://localhost:3000)

### Running tests

```bash
npm test
```
