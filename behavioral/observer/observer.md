## Observer
Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

_Also known as: Event-Subscriber, Listener_

### Applicability
- Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.
_You can often experience this problem when working with classes of the graphical user interface. For example, you creat- ed custom button classes, and you want to let the clients hook some custom code to your buttons so that it fires whenever a user presses a button._
_The Observer pattern lets any object that implements the sub- scriber interface subscribe for event notifications in publisher objects. You can add the subscription mechanism to your buttons, letting the clients hook up their custom code via custom subscriber classes._

- Use the pattern when some objects in your app must observe others, but only for a limited time or in specific cases.
_The subscription list is dynamic, so subscribers can join or leave the list whenever they need to._

### Steps
1. Look over your business logic and try to break it down into two
parts: the core functionality, independent from other code, will act as the publisher; the rest will turn into a set of subscriber classes.
2. Declare the subscriber interface. At a bare minimum, it should declare a single update method.
3. Declare the publisher interface and describe a pair of methods for adding a subscriber object to and removing it from the list. Remember that publishers must work with subscribers only via the subscriber interface.
4. Decide where to put the actual subscription list and the imple- mentation of subscription methods. Concrete publishers extend that class, inheriting the subscription behavior.
5. Create concrete publisher classes. Each time something impor- tant happens inside a publisher, it must notify all its subscribers.
6. Implement the update notification methods in concrete sub- scriber classes. Most subscribers would need some context data about the event. It can be passed as an argument of the notification method. But there’s another option. Upon receiving a notification, the subscriber can fetch any data directly from the notification.
7. The client must create all necessary subscribers and register them with proper publishers.

### Pros
* Open/Closed Principle. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
* You can establish relations between objects at runtime.

### Cons
* Subscribers are notified in random order.