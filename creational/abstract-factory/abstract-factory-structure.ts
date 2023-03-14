// Abstract Products declare interfaces for a set of distinct but related products which make up a product family.
abstract class AbstractProductA {}

abstract class AbstractProductB {}

// Concrete Products are various implementations of abstract products, grouped by variants. Each abstract product must be implemented in all given variants.
class ConcreteProductA1 extends AbstractProductA {}

class ConcreteProductB1 extends AbstractProductB {}

class ConcreteProductA2 extends AbstractProductA {}

class ConcreteProductB2 extends AbstractProductB {}

// The Abstract Factory interface declares a set of methods for creating each of the abstract products.
interface AbstractFactory {
  createProductA: () => AbstractProductA;
  createProductB: () => AbstractProductB;
}

// Concrete Factories implement creation methods of the abstract factory. Each concrete factory corresponds to a specif- ic variant of products and creates only those product variants.
class ConcreteFactory1 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

// Client
// Although concrete factories instantiate concrete products, sig- natures of their creation methods must return corresponding abstract products. This way the client code that uses a facto- ry doesn’t get coupled to the specific variant of the product it gets from a factory.
// The Client can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.
class ApplicationExample {
  factory: AbstractFactory;

  constructor(f: AbstractFactory) {
    this.factory = f;
  }

  someOperation() {
    const pa: AbstractProductA = this.factory.createProductA();
  }
}