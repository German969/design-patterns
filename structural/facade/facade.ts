// The Facade provides convenient access to a particular part of the subsystem’s functionality.
// It knows where to direct the client’s request and how to operate all the moving parts.
class Facade {
  subsystem1: SubsystemClass1;
  subsystem2: SubsystemClass2;
  subsystem3: SubsystemClass3;

  optionalAdditionalFacade;

  subsystemOperation() {
    this.subsystem1.method1();
    this.subsystem2.method2();
    this.subsystem3.method3();
  }
}

// An Additional Facade class can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure.
class AdditionalFacade {
  anotherOperation() {}
}

// The Complex Subsystem consists of dozens of various objects.
// To make them all do something meaningful, you have to dive deep into the subsystem’s implementation details, such as initializing objects
// in the correct order and supplying them with data in the proper format.
class SubsystemClass1 {
  method1() {}
}
class SubsystemClass2 {
  method2() {}
}
class SubsystemClass3 {
  method3() {}
}

// Client
// The Client uses the facade instead of calling the subsystem objects directly.
const facade = new Facade();
facade.subsystemOperation();