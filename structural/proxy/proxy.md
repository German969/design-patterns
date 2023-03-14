## Proxy
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

### Applicability
- Lazy initialization (virtual proxy). This is when you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.
_Instead of creating the object when the app launches, you can delay the object’s initialization to a time when it’s really needed._

- Access control (protection proxy). This is when you want only specific clients to be able to use the service object; for instance, when your objects are crucial parts of an operating system and clients are various launched applications (includ- ing malicious ones).
_The proxy can pass the request to the service object only if the client’s credentials match some criteria._

- Local execution of a remote service (remote proxy). This is when the service object is located on a remote server.
_In this case, the proxy passes the client request over the net- work, handling all of the nasty details of working with the network._

- Logging requests (logging proxy). This is when you want to keep a history of requests to the service object.
_The proxy can log each request before passing it to the service._

- Caching request results (caching proxy). This is when you need to cache results of client requests and manage the life cycle of this cache, especially if results are quite large.
_he proxy can implement caching for recurring requests that always yield the same results. The proxy may use the parame- ters of requests as the cache keys._

- Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.
_The proxy can keep track of clients that obtained a reference to the service object or its results. From time to time, the proxy may go over the clients and check whether they are still active. If the client list gets empty, the proxy might dismiss the ser- vice object and free the underlying system resources._

### Steps
1. If there’s no pre-existing service interface, create one to make proxy and service objects interchangeable. Plan B is to make the proxy a subclass of the service class, and this way it’ll inherit the interface of the service.
2. Create the proxy class. It should have a field for storing a ref- erence to the service. Usually, proxies create and manage the whole life cycle of their services. On rare occasions, a service is passed to the proxy via a constructor by the client.
3. Implement the proxy methods according to their purposes. In most cases, after doing some work, the proxy should delegate the work to the service object.
4. Consider introducing a creation method that decides whether the client gets a proxy or a real service. This can be a sim- ple static method in the proxy class or a full-blown factory method.
5. Consider implementing lazy initialization for the service object.

### Pros
* You can control the service object without clients knowing about it.
* You can manage the lifecycle of the service object when clients don’t care about it.
* The proxy works even if the service object isn’t ready or is not available.
* Open/Closed Principle. You can introduce new proxies without changing the service or clients.

### Cons
* The code may become more complicated since you need to introduce a lot of new classes.
* The response from the service might get delayed.
