## Bridge
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies — abstraction and implementation — which can be developed independently of each other.

The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition. What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.

### Abstraction and Implementation
Abstraction (also called interface) is a high-level control layer for some entity. This layer isn’t supposed to do any real work on its own. It should delegate the work to the implementation layer (also called platform).

### Applicability
- Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some function- ality (for example, if the class can work with various database servers).
_The bigger a class becomes, the harder it is to figure out how it works, and the longer it takes to make a change. The changes made to one of the variations of functionality may require making changes across the whole class, which often results in making errors or not addressing some critical side effects._
_The Bridge pattern lets you split the monolithic class into sev- eral class hierarchies. After this, you can change the classes in each hierarchy independently of the classes in the others. This approach simplifies code maintenance and minimizes the risk of breaking existing code._

- Use the pattern when you need to extend a class in several orthogonal (independent) dimensions.
_The Bridge suggests that you extract a separate class hierar- chy for each of the dimensions. The original class delegates the related work to the objects belonging to those hierarchies instead of doing everything on its own._

- Use the Bridge if you need to be able to switch implementa- tions at runtime.
_Although it’s optional, the Bridge pattern lets you replace the implementation object inside the abstraction. It’s as easy as assigning a new value to a field._

### Steps
1. Identify the orthogonal dimensions in your classes. These independent concepts could be: abstraction/platform, domain/ infrastructure, front-end/back-end, or interface/implementa- tion.
2. See what operations the client needs and define them in the base abstraction class.
3. Determine the operations available on all platforms. Declare the ones that the abstraction needs in the general implemen- tation interface.
4. For all platforms in your domain create concrete implementa- tion classes, but make sure they all follow the implementation interface.
5. Inside the abstraction class, add a reference field for the implementation type. The abstraction delegates most of the work to the implementation object that’s referenced in that field.
6. If you have several variants of high-level logic, create refined abstractions for each variant by extending the base abstrac- tion class.
7. The client code should pass an implementation object to the abstraction’s constructor to associate one with the other. After that, the client can forget about the implementation and work only with the abstraction object.

### Pros
* You can create platform-independent classes and apps.
* The client code works with high-level abstractions. It isn’t exposed to the platform details.
* Open/Closed Principle. You can introduce new abstractions and implementations independently from each other.
* Single Responsibility Principle. You can focus on high-level logic in the abstraction and on platform details in the implementa- tion.

### Cons
* You might make the code more complicated by applying the pattern to a highly cohesive class.
