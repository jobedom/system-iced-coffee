# system-iced-coffee
SystemJS plugin for compiling IcedCoffeeScript

```
jspm install iced-coffee
```

In config.js:

``` javascript
System.config({
  map: {
    iced: "system-iced-coffee"
  }
});
```

In your app:

``` javascript
System.import('./test.iced!')
  .then(function (test) {
    var t = new test('Test');
    console.log(t);
  })
```
