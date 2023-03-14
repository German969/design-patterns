## Command
Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

_Also known as: Action, Transaction_

### Applicability
- Use the Command pattern when you want to parametrize
objects with operations.
_The Command pattern can turn a specific method call into a stand-alone object. This change opens up a lot of interest- ing uses: you can pass commands as method arguments, store them inside other objects, switch linked commands at run- time, etc._

- Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.
_As with any other object, a command can be serialized, which means converting it to a string that can be easily written to a file or a database. Later, the string can be restored as the ini- tial command object. Thus, you can delay and schedule com- mand execution. But there’s even more! In the same way, you can queue, log or send commands over the network._

- Use the Command pattern when you want to implement reversible operations.
_Although there are many ways to implement undo/redo, the Command pattern is perhaps the most popular of all. To be able to revert operations, you need to implement the his- tory of performed operations._

### Steps
1. Declare the command interface with a single execution
method.
2. Start extracting requests into concrete command classes that implement the command interface. Each class must have a set of fields for storing the request arguments along with a ref- erence to the actual receiver object. All these values must be initialized via the command’s constructor.
3. Identify classes that will act as senders. Add the fields for stor- ing commands into these classes. Senders should communi- cate with their commands only via the command interface. Senders usually don’t create command objects on their own, but rather get them from the client code.
4. Change the senders so they execute the command instead of sending a request to the receiver directly.
5. The client should initialize objects in the following order:
   - Createreceivers.
   - Create commands, and associate them with receivers if needed.
   - Create senders, and associate them with specific commands.

### Pros
* Single Responsibility Principle. You can decouple classes that
invoke operations from classes that perform these operations.
* Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.
* You can implement undo/redo.
* You can implement deferred execution of operations.
* You can assemble a set of simple commands into a com- plex one.

### Cons
* The code may become more complicated since you’re introduc- ing a whole new layer between senders and receivers.
