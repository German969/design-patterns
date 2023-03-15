// The Visitor interface declares a set of visiting methods that can take concrete elements of an object structure as argu- ments.
// These methods may have the same names if the pro- gram is written in a language that supports overloading, but the type of their parameters must be different.
interface Visitor {
  visitA: (e: ConcreteElementA) => void;
  visitB: (e: ConcreteElementB) => void;
}

// Each Concrete Visitor implements several versions of the same behaviors, tailored for different concrete element classes.
class ConcreteVisitor implements Visitor {
  visitA(e: ConcreteElementA) {
    e.featureA();
  }
  visitB(e: ConcreteElementB) {
    e.featureB();
  }
}

// The Element interface declares a method for “accepting” vis- itors. This method should have one parameter declared with the type of the visitor interface.
interface IElement {
  accept: (v: Visitor) => void;
}

// Each Concrete Element must implement the acceptance method.
// The purpose of this method is to redirect the call to the proper visitor’s method corresponding to the current element class.
class ConcreteElementA implements IElement {
  featureA() {}

  accept(v: Visitor) {
    v.visitA(this);
  }
}

class ConcreteElementB implements IElement {
  featureB() {}

  accept(v: Visitor) {
    v.visitB(this);
  }
}

// Client
// The Client usually represents a collection or some other com- plex object (for example, a Composite tree).
// Usually, clients aren’t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.
const el = new ConcreteElementA();
el.accept(new ConcreteVisitor());


