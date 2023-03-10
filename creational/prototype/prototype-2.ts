// Base prototype
class Shape {
  X: number;
  Y: number;
  color: string;

  // The prototype constructor. A fresh object is initialized with values from the existing object.
  // Only for method overloading support
  // constructor(source?: Shape) {
  //   if (source) {
  //     this.X = source.X;
  //     this.Y = source.Y;
  //     this.color = source.color;
  //   }
  // }

  // The clone operation returns one of the Shape subclasses.
  clone(): Shape {
    const copy = new Shape();
    copy.X = this.X;
    copy.Y = this.Y;
    copy.color = this.color;

    return copy;
  }
}

// Concrete prototype. The cloning method creates a new object in one go by calling the constructor of the current class and
// passing the current object as the constructor's argument. Performing all the actual copying in the constructor helps to
// keep the result consistent: the constructor will not return a result until the new object is fully built; thus, no object
// can have a reference to a partially-built clone.
class Rectangle extends Shape {
  width: number;
  height: number;

  // only for method overloading support
  // constructor(source?: Rectangle) {
  //   // A parent constructor call is needed to copy private fields defined in the parent class.
  //   super();

  //   if (source) {
  //     this.width = source.width;
  //     this.height = source.height;
  //   }
  // }

  clone(): Shape {
    const copy = new Rectangle();
    copy.width = this.width;
    copy.height = this.height;

    return copy;
  }
}

class Circle extends Shape {
  radius: number;

  // Only for method overloading support
  // constructor(source?: Circle) {
  //   super(source);
  //   if (source) {
  //     this.radius = source.radius;
  //   }
  // }

  clone(): Shape {
    const copy = new Circle();
    copy.radius = this.radius;

    return copy;
  }
}

// Client
class App {
  shapes: Shape[];

  constructor() {
    const circle: Circle = new Circle();
    circle.X = 10;
    circle.Y = 10;
    circle.radius = 20;
    this.shapes.push(circle);

    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);

    const rectangle = new Rectangle();
    rectangle.width = 10;
    rectangle.height = 20;
    this.shapes.push(rectangle);
  }

  businessLogic() {
    // Prototype lets you produce a copy of an object without knowing anything about its type.
    const shapesCopy: Shape[] = new Array();

    // For instance, we don't know the exact elements in the  shapes array. All we know is that they are all
    // shapes. But thanks to polymorphism, when we call the  `clone` method on a shape the program checks its real
    // class and runs the appropriate clone method defined  in that class. That's why we get proper clones
    // instead of a set of simple Shape objects.
    for (const s of this.shapes) {
      shapesCopy.push(s.clone());
    }

    // The `shapesCopy` array contains exact copies of the  `shape` array's children.
  }
}