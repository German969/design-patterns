// The component interface defines operations that can be altered by decorators.
interface DataSource {
  writeData: (data) => void;
  readData: () => any;
}

// Concrete components provide default implementations for the operations. There might be several variations of these
// classes in a program.
class FileDatasSource implements DataSource {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  writeData(data) {
    // Write data to file.
  }

  readData() {
    // Read data from file.
  }
}

// The base decorator class follows the same interface as the  other components. The primary purpose of this class is to
// define the wrapping interface for all concrete decorators.  The default implementation of the wrapping code might include
// a field for storing a wrapped component and the means to  initialize it.
class DataSourceDecorator implements DataSource {
  wrapee: DataSource;

  constructor(source: DataSource) {
    this.wrapee = source;
  }

  // The base decorator simply delegates all work to the wrapped component. Extra behaviors can be added in // concrete decorators.
  writeData(data) {
    this.wrapee.writeData(data);
  }

  // Concrete decorators may call the parent implementation of  the operation instead of calling the wrapped object
  // directly. This approach simplifies extension of decorator  classes.
  readData() {
    return this.wrapee.readData();
  }
}

// Concrete decorators must call methods on the wrapped object, but may add something of their own to the result. Decorators
// can execute the added behavior either before or after the call to a wrapped object.
class EncryptionDecorator extends DataSourceDecorator {
  writeData(data) {
    // 1. Encrypt passed data.
    // 2. Pass encrypted data to the wrappee's writeData method.
  }

  readData() {
    // 1. Get data from the wrappee's readData method.
    // 2. Try to decrypt it if it's encrypted.
    // 3. Return the result.
  }
}

// You can wrap objects in several layers of decorators.
class CompressionDecorator extends DataSourceDecorator {
  writeData(data) {
    // 1. Compress passed data.
    // 2. Pass compressed data to the wrappee's writeData method.
  }

  readData() {
    // 1. Get data from the wrappee's readData method.
    // 2. Try to decompress it if it's compressed.
    // 3. Return the result.
  }
}

// Option 1. A simple example of a decorator assembly.\
class ApplicationExample {
  dumbUsageExample() {
    let source: any = new FileDatasSource('somefile');
    source.writeData("Salary records");
    // The target file has been written with plain data.

    source = new CompressionDecorator(source);
    source.writeData("Salary records");
    // The target file has been written with compressed data.

    source = new EncryptionDecorator(source);
    // The source variable now contains this:
    // Encryption > Compression > FileDataSource
    source.writeData("SalaryRecords");
    // The file has been written with compressed and
    // encrypted data.
  }
}

// Option 2. Client code that uses an external data source.
// SalaryManager objects neither know nor care about data storage specifics. They work with a pre-configured data
// source received from the app configurator.
class SalaryManager {
  source: DataSource;

  constructor(source: DataSource) {
    this.source = source;
  }

  load() {
    return this.source.readData();
  }

  save() {
    this.source.writeData("Salary records");
  }

  // other useful methods
}

const enabledEncryption = true;
const enabledCompression = true;

// The app can assemble different stacks of decorators at runtime, depending on the configuration or environment.
class ApplicationConfigurator {
  configurationExample() {
    let source: any = new FileDatasSource("somefile");

    if (enabledEncryption) {
      source = new EncryptionDecorator(source);
    }
    if (enabledCompression) {
      source = new CompressionDecorator(source);
    }

    const logger = new SalaryManager(source);
    const salary = logger.load();
    // ...
  }
}