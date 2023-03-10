// Product
class House {
  walls: number;
  doors: number;
  windows: number;
  roof: string | null;
  garage: boolean;
}

// Builder
class HouseBuilder {
  // BAD example (the problem)
  // constructor(windows, doors, rooms, hasGarage, hasSwimmingPool, hasStatues, hasGarden) {}

  // Solution
  private house: House;

  reset() {
    this.house = {
      walls: 0,
      doors: 0,
      windows: 0,
      roof: null,
      garage: false
    };
  }

  buildWalls(n: number) {
    this.house.walls = n;
  }
  buildDoors(n: number) {
    this.house.doors = n;
  }
  buildWindows(n:number) {
    this.house.windows = n;
  }
  buildRoof(t: string) {
    this.house.roof = t;
  }
  buildGarage() {
    this.house.garage = true;
  }

  // The Builder doesn’t allow other objects to access the product while it’s being built.

  getResult(): House {
    return this.house;
  }
}

// Director
// (Optional)
// The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.
class HouseDirector {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  changeBuilder(builder: HouseBuilder) {
    this.builder = builder;
  }

  make(type: string) {
    this.builder.reset();

    if (type === "simple") {
      this.builder.buildWalls(4);
      this.builder.buildDoors(1);
      this.builder.buildRoof('wooden');
    } else {
      this.builder.buildWalls(6);
      this.builder.buildDoors(2);
      this.builder.buildRoof('bricks');
      this.builder.buildGarage();
    }
  }
}

// ConcreteBuilder
// You can pass a builder object to the director
// Concrete builders may produce products that don’t follow the common interface.
class SimpleHouseBuilder {
  result: House;

  reset() {
    this.result = new House();
  }

  buildWalls() {
    this.result.walls = 4;
  }
  buildDoors() {
    this.result.doors = 1;
  }
  buildRoof() {
    this.result.roof = 'wooden';
  }

  getResult() {
    return this.result;
  }
}