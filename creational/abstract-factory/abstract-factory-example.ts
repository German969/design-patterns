// Interface for the product family
// Abstract Product
interface Chair {
  hasLegs: () => boolean;
  sitOn: () => boolean;
}

// Make all variant products follow that interface
// Concrete Product
class VictorianChair implements Chair {
  hasLegs() {
    return true;
  }

  sitOn() {
    return true;
  }
}

class ModernChair {
  hasLegs() {
    return false;
  }

  sitOn() {
    return true;
  }
}

class ArtDecoChair {
  hasLegs() {
    return true;
  }

  sitOn() {
    return true;
  }
}

// Abstract Factory
interface FurnitureFactory {
  // Return abstract product types
  createChair: () => Chair;
  createCoffeeTable: () => CoffeeTable;
  createSofa: () => Sofa;
}

// Separate Factory Class for each product variant based on the Abstract Factory interface
// Concrete Factory
class ModernFurnitureFactory implements FurnitureFactory {
  // Signature methods must return abstract products to not couple the client to a specific implementation
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
}

class ArtDecoFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ArtDecoChair();
  }

  createSofa(): Sofa {
    return new ArtDecoSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new ArtDecoCoffeeTable();
  }
}


interface CoffeeTable {}
interface Sofa {}

class ModernSofa implements Sofa {}
class VictorianSofa implements Sofa {}
class ArtDecoSofa implements Sofa {}

class ModernCoffeeTable implements CoffeeTable {}
class VictorianCoffeeTable implements CoffeeTable {}
class ArtDecoCoffeeTable implements CoffeeTable {}

// Client implementation that creates the objects
class App {
  factory: FurnitureFactory;

  buildFurniture(f: FurnitureFactory) {
    this.factory = f;
    const chair = this.factory.createChair();
    const sofa = this.factory.createSofa();
    const ct = this.factory.createCoffeeTable();
    
    return { chair, sofa, ct };
  };
}

const app = new App();
app.buildFurniture(new ModernFurnitureFactory());