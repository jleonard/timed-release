
  var TimedRelease = function(array,config,callback){

    var currentIndex = 0;
    var interval;
    var timer;

    var loadItem = function(){
      interval =  Math.floor(Math.random() * config.minInterval) + config.maxInterval;
      timer = setTimeout(fireItem,interval);
    }

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

