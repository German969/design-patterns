interface ClientInterface {
  method: (data: Data) => void;
}

// The Adapter is a class that’s able to work with both the client and the service: it implements the client interface, while wrap- ping the service object.
class Adapter implements ClientInterface {
  adaptee: Service;

  method(data: Data) {
    const specialData = convertToServiceFormat(data);

    return this.adaptee.serviceMethod(specialData);
  }
}

// The client can’t use this class directly because it has an incom- patible interface.
class Service {
  serviceMethod(specialData: SpecialData) {}
}

function convertToServiceFormat(data): SpecialData { return {} };

interface Data {}
interface SpecialData {}