// --- Bridge ---

// The "abstraction" defines the interface for the "control"
// part of the two class hierarchies. It maintains a reference // to an object of the "implementation" hierarchy and delegates // all of the real work to this object.
class RemoteControl {
  device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumneDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumenUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    const old = this.device.getChannel();
    this.device.setChannel(old + 1);
  }
}

// The "implementation" interface declares methods common to all concrete implementation classes. It doesn't have to match the
// abstraction's interface. In fact, the two interfaces can be entirely different. Typically the implementation interface
// provides only primitive operations, while the abstraction defines higher-level operations based on those primitives.

interface Device {
  isEnabled: () => boolean;
  enable: () => void;
  disable: () => void;
  getVolume: () => number;
  setVolume: (percent: number) => void;
  getChannel: () => number;
  setChannel: (channel: number) => void;
}
// --- ---

// You can extend classes from the abstraction hierarchy independently from device classes.
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.setVolume(0);
  }
}

// All devices follow the same interface.
class Radio implements Device {
  isEnabled: () => boolean;
  enable: () => void;
  disable: () => void;
  getVolume: () => number;
  setVolume: (percent: number) => void;
  getChannel: () => number;
  setChannel: (channel: number) => void;
}

class TV implements Device {
  isEnabled: () => boolean;
  enable: () => void;
  disable: () => void;
  getVolume: () => number;
  setVolume: (percent: number) => void;
  getChannel: () => number;
  setChannel: (channel: number) => void;
}

// Client
const tv = new TV();
let remote = new RemoteControl(tv);
remote.togglePower();

const radio = new Radio();
remote = new AdvancedRemoteControl(radio);