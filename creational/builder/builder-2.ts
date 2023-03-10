// Using the Builder pattern makes sense only when your products are quite complex and require extensive configuration. The
// following two products are related, although they don't have a common interface.

// The builder interface specifies methods for creating the different parts of the product objects.
interface Builder {
  reset: () => void;
  setSeats: (n: number) => void;
  setEngine: (e: Engine) => void;
  setTripComputer: () => void;
  setGPS: () => void;
}

// The director is only responsible for executing the building steps in a particular sequence. It's helpful when producing
// products according to a specific order or configuration. Strictly speaking, the director class is optional, since the
// client can control builders directly.
class Director {
  // The director works with any builder instance that the client code passes to it. This way, the client code may
  // alter the final type of the newly assembled product. The director can construct several product variations
  // using the same building steps.
  makeSUV(builder: Builder) {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine(new SUVEngine());
  }

  makeSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer();
    builder.setGPS();
  }
}

// Concrete Builder
// The concrete builder classes follow the builder interface and provide specific implementations of the
// building steps. Your program may have several variations of builders, each implemented differently.
class CarBuilder implements Builder {
  car: Car;

  // A fresh builder instance should contain a blank product object which it uses in further assembly.
  constructor() {
    this.reset();
  }

  // The reset method clears the object being built.
  reset() {
    this.car = new Car();
  }

  // All production steps work with the same product instance
  setSeats(n: number) {
    this.car.seats = n;
  }

  setEngine(e: Engine) {
    this.car.engine = e;
  }

  setTripComputer() {
    this.car.tripComputer = true;
  }

  setGPS() {
    this.car.gps = true;
  }

  getResult() {
    const product = { ...this.car };
    this.reset();
    return product;
  }
}

// Concrete builder 2
// Can have different implementations for the construction
// Unlike other creational patterns, builder lets you construct products that don't follow the common interface.
class CarManual {
  seats: string;
  engine: string;
  tripComputer: string;
  gps: string;
}
class CarManualBuilder implements Builder {
  manual: CarManual;

  reset() {
    this.manual = new CarManual();
  }

  setSeats(n: number) {
    this.manual.seats = `This car has ${n} seats`;
  }

  setEngine(e: Engine) {
    this.manual.engine = `This car has an ${e.name} engine`;
  }

  setTripComputer() {
    this.manual.tripComputer = 'This car has a Trip Computer';
  }

  setGPS() {
    this.manual.gps = 'This car has a GPS';
  }

  getResult() {
    return this.manual;
  }
}

// Client
// The client code creates a builder object, passes it to the director and then initiates the construction process. The end
// result is retrieved from the builder object.
const director = new Director();

const builder: CarBuilder = new CarBuilder();
director.makeSportsCar(builder);
const car: Car = builder.getResult();

const manualBuilder: CarManualBuilder = new CarManualBuilder();
director.makeSportsCar(manualBuilder);

// The final product is often retrieved from a builder  object since the director isn't aware of and not
// dependent on concrete builders and products.
const manual: CarManual = manualBuilder.getResult();

// Types
interface Engine {
  name: string;
}
class SportEngine implements Engine {
  name: string = 'Sport';
}
class SUVEngine implements Engine {
  name: string = 'SUV'
}
class Car {
  seats: number;
  engine: Engine;
  tripComputer: boolean;
  gps: boolean;
}

// If the client code needs to assemble a special, fine-tuned model of a car, it can work with the builder directly.
// On the other hand, the client can delegate the assembly to the direc- tor class, which knows how to use a builder to construct sever- al of the most popular models of cars.
