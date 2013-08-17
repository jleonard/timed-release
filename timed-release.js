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
 * @param {array} array - The array of items to release at random intervals
 * @param {object} config - The configuration obj containing minInterval, maxInterval and optional loop properties.
 * @param {timedReleaseCallback} callback - Called on each item release. 
 */
  var TimedRelease = function(array,config,callback){

    var currentIndex = 0; // The current array index.
    var interval; // The random number generated for each release.
    var timer; // The setTimeout used to fire each release.

    /**
    * Preps a release. Sets the random interval time and resets the timer.
    */
    var loadItem = function(){
      interval =  Math.floor(Math.random() * config.minInterval) + config.maxInterval;
      timer = setTimeout(fireItem,interval);
    }

    /**
    * Releases an item via the callback. Advances the current index or resets if the config is set to loop.
    */
    var fireItem = function(){
      callback(array[currentIndex],currentIndex);
      if(currentIndex < array.length - 1){
        currentIndex++;
        loadItem();
      }else{
        if(config.loop){ currentIndex = 0; loadItem(); }
      }
    }
    loadItem();
  }

