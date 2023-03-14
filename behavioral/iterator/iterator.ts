// The collection interface must declare a factory method for producing iterators. You can declare several methods if there
// are different kinds of iteration available in your program.
interface SocialNetwork {
  createFriendsIterator(profileId): ProfileIterator;
  createCoworkersIterator(profileId): ProfileIterator;
}

// Each concrete collection is coupled to a set of concrete iterator classes it returns. But the client isn't, since the
// signature of these methods returns iterator interfaces.
class Facebook implements SocialNetwork {
  // ... The bulk of the collection's code should go here ...
  socialGraphRequest;

  // Iteration creation code.
  createFriendsIterator(profileId) {
    return new FacebookIterator(this, profileId, "friends");
  }

  createCoworkersIterator(profileId) {
    return new FacebookIterator(this, profileId, "coworkers");
  }
}

// The common interface for all iterators.
interface ProfileIterator {
  getNext: () => Profile;
  hasMore: () => boolean;
}

// The concrete iterator class.
class FacebookIterator implements ProfileIterator {
  // The iterator needs a reference to the collection that it traverses.
  private facebook: Facebook;
  private profileId: string;
  private type: string;

  // An iterator object traverses the collection independently from other iterators. Therefore it has to store the
  // iteration state.
  private currentPosition;
  private cache: Profile[];

  constructor(facebook, profileId, type) {
    this.facebook = facebook;
    this,profileId = profileId;
    this.type = type;
  }

  private lazyInit() {
    if (this.cache == null) {
      this.cache = this.facebook.socialGraphRequest(this.profileId, this.type);
    }
  }

  // Each concrete iterator class has its own implementation of the common iterator interface.
  getNext() {
    if (this.hasMore()) {
      this.currentPosition++;
    }
    return this.cache[this.currentPosition];
  }

  hasMore() {
    this.lazyInit();
    return this.currentPosition < this.cache.length;
  }
}

// Here is another useful trick: you can pass an iterator to a client class instead of giving it access to a whole
// collection. This way, you don't expose the collection to the client.
// And there's another benefit: you can change the way the client works with the collection at runtime by passing it a
// different iterator. This is possible because the client code isn't coupled to concrete iterator classes.
class SocialSpammer {
  send(iterator: ProfileIterator, message: string) {
    while (iterator.hasMore()) {
      const profile = iterator.getNext();
      sendEmail(profile.getEmail(), message);
    }
  }
}

const workingWithFacebook = true;
const workingWithLinkedIn = false;

// The application class configures collections and iterators and then passes them to the client code.
class Application {
  network: SocialNetwork;
  spammer: SocialSpammer;

  config() {
    if (workingWithFacebook) {
      this.network = new Facebook();
    }
    if (workingWithLinkedIn) {
      this.network = new LinkedIn();
    }

    this.spammer = new SocialSpammer();
  }

  sendSpamToFriends(profile) {
    let iterator = this.network.createFriendsIterator(profile.getId());
    this.spammer.send(iterator, "Very important message");
  }

  sendSpamToCoworkers(profile) {
    let iterator = this.network.createCoworkersIterator(profile.getId());
    this.spammer.send(iterator, "Very Important message");
  }
}

function sendEmail(email, message) {}

class LinkedIn implements SocialNetwork {
  createFriendsIterator(profileId: any): ProfileIterator {
    throw new Error("Method not implemented.");
  }
  createCoworkersIterator(profileId: any): ProfileIterator {
    throw new Error("Method not implemented.");
  }
  
}

class Profile {
  getEmail() {}
}