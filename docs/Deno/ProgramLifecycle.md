## Program lifecycle

Deno supports browser compatible lifecycle events: load and unload. 

Listeners for load events can be asynchronous and will be awaited. Listeners for unload events need to be synchronous. Both events cannot be cancelled.

```js
//注册事件
const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (imported)`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

// 调用事件
window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (imported)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (imported)`);
};
```