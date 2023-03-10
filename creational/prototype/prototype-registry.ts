interface Prototype2 {
  id?;
  getColor: () => string;
  clone: () => Prototype2;
}

class Button implements Prototype2 {
  x;
  y;
  color;

  constructor(prototype) {}

  getColor(): string {
    return this.color;
  }

  clone(): Prototype2 {
    return new Button(this);
  }
}

// The Prototype Registry provides an easy way to access fre- quently-used prototypes.
// It stores a set of pre-built objects that are ready to be copied.
class PrototypeRegistry {
  items: Prototype2[];

  addItem(id: string, p: Prototype2) {
    this.items.push({ id, ...p });
  }

  getById(id: string): Prototype2 | null {
    for (const item of this.items) {
      if (item.id === id) {
        return item.clone();
      }
    }
    return null;
  };

  getByColor(color: string): Prototype2 | null {
    for (const item of this.items) {
      if (item.getColor() === color) {
        return item.clone();
      }
    }
    return null;
  }
}