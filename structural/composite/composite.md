## Composite
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

### Applicability
- Use the Composite pattern when you have to implement a tree-like object structure.
_The Composite pattern provides you with two basic element types that share a common interface: simple leaves and com- plex containers. A container can be composed of both leaves and other containers. This lets you construct a nested recursive object structure that resembles a tree._

- Use the pattern when you want the client code to treat both simple and complex elements uniformly.
_All elements defined by the Composite pattern share a com- mon interface. Using this interface, the client doesn’t have to worry about the concrete class of the objects it works with._

### Steps
1. Make sure that the core model of your app can be represent- ed as a tree structure. Try to break it down into simple ele- ments and containers. Remember that containers must be able to contain both simple elements and other containers.
2. Declare the component interface with a list of methods that make sense for both simple and complex components.
3. Create a leaf class to represent simple elements. A program may have multiple different leaf classes.
4. Create a container class to represent complex elements. In this class, provide an array field for storing references to sub- elements. The array must be able to store both leaves and containers, so make sure it’s declared with the component interface type.
5. Finally, define the methods for adding and removal of child elements in the container.

### Pros
* You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
* Open/Closed Principle. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

### Cons
* It might be difficult to provide a common interface for class- es whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.