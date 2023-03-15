//The Abstract Class declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order.
// The steps may either be declared abstract or have some default implementation.
abstract class AbstractClass {
  templateMethod() {
    this.step1();
    if (this.step2()) {
      this.step3();
    } else {
      this.step4();
    }
  }

  step1() {}
  step2() { return true }
  step3() {}
  step4() {}
}

// Concrete Classes can override all of the steps, but not the tem- plate method itself.
class ConcreteClass1 extends AbstractClass {
  step3() {}

  step4() {}
}

class ConcreteClass2 {
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}