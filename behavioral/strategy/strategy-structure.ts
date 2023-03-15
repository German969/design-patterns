// The Context maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
class Context {
  strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  doSomething() {
    this.strategy.execute();
  }
}

// The Strategy interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
interface Strategy {
  execute: (data?) => void;
}

// Concrete Strategies implement different variations of an algo- rithm the context uses.
class Concretestrategy1 {
  execute(data) {}
}

class Concretestrategy2 {
  execute(data) {}
}

// Client
// The context calls the execution method on the linked strategy object each time it needs to run the algorithm.
// The context doesn’t know what type of strategy it works with or how the algorithm is executed.

// The Client creates a specific strategy object and passes it to the context.
// The context exposes a setter which lets clients replace the strategy associated with the context at runtime.
const context = new Context();
const str = new Concretestrategy1();
context.setStrategy(str);
context.doSomething();
// ...
const other = new Concretestrategy2();
context.setStrategy(other);
context.doSomething();