// The Flyweight Factory manages a pool of existing flyweights.
class FlyweightFactory {
  cache: Flyweight[];

  // The factory looks over previ- ously created flyweights and either returns an existing one that matches search criteria or creates a new one if nothing is found.
  getFlyweight(repeatingState) {
    if (this.cache[repeatingState] === null) {
      this.cache[repeatingState] = new Flyweight(repeatingState);
    }
    return this.cache[repeatingState];
  }
}

// The Flyweight class contains the portion of the original object’s state that can be shared between multiple objects.
class Flyweight {
  // The state stored inside a flyweight is called intrinsic.
  repeatingState;

  constructor(repeationgState) {}

  // The state passed to the flyweight’s methods is called extrinsic.
  operation(uniqueState) {}
}

const factory = new FlyweightFactory();

class Context {
  // The Context class contains the extrinsic state, unique across all original objects.
  // When a context is paired with one of the flyweight objects, it represents the full state of the original object.
  uniqueState;
  flyweight;

  constructor(repeatingState, uniqueState) {
    this.uniqueState = uniqueState;
    this.flyweight = factory.getFlyweight(repeatingState);
  }

  operation() {
    this.flyweight.operation(this.uniqueState);
  }
}

// The Client calculates or stores the extrinsic state of flyweights.