// The Product declares the interface, which is common to all objects that can be produced by the creator and its subclasses.
interface Product {
  doStuff: () => void;
}

// Concrete Products are different implementations of the prod- uct interface.
class ConcreteProductA implements Product {
  doStuff() {}
}

class ConcreteProductB implements Product {
  doStuff() {}
}

// The Creator class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface.
// You can declare the factory method as abstract to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type.
class Creator {
  someOperation() {
    const p: Product = this.createProduct();
    p.doStuff();
  }

  createProduct(): Product {
    return new ConcreteProductA();
  }
}

// Concrete Creators override the base factory method so it returns a different type of product.
class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}