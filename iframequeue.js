/*
** Iframe priority queue
** AH 1/24/2017
*/

(function(){
  /*block all iframes from loading except first 3*/
  /*get array of src attr of iframes from 3-*/
  /*wait until DOM has loaded before attempting new iframe loads*/
  
  // if jquery is available use it
    var iframes = window.jQuery ? jQuery(document).find('iframe') : document.getElementsByTagName('iframe'),
    srcUrls = [],
    iLen = iframes.length;
    for(var i = 3; i < iLen; i++){
      if(iframes[i].src){
        srcUrls.push(iframes[i].src);
        iframes[i].removeAttr('src');
      }
    }
    // srcUrls contains src urls for > 3
    window.onload = function(){
      var iframes = window.jQuery ? jQuery(document).find('iframe') : document.getElementsByTagName('iframe')
      for(var i = 3; i < iframes.length; i++)
      {
        if(!iframes[i].src || iframes[i].src.length < 1)
        {
          iframes[i].attr('src',srcUrls[i-4]);
        }
      }
    }
});
