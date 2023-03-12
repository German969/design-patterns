// The Abstraction provides high-level control logic.
class Abstraction {
  i: Implementation;

  feature1() {
    this.i.method1();
  }

  feature2() {
    this.i.method2();
    this.i.method3();
  }
}

// The Implementation declares the interface that’s common for all concrete implementations.
interface Implementation {
  method1: () => void;
  method2: () => void;
  method3: () => void;
}

// Concrete Implementations contain platform-specific code.
class ConcreteImplementation1 implements Implementation {
  method1() {}
  method2() {}
  method3() {}
}

class ConcreteImplementation2 implements Implementation {
  method1() {}
  method2() {}
  method3() {}
}

// (Optional)
// Refined Abstractions provide variants of control logic.
class RefinedAbstraction extends Abstraction {
  featureN() {
    // this.i.methodN();
    // this.i.methodM();
  }
}

// Client
// Usually, the Client is only interested in working with the abstraction.
// However, it’s the client’s job to link the abstraction object with one of the implementation objects.
const abstraction = new Abstraction();
abstraction.i = new ConcreteImplementation1();
abstraction.feature1();