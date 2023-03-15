// The base publisher class includes subscription management code and notification methods.
class EventManager {
  private listeners: Map<string, { eventType: EventType, listener: Listener}>;

  subscribe(eventType, listener) {
    this.listeners.set(`${eventType}-${listener}`, { eventType, listener });
  }

  unsubscribe(eventType, listener) {
    this.listeners.delete(`${eventType}-${listener}`);
  }

  notify(eventType, data) {
    for (const [key ,subscriber] of this.listeners) {
      if (subscriber.eventType === eventType) {
        subscriber.listener.update(data);
      }
    }
  }
}

// The concrete publisher contains real business logic that's interesting for some subscribers. We could derive this class
// from the base publisher, but that isn't always possible in  real life because the concrete publisher might already be a
// subclass. In this case, you can patch the subscription logic in with composition, as we did here.
class Editor {
  public events: EventManager;
  private file: File;

  constructor() {
    this.events = new EventManager();
  }

  // Methods of business logic can notify subscribers about changes.
  openFile(path) {
    this.file = new File(path, 'asd');
    this.events.notify("open", this.file.name);
  }

  saveFile() {
    // this.file.write();
    this.events.notify("save", this.file.name);
  }

  // ...
}

// Here's the subscriber interface. If your programming language supports functional types, you can replace the whole
// subscriber hierarchy with a set of functions.
interface IEventListener {
  update: (filename) => void;
}

// Concrete subscribers react to updates issued by the publisher they are attached to.
class LoggingListener implements IEventListener {
  private log: File;
  private message: string;

  constructor(log_filename, message) {
    this.log = new File({} as BlobPart[], log_filename);
    this.message = message;
  }

  update(filename) {
    // this.log.write(`${filename}: ${this.message}`.replace('%s', ''));
  }
}

class EmailAlertsListener implements IEventListener {
  private email: string;
  private message: string;

  constructor(email, message) {
    this.email = email;
    this.message = message;
  }

  update(filename) {
    sendEmail(this.email, `${filename}: ${this.message}`.replace('%s', ''));
  }
}

// An application can configure publishers and subscribers at runtime.
class Application {
  config() {
    const editor = new Editor();

    const logger = new LoggingListener("/path/to/log.txt", "Someone has opened the file: %s");
    editor.events.subscribe("open", logger);

    const emailAlerts = new EmailAlertsListener("admin@example.com", "Someone has changed the file: %s");
    editor.events.subscribe("save", emailAlerts);
  }
}

function sendEmail(email, message) {}