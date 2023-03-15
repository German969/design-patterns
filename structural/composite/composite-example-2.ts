// The Component interface describes operations that are common to both simple and complex elements of the tree.
interface Package {
  calculatePrice: () => number;
}

// The Leaf is a basic element of a tree that doesn’t have sub-elements.
class Product implements Package {
  price: number;

  constructor(price: number) {
    this.price = price;
  }

  // Do some work
  calculatePrice() {
    return this.price;
  }
}

// The Container (aka composite) is an element that has sub-elements: leaves or other containers.
// A container doesn’t know the concrete classes of its children. It works with all sub-ele- ments only via the component interface.
class Box implements Package {
  children: Package[] = [];

  add(c: Package) {
    this.children.push(c);
  }

  remove(c: Package) {

  }

  getChildren(): Package[] {
    return this.children;
  }

  // Delegate all owrk to child components
  calculatePrice() {
    let result = 0;
    for (const child of this.children) {
      result += child.calculatePrice();
    }
    return result;
  }
}

const hammer = new Product(20);
const toolBox = new Box();
toolBox.add(hammer);

const phone = new Product(100);
const headphones = new Product(10);
const phoneBox = new Box();
phoneBox.add(phone);
phoneBox.add(headphones);

const charger = new Product(5);
const chargerBox = new Box();
chargerBox.add(charger);

const mobileBox = new Box();
mobileBox.add(phoneBox);
mobileBox.add(chargerBox);

const receipt = new Product(0);

const mainBox = new Box();
mainBox.add(toolBox);
mainBox.add(mobileBox);
mainBox.add(receipt);

console.log(mainBox.calculatePrice());
