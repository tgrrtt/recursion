// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }
  if (typeof obj === "string") {
    return "\"" + obj + "\"";
  }
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      var arrayString = "";
      for (var i = 0; i < obj.length; i++) {
        arrayString = arrayString + stringifyJSON(obj[i]) + ",";
      }
      //need to get rid of an extra comma at the end
      arrayString = arrayString.slice(0, -1);
      return "[" + arrayString + "]";    
    } else {
      var objString = "";
      for (var k in obj) {
        // check if object is a function or is undefined
        if (typeof k === "function" || k === "undefined") {
          return "{}";
        }
        objString = objString + "\"" + k + "\":" + stringifyJSON(obj[k]) + ",";
      }
      // remove extra comma, again;
      objString = objString.slice(0, -1);
      return "{" + objString + "}";
    }
  }
};
