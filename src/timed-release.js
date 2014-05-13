/**
 * The TimedRelease constructor accepts a callback argument that fires on each release.
 *
 * @callback timedReleaseCallback
 * @param {*} item - current array item being released
 * @param {number} index - current array index
 */

/**
 * Represents a TimedRelease object.
 * @constructor
 * @param {object} options - The array of items to release at fixed or random intervals
 * @param {boolean} loop - To loop or not to loop.
 * @param {timedReleaseCallback} callback - Called on each item release. 
 */
function TimedRelease(options){
    
    this.currentIndex = 0; // The current array index.

    /* the interval integer for each release */
    var interval;

    /* the setTimeout interval */
    var timer;

    /* to loop or not to loop */
    var loop = options.loop;

    var that = this;

    /* a default argument object to fill in the blanks on an incomplete instantiation */
    var DEFAULTS = {
      array: [],
      loop: false,
      callback: function(){}
    }

    var options = extend(options,DEFAULTS);

    function extend(a,b){
      for(var key in b){
        if(!a.hasOwnProperty(key)){
          a[key] = b[key];
        }
      }
      return a;
    }

    /**
    * Preps the next release.
    */
    var loadItem = function(item){
      if(item.hasOwnProperty('at') || item.hasOwnProperty('between')){
        interval = item.hasOwnProperty("at") ? parseInt(item.at,10) : randomIntFromInterval(parseInt(item.between[0],10),parseInt(item.between[1],10));
        timer = setTimeout(fireItem,interval);
      }
    }

    function randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    /**
    * Releases an item via the callback. Advances the current index or resets if the config is set to loop.
    */
    var fireItem = function(){
      options.callback(options.array[that.currentIndex],that.currentIndex);
      if(that.currentIndex < options.array.length - 1){
        that.currentIndex++;
        loadItem(options.array[that.currentIndex]);
      }else{
        if(options.loop){ that.currentIndex = 0; loadItem(options.array[that.currentIndex]); }
      }
    }

    this.stop = function(){
      clearTimeout(timer);
    };

    this.start = function(){
      that.stop();
      if(options.array.length > 0){
        loadItem(options.array[that.currentIndex]);
      }
    };

    if(options.array.length > 0){
      loadItem(options.array[that.currentIndex]);
    }
    
  }

