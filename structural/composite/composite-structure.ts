// The Component interface describes operations that are common to both simple and complex elements of the tree.
interface Component {
  execute: () => void;
}

// The Leaf is a basic element of a tree that doesn’t have sub-elements.
class Leaf implements Component {
  // Do some work
  execute() {}
}

// The Container (aka composite) is an element that has sub-elements: leaves or other containers.
// A container doesn’t know the concrete classes of its children. It works with all sub-ele- ments only via the component interface.
class Composite implements Component {
  children: Component[];

  add(c: Component) {}
  remove(c: Component) {}
  getChildren(): Component[] {
    return this.children;
  }

  // Delegate all owrk to child components
  execute() {}
}