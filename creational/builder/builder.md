## Builder
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

### Applicability
- Use the Builder pattern to get rid of a “telescoping
constructor”.
_Say you have a constructor with ten optional parameters. Call- ing such a beast is very inconvenient; therefore, you over- load the constructor and create several shorter versions with fewer parameters. These constructors still refer to the main one, passing some default values into any omitted parameters._
_The Builder pattern lets you build objects step by step, using only those steps that you really need. After implementing the pattern, you don’t have to cram dozens of parameters into your constructors anymore._

- Use the Builder pattern when you want your code to be able to create different representations of some product (for example, stone and wooden houses).
_The Builder pattern can be applied when construction of vari- ous representations of the product involves similar steps that differ only in the details._
_The base builder interface defines all possible construction steps, and concrete builders implement these steps to con- struct particular representations of the product. Meanwhile, the director class guides the order of construction._

- Use the Builder to construct Composite trees or other complex objects.
_The Builder pattern lets you construct products step-by-step. You could defer execution of some steps without breaking the final product. You can even call steps recursively, which comes in handy when you need to build an object tree._
_A builder doesn’t expose the unfinished product while running construction steps. This prevents the client code from fetching an incomplete result._

### Steps
1. Make sure that you can clearly define the common construc- tion steps for building all available product representations. Otherwise, you won’t be able to proceed with implementing the pattern.
2. Declare these steps in the base builder interface.
3. Create a concrete builder class for each of the product repre- sentations and implement their construction steps. Don’t forget about implementing a method for fetching the result of the construction. The reason why this method can’t be declared inside the builder interface is that various builders may construct products that don’t have a common interface.
4. Think about creating a director class. It may encapsulate vari- ous ways to construct a product using the same builder object.
5. The client code creates both the builder and the director objects. Before construction starts, the client must pass a builder object to the director. Usually, the client does this only once, via parameters of the director’s class constructor. The director uses the builder object in all further construction.
6. The construction result can be obtained directly from the director only if all products follow the same interface. Other- wise, the client should fetch the result from the builder.

### Pros
* You can construct objects step-by-step, defer construction
steps or run steps recursively.
* You can reuse the same construction code when building vari- ous representations of products.
* Single Responsibility Principle. You can isolate complex con- struction code from the business logic of the product.

### Cons
* The overall complexity of the code increases since the pattern requires creating multiple new classes.