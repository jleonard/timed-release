#Timed Release
A small .js utility to simulate real time activity in an html simulation. 

###### Available on the bower registry
```bash
bower install timed-release
```

#### Example

```html
var arr = [
  {
    message: "hi, I fire after 2 seconds",
    at: 2000
  },
  {
    message: "I fire anywhere between 2 and 8 seconds after item 1",
    between: [2000,8000]
  },
  {
    message: "and I fire exactly 2 seconds later",
    at: 2000
  }
];

var loop = true;

var tr = new TimedRelease(arr,loop,function(item,index){
  console.log("item ",item," index ",index);
});

```
