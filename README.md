#Timed Release
A small .js utility to simulate real time activity in an html simulation. 

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
