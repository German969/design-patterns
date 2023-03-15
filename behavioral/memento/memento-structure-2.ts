// There’s an alternative implementation, suitable for program- ming languages that don’t support nested classes

// In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention
// that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only
// declare methods related to the memento’s metadata.

interface Memento {}

// On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class.
// The downside of this approach is that you need to declare all members of the memento public.

class ConcreteMemento {
  state;

  constructor(state) {}

  getState() {}
}

class Originator {
  state;

  save: () => Memento;

  restore: (m: Memento) => void;
}

class Client {
  originator;
  history: Memento[];

  undo() {}
}

