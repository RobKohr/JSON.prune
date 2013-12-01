var pruneJSON = require('./JSON.prune.js');
var obj = {a:1, b:'testing', c:[1, 2]}
obj.d = obj;
console.log(pruneJSON(obj));
