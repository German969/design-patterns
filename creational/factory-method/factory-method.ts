// Instead of calling `new` to build objects, we invoke a factory method

// Creator
abstract class Logistics {
  // Operation
  planDelivery() {
    const t: Transport = this.createTransport();

    t.deliver();
  }

  // Create Product
  // declare as abstract or return default type
  abstract createTransport(): Transport
}

// concrete Creator A
class RoadLogistics extends Logistics {
  // Subclasses can alter aparent method
  // Create Product
  createTransport() {
    // We can only return objects from the same base class as the parent
    return new Truck();
  }
}

// Concrete Creator B
class SeaLogistics extends Logistics {
  // Create Product
  createTransport() {
    // Overrides base method to return new type
    return new Ship();
  }
}

// Product
interface Transport {
  // Shared Functionality
  deliver: () => void;
}

// Concrete Product A
class Truck implements Transport {
  deliver() {
    console.log('Delivering by land');
  }
}

// Concrete Product B
class Ship implements Transport {
  deliver() {
    console.log('Delivering by water')
  }
}