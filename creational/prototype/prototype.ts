interface Prototype {
  clone(): Prototype;
}

// An object that supports cloning is called a prototype. When your objects have dozens of fields and hundreds of possible configurations
// cloning them might serve as an alternative to subclassing.

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
const existing = new ConcretePrototype({ field1: 'asd' });
const copy = existing.clone();