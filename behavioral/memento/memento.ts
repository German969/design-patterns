// The originator holds some important data that may change over time. It also defines a method for saving its state inside a
// memento and another method for restoring the state from it.
class Editor {
  private text;
  private curX;
  private curY;
  private selectionWidth;

  setText(text) {
    this.text = text;
  }

  setCursor(x, y) {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width) {
    this.selectionWidth = width;
  }

  // Saves the current state inside a memento.
  createSnapshot(): Snapshot {
    // Memento is an immutable object; that's why the originator passes its state to the memento's
    // constructor parameters.
    return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth);
  }
}

// The memento class stores the past state of the editor.
class Snapshot {
  private editor: Editor;
  private text;
  private curX;
  private curY;
  private selectionWidth;

  constructor(editor, text, curX, curY, selectionWidth) {
    this.editor = editor;
    this.text = text;
    this.curX = x;
    this.curY = y;
    this.selectionWidth = selectionWidth;
  }

  // At some point, a previous state of the editor can be restored using a memento object.
  restore() {
    this.editor.setText(this.text);
    this.editor.setCursor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}


// A command object can act as a caretaker. In that case, the command gets a memento just before it changes the
// originator's state. When undo is requested, it restores the originator's state from a memento.
class Command {
  private backup: Snapshot;

  makeBackup(editor) {
    this.backup = editor.createSnapshot();
  }

  undo() {
    if (this.backup != null) {
      this.backup.restore();
    }
  }
}