// Original class
class Notifier {
  send(message) {
    console.log('Sending email message');
  }
}

// Common class for decorators
class BaseDecorator extends Notifier {
  wrapee: Notifier;

  constructor(notifier: Notifier) {
    super();
    this.wrapee = notifier;
  }

  send(message) {
    super.send(message);
    this.wrapee.send(message);
  }
}

// Concrete decorators
class SMSDecorator extends BaseDecorator {
  send(message) {
    console.log('Sending SMS message');
  } 
}

class FacebookDecorator extends BaseDecorator {
  send(message) {
    console.log('Sending Facebook message');
  }
}

class SlackDecorator extends BaseDecorator {
  send(message) {
    console.log('Sending Slack message');
  }
}

class Application {
  notifier: Notifier;

  setNotifier(notifier: Notifier) {
    this.notifier = notifier;
  }

  sendMessages() {
    this.notifier.send('Hello');
    // Email -> Facebook -> [X] Slack
  }
}

let stack = new Notifier();
const facebookEnabled = true;
const slackEnabled = false;

if (facebookEnabled) {
  stack = new FacebookDecorator(stack);
}

if (slackEnabled) {
  stack = new SlackDecorator(stack);
}

const app = new Application();
app.setNotifier(stack);

app.sendMessages();