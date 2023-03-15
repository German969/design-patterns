// The handler interface declares a method for executing a request.
interface ComponentWithContextualHelp {
  showHelp: () => void;
}

// The base class for single components.
abstract class Component implements ComponentWithContextualHelp {
  tooltipText: string;

  // The component's container acts as the next link in the chain of handlers.
  protected container: Container;

  // The component shows a tooltip if there's help text assigned to it. Otherwise it forwards the call to the container, if it exists.
  showHelp() {
    if (this.tooltipText != null) {
      // Show tooltip.
    } else {
      this.container.showHelp();
    }
  }
}

// Containers can contain both simple components and other containers as children. The chain relationships are
// established here. The class inherits showHelp behavior from its parent.
abstract class Container extends Component {
  protected children: Component[];

  add(child) {
    this.children.push(child);
    child.container = this;
  }
}

// Primitive components may be fine with default help implementation...
class Button extends Component {
  constructor(w, h, p, m, t) {
    super();
  }

  // ...
}

// But complex components may override the default implementation. If the help text can't be provided in a new
// way, the component can always call the base implementation (see Component class).
class Panel extends Container {
  modalHelpText: string;

  constructor(x, y, h, w) {
    super();
  }

  showHelp() {
    if (this.modalHelpText != null) {
      // Show a modal window with the help text.
    } else {
      super.showHelp();
    }
  }
}

// ...same as above...
class Dialog extends Container {
  wikiPageURL: string;

  constructor(text) {
    super();
  }

  showHelp() {
    if (this.wikiPageURL != null) {
      // Open the wiki help page.
    } else {
      super.showHelp();
    }
  }
}

// Client code
class Application {
  // Every application configures the chain differently
  createUI() {
    let dialog = new Dialog("Budget Reports");
    dialog.wikiPageURL = "http://...";

    let panel = new Panel(0, 0, 400, 800);
    panel.modalHelpText = "This panel does...";

    let ok = new Button(250, 760, 50, 20, "OK");
    ok.tooltipText = "This is an OK button that...";

    let cancel = new Button(320, 760, 50, 20, "Cancel");
    // ...

    panel.add(ok);
    panel.add(cancel);
    dialog.add(panel);
  }

  // Imagine what happens here.
  onF1KeyPress() {
    let component = this.getComponentAtMouseCoords();
    component.showHelp();
  }

  getComponentAtMouseCoords() {
    // Look for the correct component
    return new Button(250, 760, 50, 20, "OK");
  }
}
