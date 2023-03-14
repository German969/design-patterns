// The Service Interface declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.
interface ServiceInterface {
  operation: () => void;
}

// The Service is a class that provides some useful business logic
class Service implements ServiceInterface {
  operation() {}
}

// The Proxy class has a reference field that points to a service object.
// After the proxy finishes its processing (e.g., lazy ini- tialization, logging, access control, caching, etc.), it passes the request to the service object.
class Proxy implements ServiceInterface {
  realService: Service;

  constructor(s: Service) {
    this.realService = s;
  }

  checkAccess() { return true }

  operation() {
    if (this.checkAccess()) {
      this.realService.operation();
    }
  }
}

// The Client should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.