class NavigatorExample {
  routeStrategy: RouteStrategy;

  buildRoute(A, B) {
    return this.routeStrategy.buildRoute(A, B);
  }
}

interface RouteStrategy {
  buildRoute: (A, B) => void;
}

class RoadStrategy implements RouteStrategy {
  buildRoute(A, B) {}
}

class PublicTransportStrategy implements RouteStrategy {
  buildRoute(A, B) {}
}

class WalkingStrategy implements RouteStrategy {
  buildRoute(A, B) {}
}
