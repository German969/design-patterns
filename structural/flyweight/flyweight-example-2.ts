// The flyweight class contains a portion of the state of a tree. These fields store values that are unique for each
// particular tree. For instance, you won't find here the tree coordinates. But the texture and colors shared between many
// trees are here. Since this data is usually BIG, you'd waste a lot of memory by keeping it in each tree object. Instead, we
// can extract texture, color and other repeating data into a separate object which lots of individual tree objects can
// reference.
class TreeType {
  name;
  color;
  texture;

  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas, x, y) {
    // 1. Create a bitmap of a given type, color & texture.
    // 2. Draw the bitmap on the canvas at X and Y coords.
  }
}

// Flyweight factory decides whether to re-use existing flyweight or to create a new object.
class TreeFactory {
  static treeTypes: TreeType[];

  static getTreeType(name, color, texture) {
    let type = this.treeTypes.find(t => t.name === name && t.color === color && t.texture === texture);
    if (type === null) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }
    return type;
  }
}

// The contextual object contains the extrinsic part of the tree state. An application can create billions of these since they
// are pretty small: just two integer coordinates and one reference field.
class Tree {
  x;
  y;
  type: TreeType;

  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas) {
    this.type.draw(canvas, this.x, this.y);
  }
}

// The Tree and the Forest classes are the flyweight's clients. You can merge them if you don't plan to develop the Tree
// class any further.
class Forest {
  trees: Tree[];

  plantTree(x, y, name, color, texture) {
    let type = TreeFactory.getTreeType(name, color, texture);
    let tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas) {
    for (const tree of this.trees) {
      tree.draw(canvas);
    }
  }
}