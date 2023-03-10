## Factory Method

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### Applicability
- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.
_The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code._

- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.
_The solution is to reduce the code that constructs components across the framework into a single factory method and let any- one override this method in addition to extending the compo- nent itself._

- Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.
_You often experience this need when dealing with large, resource-intensive objects such as database connections, file systems, and network resources._
_However, a constructor must always return new objects by definition. It can’t return existing instances._
_Therefore, you need to have a regular method capable of creating new objects as well as reusing existing ones. That sounds very much like a factory method._

### Steps
1. Make all products follow the same interface. This interface
should declare methods that make sense in every product.
2. Add an empty factory method inside the creator class. The return type of the method should match the common product interface.
3. In the creator’s code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.
4. Now, create a set of creator subclasses for each type of prod- uct listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construc- tion code from the base method.
5. If there are too many product types and it doesn’t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses. The client code can pass an argument to the factory method of the class to control which product it wants to receive.
6. If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there’s something left, you can make it a default behavior of the method.

### Pros
* You avoid tight coupling between the creator and the concrete
products.
* Single Responsibility Principle. You can move the product cre- ation code into one place in the program, making the code eas- ier to support.
* Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

### Cons
* The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.