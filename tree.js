;(function (){

  function Tree (tree) {
    // var
    //     element = document.querySelector(element);
    // ;

    buildTree(tree);


    function buildTree(tree){
      for (var key in tree) {
        var obj = tree[key];
        console.log("=> ", obj.value);

        checkSons(obj);
      }
    };
  }

  function checkSons(obj) {
    if (obj.hasOwnProperty("sons")) {
      for (var key in obj.sons) {
        var son = obj.sons[key]

        console.log("\t\t => ", son.value);
      }
    };
  }

  this.Tree = Tree;
})(this);

