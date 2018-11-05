var array = ['a', 'b', 'c', 'd', 'e', 'f', 'j'];
var object = {};

function arrayToObject(x) {
    x.forEach(function(item, i) {
        object[item] = i ;
    });
    console.log(object);
}

arrayToObject(array);
