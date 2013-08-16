(function(){ 
  /* code */ 
  var TimedRelease = function(array,config,callback){
  	this.config = $.extend({}, TimedRelease.DEFAULTS, config);
  	this.currentIndex = 0;
  	this.interval;
  	this.t;
  	this.loadItem();
  }

  TimedRelease.DEFAULTS = {
    minInterval: 500, // the minimum interval between firing messages
    maxInterval: 5000 // the maximum...
  }

  TimedRelease.prototype.loadItem = function(){
  	this.interval = Math.floor(Math.random() * this.config.minInterval) + this.config.maxInterval;
  	this.t = setTimeout(this.fireItem,this.interval);
  }

  TimedRelease.prototype.fireItem = function(){

	callback(array[currentIndex],currentIndex);
	if(currentIndex < array.length){
		currentIndex++;
		this.loadItem();
	}

  }

})(window.jQuery);