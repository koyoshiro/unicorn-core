# Introduction

Dependence Collection Library

# Installation

```js
npm install -g  unicorn-core
```

then import unicorn-core and use it.

```js
const obs = new Observable(object); // create observable object

// watch a field in observable object
const watcher = new Watcher(
    obs,
    key,
    () => {
        // callback function
    },
    value => {
        // computedUpdate function with callback function return value
    }
);

autoRun(watcher.callback)；     //  begin to collect watching field
```

# Todo List

-   [x] npm publish
