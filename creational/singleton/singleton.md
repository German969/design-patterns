## Singleton
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

### Applicability
- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for exam- ple, a single database object shared by different parts of the program.
_The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created._

- Use the Singleton pattern when you need stricter control over global variables.
_Unlike global variables, the Singleton pattern guarantees that there’s just one instance of a class. Nothing, except for the Sin- gleton class itself, can replace the cached instance._

### Steps
1. Add a private static field to the class for storing the singleton instance.
2. Declare a public static creation method for getting the single- ton instance.
3. Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.
4. Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects.
5. Go over the client code and replace all direct calls to the sin- gleton’s constructor with calls to its static creation method.

### Pros
* You can be sure that a class has only a single instance.
* You gain a global access point to that instance.
* The singleton object is initialized only when it’s requested for the first time.

### Cons
* Violates the Single Responsibility Principle. The pattern solves two problems at the time.
* The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
* The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
* It may be difficult to unit test the client code of the Single- ton because many test frameworks rely on inheritance when producing mock objects.