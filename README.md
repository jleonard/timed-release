#Timed Release
A small .js utility to simulate real time activity in an html simulation. 

###### Available on the bower registry
```bash
bower install timed-release
```

#### Example

```html
var array = ["uno","dos","tres"];

var config = {
                minInterval: 200,
                maxInterval: 5000
              };
              
var tr = new TimedRelease( 
                                array, 
                                config,
                                function(item,index){ 
                                                console.log("Released ",item," at ",index); 
                                }
                          );
```

#### Config
######The config obj has three optional properties.  
**minInterval** (milliseconds) The minimum amount of time between each release.  
**maxInterval** (milliseconds) The maximum amount of time between each release.  
**loop** (boolean) _optional_ if set to true the releases will continuously loop through the items in the array.

```html
{
  minInterval: 200,
  maxInterval: 5000,
  loop: true
}
```
