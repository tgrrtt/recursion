// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var loopResults = [];
    var elm = arguments[1]? arguments[1] : document.body;
    // for each child node ....
    for (var i = 0; i < elm.childNodes.length; i++) {
      // take the array returned by this function and pass it on...
      var returned = getElementsByClassName(className, elm.childNodes[i]);
      var counter = 0;
      // if returned is not undefined, and has stuff in it, add it to loopResults
      while (returned && counter < returned.length) {
        loopResults.push(returned[counter]);
        counter++;
      }
    }
    // if this element matches the className...
    if (elm.classList && elm.classList.contains(className)) {
      // add it to the current array, at the beginning. So highest level elm is first.
      loopResults.unshift(elm);
      // send it on up!
      return loopResults;
    } else {
      // send it on up anyways, cuz its children might have the className
      return loopResults;
    }
};
