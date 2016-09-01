var AIjockerClass = (function(AIcardClass){
  var my = {}, key;

  for (key in AIcardClass){
    if(AIcardClass.hasOwnProperty(key)){
      my[key] = AIcardClass[key];
    }
  }

  var _parentCard = my.Card;

  my.card = function(_givenValue,_id){

  }
})(AIcardClass);
