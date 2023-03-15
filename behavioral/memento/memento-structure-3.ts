// There’s another implementation which is useful when you don’t want to leave
// even the slightest chance of other classes accessing the state of the originator through the memento.

// This implementation allows having multiple types of origina- tors and mementos.
// Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
interface Originator {
  save: () => Memento;
}

class ConcreteOriginator {
  state;

  save: () => Memento;

  setState: (state) => void;
}

interface Memento {
  restore: () => void;
}

// Each memento becomes linked to the originator that produced it.
// The originator passes itself to the memento’s constructor, along with the values of its state.
// Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.
class ConcreteMemento {
  originator;
  state;

  constructor(originator, state) {}

  restore: () => void;
}

// Caretakers are now explicitly restricted from changing the state stored in mementos.
// Moreover, the caretaker class becomes independent from the originator because the restora- tion method is now defined in the memento class.
class Caretaker {
  history: Memento[];

  undo: () => void;
}

