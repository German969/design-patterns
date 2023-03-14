// The Builder interface declares product construction steps that are common to all types of builders.
interface Builder {
  reset: () => void;
  buildStepA: () => void;
  buildStepB: () => void;
  buildStepZ: () => void;
}

// Concrete Builders provide different implementations of the construction steps.
// Concrete builders may produce products that don’t follow the common interface.
class ConcreteBuilder1 implements Builder {
  result: Product1;

  reset() {
    this.result = new Product1();
  }
  
  buildStepA() {
    this.result.setFeatureA();
  }

  buildStepB() {}

  buildStepZ() {}

  getResult(): Product1 {
    return this.result;
  }
}

class ConcreteBuilder2 implements Builder {
  result: Product2;

  reset() {}
  
  buildStepA() {}

  buildStepB() {}

  buildStepZ() {}

  getResult(): Product2 {
    return this.result;
  }
}

// Products are resulting objects. Products constructed by differ- ent builders don’t have to belong to the same class hierarchy or interface.
class Product1 {
  setFeatureA() {}
}

class Product2 {}

// The Director class defines the order in which to call construc- tion steps, so you can create and reuse specific configurations of products.
class Director {
  builder: Builder;

  constructor(builder) {
    this.builder = builder;
  }

  changeBuilder(builder) {}

  make(type) {
    this.builder.reset();
     if (type == "simple") {
      this.builder.buildStepA();
     } else {
      this.builder.buildStepB();
      this.builder.buildStepZ();
     }
    }
}

// Client
// The Client must associate one of the builder objects with the director.
// Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction.
// However, there’s an alterna- tive approach for when the client passes the builder object to the production method of the director.
const b = new ConcreteBuilder1();
const d = new Director(b);
d.make('a');
const p: Product1 = b.getResult();