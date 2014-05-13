#Timed Release
A small .js utility to simulate real time activity in an html simulation. 

###### Available on the bower registry
```bash
bower install timed-release
```

## Usage

#### Create an array of objects that you want TimedRelease to publish back to your app. Each object needs to have an **at** or **between** property. 

The **at** integer specifies a millisecond delay.  

The **between** array specifies an min and max delay. A random interval between mix and max will be selected for the delay.

```js
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
```

#### Create a TimedRelease object

####The arguments
* **array**
* **loop** _optional_ Defaults to false
* **callback** _optional_ A function that accepts _item_ and _index_ arguments.

```js
var tr = new TimedRelease(
  {
    array: arr,
    loop: true,
    callback: function(item,index){
      console.log('I recieved ',item);
    }
  }
);
```