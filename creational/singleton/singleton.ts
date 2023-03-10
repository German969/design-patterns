// The Database class defines the `getInstance` method that lets clients access the same instance of a database connection
// throughout the program.
class Database {
  // The field for storing the singleton instance should be
  // declared static.
  private static instance: Database;

  // The singleton's constructor should always be private to prevent direct construction calls with the `new`
  // operator.
  private constructor() {
    // Some initialization code, such as the actual
    // connection to a database server.
    // ...
  }

  // The static method that controls access to the singleton instance.
  public static getInstance() {
    if (Database.instance == null) {
      // Ensure that the instance hasn't yet been initialized by another thread while this one has been waiting for the lock's release. (multi-thread languages)
      // ...
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // Finally, any singleton should define some business logic which can be executed on its instance.
  public query(sql) {
    // For instance, all database queries of an app go through this method. Therefore, you can place
    // throttling or caching logic here.
    // ...
  }
}

class Application {
  main() {
    const foo: Database = Database.getInstance();
    foo.query("SELECT ...");
    // ...
    const bar = Database.getInstance();
    bar.query("SELECT ...");
    // The variable `bar` will contain the same object as the variable `foo`.
  }
}