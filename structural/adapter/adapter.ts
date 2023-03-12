// Say you have two classes with compatible interfaces: RoundHole and RoundPeg. (Hoyo y clavija)
class RoundHole {
  radius: number;

  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    // Return the radius of the hole.
    return this.radius;
  }

  fits(peg: RoundPeg) {
    return this.getRadius() >= peg.getRadius();
  }
}

class RoundPeg {
  radius: number;

  constructor(radius?) {
    this.radius = radius;
  }

  getRadius() {
    // Return the radius of the peg.
    return this.radius;
  }
}

// But there's an incompatible class: SquarePeg.
class SquarePeg {
  width: number;

  constructor(width) {
    this.width = width;
  }

  getWidth() {
    // Return square peg width.
    return this.width;
  }
}

// An adapter class lets you fit square pegs into round holes. It extends the RoundPeg class to let the adapter objects act as round pegs.
class SquarePegAdapter extends RoundPeg {
  // In reality, the adapter contains an instance of the SquarePeg class.
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    super();
    this.peg = peg;
  }

  getRadius() {
    // The adapter pretends that it's a round peg with a radius that could fit the square peg that the adapter actually wraps.
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}

// Somewhere in client code.
const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);
hole.fits(rpeg) // true

const small_sqpeg = new SquarePeg(5);
const large_sqpeg = new SquarePeg(10);
// hole.fits(small_sqpeg) // this won't compile (incompatible types)

const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)
const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
hole.fits(small_sqpeg_adapter) // true
hole.fits(large_sqpeg_adapter) // false