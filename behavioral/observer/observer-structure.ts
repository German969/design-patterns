// The Publisher issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastruc- ture that lets new subscribers join and current subscribers leave the list.
class Publisher {
  subscribers: Subscriber[];
  mainState;

  subscribe(s: Subscriber) {}

  unsubscribe(s: Subscriber) {}

  // When a new event happens, the publisher goes over the sub- scription list and calls the notification method declared in the subscriber interface on each subscriber object.
  notifySubscribers() {
    for (const s of this.subscribers) {
      s.update(this);
    }
  }

  mainBusinessLogic(newState) {
    this.mainState = newState;
    this.notifySubscribers()
  }
}

// The Subscriber interface declares the notification interface. In most cases, it consists of a single update method. The method may have several parameters that let the publisher pass some event details along with the update.
interface Subscriber {
  update: (context) => void;
}

// Concrete Subscribers perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
class ConcreteSubscriber {
  // Usually, subscribers need some contextual information to han- dle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting sub- scriber fetch any required data directly.
  update(context) {}
}

// Client
// The Client creates publisher and subscriber objects separately and then registers subscribers for publisher updates.
const publisher = new Publisher();
const s = new ConcreteSubscriber();
publisher.subscribe(s);
publisher.mainBusinessLogic({ a: 'b' });