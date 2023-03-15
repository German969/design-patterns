// The abstract factory interface declares a set of methods that return different abstract products. These products are called
// a family and are related by a high-level theme or concept. Products of one family are usually able to collaborate among
// themselves. A family of products may have several variants, but the products of one variant are incompatible with the
// products of another variant.
interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
}

// Concrete factories produce a family of products that belong to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.
class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Each distinct product of a product family should have a base interface. All variants of the product must implement this interface.
interface Button {
  paint: () => void;
}

// Concrete products are created by corresponding concrete factories.
class WinButton implements Button {
  paint() {
    // Render a button in Windows style.
    console.log('Painting Windows Button');
  }
}

class MacButton implements Button {
  paint() {
    // Render a button in macOS style.
    console.log('Painting Mac Button');
  }
}

// Here's the base interface of another product. All products can interact with each other, but proper interaction is
// possible only between products of the same concrete variant.
interface Checkbox {
  paint: () => void;
}

class WinCheckbox implements Checkbox {
  paint() {
    // Render a checkbox in Windows style.
    console.log('Rendering Windows Chackbox');
  }
}

class MacCheckbox implements Checkbox {
  paint() {
    // Render a checkbox in macOS style.
    console.log('Rendering Mac Chackbox');
  }
}

// The client code works with factories and products only through abstract types: GUIFactory, Button and Checkbox. This
// lets you pass any factory or product subclass to the client code without breaking it.
class Application {
  private factory: GUIFactory;
  private button: Button;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
  }

  paint() {
    this.button.paint();
  }
}

// The application picks the factory type depending on the current configuration or environment settings and creates it
// at runtime (usually at the initialization stage).
class AppConfig {
  initialize() {
    const config = readApplicationConfigFile();
    let factory: GUIFactory;

    if (config.OS === "Windows") {
      factory = new WinFactory();
    } else if (config.OS === "Mac") {
      factory = new MacFactory();
    } else {
      throw new Error("Error! Unknown operating system.");
    }

    const app = new Application(factory);
  }
}

function readApplicationConfigFile() {
  return {
    OS: "Windows"
  }
};