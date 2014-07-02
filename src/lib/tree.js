;(function (){
  var create = function(tree, callback) {

    for (var key in tree) {
      var obj = tree[key];

      checkSons(obj);
    }


    function checkSons(obj) {
      if (obj.hasOwnProperty("sons")) {
        for (var key in obj.sons) {
          var son = obj.sons[key];

          if (callback) {
            callback(obj, son);
          }

          checkSons(son);
        }
      }
    }
  };

  exports.create = create;
})();
