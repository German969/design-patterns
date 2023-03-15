// The abstract class defines a template method that contains a skeleton of some algorithm composed of calls, usually to
// abstract primitive operations. Concrete subclasses implement these operations, but leave the template method itself intact.
class GameAI {
  builtStructures;
  map;

  // The template method defines the skeleton of an algorithm.
  turn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  // Some of the steps may be implemented right in a base class.
  collectResources() {
    for (const s of this.builtStructures) {
      s.collect();
    }
  }

  // And some of them may be defined as abstract.
  // abstract buildStructures()
  // abstract buildUnits()
  buildStructures() {}
  buildUnits() {}

  // A class can have several template methods.
  attack() {
    const enemy = this.closestEnemy();
    if (enemy == null) {
      this.sendScouts(this.map.center);
    } else {
      this.sendWarriors(enemy.position);
    }
  }

  closestEnemy() { return { position: 0 } }

  // Abstract
  sendScouts(position) {}
  sendWarriors(position) {}
}

const resourcesAvailable = true;
const scoutsAvailable = false;

// Concrete classes have to implement all abstract operations of the base class but they must not override the template method itself.
class OrcsAI extends GameAI {
  scouts;
  warriors;

  buildStructures() {
    if (resourcesAvailable) {
      // Build farms, then barracks, then stronghold
    }
  }

  buildUnits() {
    if (resourcesAvailable) {
      if (!scoutsAvailable) {
        // Build peon, add it to scouts group.
      } else {
        // Build grunt, add it to warriors group.
      }
    }
  }

  sendScouts(position) {
    if (this.scouts.length > 0) {
      // Send scouts to position
    }
  }

  sendWarriors(position) {
    if (this.warriors.length > 5) {
      // Send warriors to position
    }
  }
}

// Subclasses can also override some operations with a default implementation.
class MonstersAi extends GameAI {
  collectResources() {
    // Monsters don't collect resources
  }

  buildStructures() {
    // Monsters don't build structures
  }

  buildUnits() {
    // monsters don't build units
  }
}