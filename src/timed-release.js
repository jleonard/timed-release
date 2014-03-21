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
 * @param {array} array - The array of items to release at fixed or random intervals
 * @param {boolean} loop - To loop or not to loop.
 * @param {timedReleaseCallback} callback - Called on each item release. 
 */
function TimedRelease(array,loop,callback){

    this.currentIndex = 0; // The current array index.
    var interval; // The interval generated for each release.
    var timer; // The setTimeout used to fire each release.
    var loop = loop;

    var that = this;

    /**
    * Preps a release. Sets the random interval time and resets the timer.
    */
    var loadItem = function(item){
      var interval = item.hasOwnProperty("at") ? item.at : randomIntFromInterval(item.between[0],item.between[1]);
      item.interval = interval;
      timer = setTimeout(fireItem,interval);
    }

    function randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    /**
    * Releases an item via the callback. Advances the current index or resets if the config is set to loop.
    */
    var fireItem = function(){
      callback(array[that.currentIndex],that.currentIndex);
      if(that.currentIndex < array.length - 1){
        that.currentIndex++;
        loadItem(array[that.currentIndex]);
      }else{
        if(loop){ that.currentIndex = 0; loadItem(array[that.currentIndex]); }
      }
    }
    loadItem(array[that.currentIndex]);
  }

