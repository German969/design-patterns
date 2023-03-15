// The mediator interface declares a method used by components to notify the mediator about various events. The mediator may
// react to these events and pass the execution to other components.
interface IMediator {
  notify: (sender: Component, event: string) => void;
}

// The concrete mediator class. The intertwined web of connections between individual components has been untangled and moved into the mediator.
class AuthenticationDialog implements IMediator {
  private title: string;
  private loginOrRegisterChkBx: Checkbox;
  private loginUsername: Textbox;
  private loginPassword: Textbox;
  private registrationUsername: Textbox;
  private registrationPassword: Textbox;
  private registrationEmail: Textbox;
  private okBtn: Button;
  private cancelBtn: Button;

  constructor() {
    // Create all component objects by passing the current mediator into their constructors to establish links.
  }

  // When something happens with a component, it notifies the mediator. Upon receiving a notification, the mediator may
  // do something on its own or pass the request to another component.
  notify(sender, event) {
    if (sender === this.loginOrRegisterChkBx && event === 'ckeck') {
      if (this.loginOrRegisterChkBx.checked) {
        let title = "Log In";
        // 1. Show login form components.
        // 2. Hide registration form compoents.
      } else {
        let title = "Register";
        // 1. Show registration form components.
        // 2. Hide login form components
      }
    }

    if (sender === this.okBtn && event === 'click') {
      if (this.loginOrRegisterChkBx.checked) {
        // Try to find a user using login credentials.
        let found = true;
        if (!found) {
          // Show an error message above the login field
        }
      } else {
        // 1. Create a user account using data from the registration field.
        // 2. Log that user in.
        // ...
      }
    }
  }
}

// Components communicate with a mediator using the mediator interface. Thanks to that, you can use the same components in
// other contexts by linking them with different mediator objects.
class Component {
  dialog: IMediator;

  constructor(dialog) {
    this.dialog = dialog;
  }

  click() {
    this.dialog.notify(this, "click");
  }

  keyPress() {
    this.dialog.notify(this, "keypress");
  }
}

// Concrete components don't talk to each other. They have only one communication channel, which is sending notifications to the mediator.
class Button extends Component {
  // ...
}

class Textbox extends Component {
  // ...
}

class Checkbox extends Component {
  checked: boolean;
  // ...
  check() {
    this.dialog.notify(this, "check");
  }
}