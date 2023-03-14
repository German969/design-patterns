// The Sender class (aka invoker) is responsible for initiating requests.
// This class must have a field for storing a reference to a command object.
// The sender triggers that command instead of sending the request directly to the receiver.
// Note that the sender isn’t responsible for creating the command object. Usu- ally, it gets a pre-created command from the client via the constructor.
class Invoker {
  command;

  setCommand(commane) {}

  executeCommand() {}
}

// The Command interface usually declares just a single method for executing the command.
interface Command {
  execute: () => void;
}

// Concrete Commands implement various kinds of requests.
// A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects.
// However, for the sake of simplifying the code, these classes can be merged.
class ConcreteCommand1 implements Command {
  receiver: Receiver;
  params;

  constructor(receiver, params) {
    this.receiver = receiver;
    this.params = params;
  }

  execute() {
    this.receiver.operation(...this.params);
  }
}

class ConcreteCommand2 implements Command {
  execute() {}
}

// The Receiver class contains some business logic. Almost any object may act as a receiver.
// Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
class Receiver {
  operation(...rest) {}
}

// Client
// The Client creates and configures concrete command objects.
// The client must pass all of the request parameters, including a receiver instance, into the command’s constructor.
// After that, the resulting command may be associated with one or multi- ple senders.
const receiver = new Receiver(); // e.g. editor
const command = new ConcreteCommand1(receiver, {}); // e.g. copy
const invoker = new Invoker(); // e.g. button
invoker.setCommand(command);
