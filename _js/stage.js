
$( document ).ready(function() {
        console.log( "ready!" );
        _setDivSizes();
        _initiateMenu();
});



function _initiateMenu(){
           $("menu").click(function(){alert("mama")});
}


function navigateFunction(){
    
    alert("function invoked")
    console.log("event Triggered x")
}

//var keys = {37: 1, 38: 1, 39: 1, 40: 1};

/*function preventDefault(e) {
    
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}*/

/*function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}*/

/*function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener(()'DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}*/

/*function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll',_newScroller, false);
  document.addEventListener('wheel', _newScroller, {passive: false}); // Disable scrolling in Chrome    
  window.onwheel = _newScroller; // modern standard
  window.onmousewheel = document.onmousewheel = _newScroller; // older browsers, IE
  window.ontouchmove  = _newScroller; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}*/

/*function _newScroller(e){
     console.log("new scolling")
}*/

/*disableScroll();*/

/*window.onmousewheel = document.onmousewheel = document.onkeydown = function(){
    
    console.log("a scroll functionality is triggered")
}*/// on scroll function

window.onresize = function(){
    
    _setDivSizes();
    //console.log("stage height is: "+window.innerHeight)
    //console.log("stage width is: "+window.innerWidth)
}


function _setDivSizes(){
    
    var _pageCount = $("allSections").children("p").length;
    
    for(var i=0; i<_pageCount; i++){
        
        _currentNode = $("allSections").children("p").eq(i);
        _currentCSS  = _currentNode.classList;
            
        //_currentNode.css(pageMain)
        
        _currentNode.css( "height",window.innerHeight - 10 );
        _currentNode.css( "background","#cccccc" );
        //_currentCSS.add("pageMain");
        
       console.log("the current node class: "+_currentCSS);
    }
    
    //console.log("children: "+$("allSections").children("p").eq(1))
}
