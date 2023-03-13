## Facade
Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

### Applicability
- Use the Facade pattern when you need to have a limited but
straightforward interface to a complex subsystem.
_Often, subsystems get more complex over time. Even apply- ing design patterns typically leads to creating more classes. The Facade attempts to fix this problem by providing a shortcut to the most-used features of the subsystem which fit most client requirements._

- Use the Facade when you want to structure a subsystem into layers.
_Create facades to define entry points to each level of a subsys- tem. You can reduce coupling between multiple subsystems by requiring them to communicate only through facades._

### Steps
1. Check whether it’s possible to provide a simpler interface than what an existing subsystem already provides. You’re on the right track if this interface makes the client code independent from many of the subsystem’s classes.
2. Declare and implement this interface in a new facade class. The facade should redirect the calls from the client code to appropriate objects of the subsystem. The facade should be responsible for initializing the subsystem and managing its further life cycle unless the client code already does this.
3. To get the full benefit from the pattern, make all the client code communicate with the subsystem only via the facade.
4. If the facade becomes too big, consider extracting part of its behavior to a new, refined facade class.

### Pros
* You can isolate your code from the complexity of a subsystem.

### Cons
* A facade can become a god object coupled to all classes of an app.
