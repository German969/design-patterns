// The Prototype interface declares the cloning methods. In most cases, it’s a single clone method.
interface Prototype {
  clone(): Prototype;
}

// An object that supports cloning is called a prototype. When your objects have dozens of fields and hundreds of possible configurations
// cloning them might serve as an alternative to subclassing.

// he Concrete Prototype class implements the cloning method.
// In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
class ConcretePrototype implements Prototype {
  field1;

  constructor(prototype) {
    this.field1 = prototype.field1;
  }

  clone(): Prototype {
    return new ConcretePrototype(this);
  }
}

class SubclassPrototype extends ConcretePrototype {
  field2;

  constructor(prototype) {
    super(prototype);
    this.field2 = prototype.field2;
  }

  clone(): Prototype {
    return new SubclassPrototype(this);
  }
}

// Client
// The Client can produce a copy of any object that follows the prototype interface.
const existing = new ConcretePrototype({ field1: 'asd' });
const copy = existing.clone();