// The Iterator interface declares the operations required for tra- versing a collection:
// fetching the next element, retrieving the current position, restarting iteration, etc.
interface IIterator {
  getNext: () => any;
  hasMore: () => boolean;
}

// Concrete Iterators implement specific algorithms for travers- ing a collection. The iterator object should track the traversal progress on its own.
// This allows several iterators to traverse the same collection independently of each other.
class ConcreteIterator implements IIterator {
  collection: ConcreteCollection;
  iterationState;

  constructor(c: ConcreteCollection) {
    this.collection = c;
  }

  getNext() {}

  hasMore() { return true }
}

// The Collection interface declares one or multiple methods for getting iterators compatible with the collection.
// Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.
interface Iterablecollection {
  createIterator: () => IIterator;
}

// Concrete Collections return new instances of a particular con- crete iterator class each time the client requests one.
class ConcreteCollection implements Iterablecollection {
  createIterator(): IIterator {
    return new ConcreteIterator(new ConcreteCollection());
  }
}

// The Client works with both collections and iterators via their interfaces.
// This way the client isn’t coupled to concrete class- es, allowing you to use various collections and iterators with the same client code.

// Typically, clients don’t create iterators on their own, but instead get them from collections.