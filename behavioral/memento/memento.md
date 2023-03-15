## Memento
Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

_Also known as: Snapshot_

### Applicability
- Use the Memento pattern when you want to produce snap- shots of the object’s state to be able to restore a previous state of the object.
_The Memento pattern lets you make full copies of an object’s state, including private fields, and store them separately from the object. This pattern it’s also indispensable when dealing with transactions_

- Use the pattern when direct access to the object’s fields/get- ters/setters violates its encapsulation.
_The Memento makes the object itself responsible for creating a snapshot of its state. No other object can read the snapshot, making the original object’s state data safe and secure._

### Steps
1. Determine what class will play the role of the originator. It’s important to know whether the program uses one central object of this type or multiple smaller ones.
2. Create the memento class. One by one, declare a set of fields that mirror the fields declared inside the originator class.
3. Make the memento class immutable. A memento should accept the data just once, via the constructor. The class should have no setters.
4. If your programming language supports nested classes, nest the memento inside the originator. You may add some metadata operations to the interface, but nothing that exposes the originator’s state.
5. Add a method for producing mementos to the originator class. The originator should pass its state to the memento via one or multiple arguments of the memento’s constructor. The return type of the method should be of the interface you extracted in the previous step.
6. Add a method for restoring the originator’s state to its class. It should accept a memento object as an argument. If you extracted an interface in the previous step, make it the type of the parameter.
7. The caretaker, whether it represents a command object, a his- tory, or something entirely different, should know when to request new mementos from the originator, how to store them and when to restore the originator with a particular memento.
8. The link between caretakers and originators may be moved into the memento class. In this case, each memento must be connected to the originator that had created it. The restoration method would also move to the memento class.

### Pros
* You can produce snapshots of the object’s state without violating its encapsulation.
* You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

### Cons
* The app might consume lots of RAM if clients create mementos too often.
* Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.
* Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.
