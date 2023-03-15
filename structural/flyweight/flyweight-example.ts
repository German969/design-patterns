// Previous
// class Game {
//   particles: Particle[];

//   static addParticle(particle) {}

//   draw(canvas) {
//     for (const p of this.particles) {
//       p.draw(canvas);
//     }
//   }
// }

class Game {
  mps: MovingParticle[];
  private particles: Particle[];

  static addParticle(coords, vector, speed, color, sprite) {
    // 1. Go over the particles array an find an existing particle with the same color ans sprite, if doesn't exist, create a new one
    // 2. Create a moving particle with given data and the particle object from first step
  }

  draw(canvas) {}
}

// A more elegant solution is to create a separate context class that would store the extrinsic state along with reference to the flyweight object.

// Previous version
// class Particle {
//   coords;
//   vector;
//   speed;
//   color;
//   sprite;

//   move() {}

//   draw(canvas) {}
// }

// Lots of moving particles
// Unique (extrinsic) state (mutable)
// The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it.
class MovingParticle {
  particle;
  coords;
  vector;
  speed;

  constructor(particle) {
    this.particle = particle
  }

  move() {
    this.particle.move(this.coords, this.vector, this.speed);
  }

  draw(canvas) {
    this.particle.draw(this.coords, canvas);
  }
}

// Few Particles
// Repeating (intrinsic) state (immutable)
// an object that only stores the intrinsic state is called a flyweight.
class Particle {
  color;
  sprite;

  // Since the same flyweight object can be used in different con- texts, you have to make sure that its state can’t be modified.
  constructor(color, sprite) {
    this.color = color;
    this.sprite = sprite;
  }

  move(coords, vector, speed) {}

  draw(coords, canvas) {}
}

// For more convenient access to various flyweights, you can create a factory method that manages a pool of existing flyweight objects.

// Previous
// class Unit {
//   coords;
//   weaponPower;
  
//   fireAt(target: Unit) {
//     const p = new Particle();
//     p.coords = this.coords;
//     p.vector = target.coords;
//     p.speed = this.weaponPower;
//     p.color = 'red';
//     p.sprite = load("bullet.jpeg");

//     Game.addParticle(p);
//   }
// }

class Unit {
  coords;
  weaponPower;

  fireAt(target: Unit) {
    Game.addParticle(this.coords, target.coords, this.weaponPower, "red", "bullet.jpeg");
  }
}

function load(name) {}