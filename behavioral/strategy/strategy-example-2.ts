// The strategy interface declares operations common to all supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete strategies.
interface IStrategy {
  execute: (a, b) => void;
}

// Concrete strategies implement the algorithm while following the base strategy interface. The interface makes them
// interchangeable in the context.
class ConcreteStrategyAdd implements IStrategy {
  execute(a, b) {
    return a + b;
  }
}

class ConcreteStrategySubtract implements IStrategy {
  execute(a, b) {
    return a - b;
  }
}

class ConcreteStrategyMultiply implements IStrategy {
  execute(a, b) {
    return a * b;
  }
}

// The context defines the interface of interest to clients.
class ContextExample {
  // The context maintains a reference to one of the strategy objects. The context doesn't know the concrete class of a
  // strategy. It should work with all strategies via the strategy interface.
  private strategy: IStrategy;

  // Usually the context accepts a strategy through the constructor, and also provides a setter so that the
  // strategy can be switched at runtime.
  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  // The context delegates some work to the strategy object instead of implementing multiple versions of the
  // algorithm on its own.
  executeStrategy(a: number, b: number) {
    return this.strategy.execute(a, b);
  }
}

// The client code picks a concrete strategy and passes it to the context. The client should be aware of the differences
// between strategies in order to make the right choice.
class ExampleApplication {
  main() {
    // Create context object.
    const context = new ContextExample();

    // Read first number.
    // Read last number.
    // Read the desired action from user input.
    let action;
    let addition;
    let subtraction;
    let multiplication;

    if (action == addition) {
      context.setStrategy(new ConcreteStrategyAdd());
    }
    if (action == subtraction) {
      context.setStrategy(new ConcreteStrategySubtract());
    }
    if (action == multiplication) {
      context.setStrategy(new ConcreteStrategyMultiply());
    }

    const result = context.executeStrategy(1, 2);

    console.log(result);
  }
}