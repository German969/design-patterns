## Mediator
Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

_Also known as: Intermediary, Controller_

### Applicability
- Use the Mediator pattern when it’s hard to change some of the classes because they are tightly coupled to a bunch of other classes.
_The pattern lets you extract all the relationships between classes into a separate class, isolating any changes to a specific component from the rest of the components._

- Use the pattern when you can’t reuse a component in a different program because it’s too dependent on other components.
_After you apply the Mediator, individual components become unaware of the other components. They could still communicate with each other, albeit indirectly, through a mediator object. To reuse a component in a different app, you need to provide it with a new mediator class._

- Use the Mediator when you find yourself creating tons of com- ponent subclasses just to reuse some basic behavior in various contexts.
_Since all relations between components are contained within the mediator, it’s easy to define entirely new ways for these components to collaborate by introducing new mediator classes, without having to change the components themselves._

### Steps
1. Identify a group of tightly coupled classes which would benefit from being more independent (e.g., for easier maintenance or simpler reuse of these classes).
2. Declare the mediator interface and describe the desired communication protocol between mediators and various components. In most cases, a single method for receiving notifications from components is sufficient.
   This interface is crucial when you want to reuse component classes in different contexts. As long as the component work with its mediator via the generic interface, you can link the component with a different implementation of the mediator.
3. Implement the concrete mediator class. Consider storing ref- erences to all components inside the mediator. This way, you could call any component from the mediator’s methods.
4. You can go even further and make the mediator responsible for the creation and destruction of component objects.
5. Components should store a reference to the mediator object. The connection is usually established in the component’s constructor, where a mediator object is passed as an argument.
6. Change the components’ code so that they call the mediator’s notification method instead of methods on other components. Extract the code that involves calling other components into the mediator class. Execute this code whenever the mediator receives notifications from that component.

### Pros
* Single Responsibility Principle. You can extract the communica- tions between various components into a single place, making it easier to comprehend and maintain.
* Open/Closed Principle. You can introduce new mediators with- out having to change the actual components.
* You can reduce coupling between various components of a program.
* You can reuse individual components more easily.

### Cons
* Over time a mediator can evolve into a God Object.