class CDocument {
  state;

  render() {
    this.state.remder();
  }

  publish() {}

  changeState(state) {}
}

interface State {
  render: () => void;
  publish: () => void;
}

const isAdmin = true;
const isAuthor = false;

class Draft implements State {
  document: CDocument;

  render() {
    if (isAdmin || isAuthor) {
      // Render the document
    } else {
      // Show an error message
    }
  }

  publish() {
    if (isAdmin) {
      this.document.changeState(new Published(this.document));
    } else {
      this.document.changeState(new Moderation(this.document));
    }
  }
}

class Published implements State {
  constructor(document) {}

  render() {}

  publish() {}
}

class Moderation implements State {
  constructor(document) {}

  render() {}

  publish() {}
}