## Flyweight
Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

_Also known as: Cache_

### Applicability
- Use the Flyweight pattern only when your program must sup- port a huge number of objects which barely fit into avail- able RAM.
_The benefit of applying the pattern depends heavily on how and where it’s used. It’s most useful when:_
  _- an application needs to spawn a huge number of similar objects_
  _- this drains all available RAM on a target device_
  _- the objects contain duplicate states which can be extracted and shared between multiple objects_

### Steps
1. Divide fields of a class that will become a flyweight into
two parts:
  - the intrinsic state: the fields that contain unchanging data duplicated across many objects
  - the extrinsic state: the fields that contain contextual data unique to each object
2. Leave the fields that represent the intrinsic state in the class, but make sure they’re immutable. They should take their initial values only inside the constructor.
3. Go over methods that use fields of the extrinsic state. For each field used in the method, introduce a new parameter and use it instead of the field.
4. Optionally, create a factory class to manage the pool of fly- weights. It should check for an existing flyweight before cre- ating a new one.
5. The client must store or calculate values of the extrinsic state (context) to be able to call methods of flyweight objects.

### Pros
* You can save lots of RAM, assuming your program has tons of
similar objects.

### cons
* You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.
* The code becomes much more complicated. New team mem- bers will always be wondering why the state of an entity was separated in such a way.