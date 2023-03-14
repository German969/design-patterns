// The Component declares the common interface for both wrap- pers and wrapped objects.
interface Component {
  execute: () => void;
}

// Concrete Component is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.
class ConcreteComponent implements Component {
  execute() {}
}

// The Base Decorator class has a field for referencing a wrapped object.
// The field’s type should be declared as the component interface so it can contain both concrete components and dec- orators.
// The base decorator delegates all operations to the wrapped object.
class BaseDecoratorExample implements Component {
  wrapee: Component;

  constructor(c: Component) {
    this.wrapee = c;
  }

  execute() {
    this.wrapee.execute();
  }
}

// Concrete Decorators define extra behaviors that can be added to components dynamically.
// Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.
class ConcreteDecorator1 extends BaseDecoratorExample {
  execute() {
    super.execute();
  }

  extra() {}
}

class ConcreteDecorator2 extends BaseDecoratorExample {
  execute() {
    super.execute();
  }

  extra() {}
}

// client
// The Client can wrap components in multiple layers of deco- rators, as long as it works with all objects via the component interface.
const a = new ConcreteComponent();
const b = new ConcreteDecorator1(a);
const c = new ConcreteDecorator2(b);

c.execute();

// const c = new ConcreteDecorator2( new ConcreteDecorato1( new ConcreteComponent() ) );