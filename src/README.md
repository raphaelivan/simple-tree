SimpleTree
===========================
An easy way to create a tree structure in JavaScript

![structure](http://oi58.tinypic.com/zvfh1.jpg)

## Usage
First, you need to create the tree structure.

```js
var tree = {
  root: { value: 'root',
    sons:[
      { value: 'A',
        sons: [
          { value: 'AA',
            sons: [
              { value: 'AA1', sons: [] }
            ]
          },
          { value: 'AAA', sons:[] }
        ]
      },

      { value: 'B',
        sons:[
          { value: 'BB', sons: [] }
        ]
      }
    ]
  }
}
```

Then just create your tree.

```js
  var Tree = require('simple-tree');

  Tree.create(tree, function(branch, sons){
    //manipule branch and sons
  });
```

The create method receives two parameters: The tree structure and a callback.


### Callback
The function passed as the callback takes two parameters: the parent and son. It is used to  interact as each element of the tree.


```js
  var Tree = require('simple-tree');

  Tree.create(tree, function(obj, son){
    console.log(obj.value);
    console.log("\t => ", son.value);
  });
```


## License
simple-tree is available under the MIT license.