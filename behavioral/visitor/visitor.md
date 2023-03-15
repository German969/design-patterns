## Visitor
Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

### Applicability
- Use the Visitor when you need to perform an operation on all elements of a complex object structure (for example, an object tree).
_The Visitor pattern lets you execute an operation over a set of objects with different classes by having a visitor object imple- ment several variants of the same operation, which correspond to all target classes._

- Use the Visitor to clean up the business logic of auxiliary behaviors.
_The pattern lets you make the primary classes of your app more focused on their main jobs by extracting all other behav- iors into a set of visitor classes._

- Use the pattern when a behavior makes sense only in some classes of a class hierarchy, but not in others.
_You can extract this behavior into a separate visitor class and implement only those visiting methods that accept objects of relevant classes, leaving the rest empty._

### Steps
1. Declare the visitor interface with a set of “visiting” methods, one per each concrete element class that exists in the program.
2. Declare the element interface. If you’re working with an existing element class hierarchy, add the abstract “acceptance” method to the base class of the hierarchy. This method should accept a visitor object as an argument.
3. Implement the acceptance methods in all concrete element classes. These methods must simply redirect the call to a visit- ing method on the incoming visitor object which matches the class of the current element.
4. The element classes should only work with visitors via the visitor interface. Visitors, however, must be aware of all concrete element classes, referenced as parameter types of the visiting methods.
5. For each behavior that can’t be implemented inside the element hierarchy, create a new concrete visitor class and imple- ment all of the visiting methods.
6. The client must create visitor objects and pass them into elements via “acceptance” methods.

### Pros
* Open/Closed Principle. You can introduce a new behavior that can work with objects of different classes without changing these classes.
* Single Responsibility Principle. You can move multiple versions of the same behavior into the same class.
* A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

### Cons
* You need to update all visitors each time a class gets added to or removed from the element hierarchy.
* Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.
