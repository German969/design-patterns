// The Handler declares the interface, common for all concrete handlers.
// It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
interface Handler {
  setNext: (h: Handler) => void;
  handle: (request) => void; 
}

// The Base Handler is an optional class where you can put the boilerplate code that’s common to all handler classes.
// Usually, this class defines a field for storing a reference to the next handler.
// The clients can build a chain by passing a han- dler to the constructor or setter of the previous handler.
class BaseHandler implements Handler {
  next: Handler;

  setNext(h: Handler) {}

  handle(request) {
    if (this.next != null) {
      this.next.handle(request);
    }
  }
}

// oncrete Handlers contain the actual code for processing requests.
// Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
// Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
class ConcreteHandler1 extends BaseHandler {
  handle(request) {
    if (this.canHandle(request)) {
      // ...
    } else {
      super.handle(request);
    }
  }

  canHandle(request) { return true; }
}

// The Client may compose chains just once or compose them dynamically, depending on the application’s logic.
// Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.
class ConcreteHandler2 extends BaseHandler {
  handle(request) {
    if (this.canHandle(request)) {
      // ...
    } else {
      super.handle(request);
    }
  }

  canHandle(request) { return true; }
}

// Client
const h1 = new ConcreteHandler1();
const h2 = new ConcreteHandler2();

h1.setNext(h2);

const request = {};
h1.handle(request);