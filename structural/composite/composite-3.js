// The Leaf is a basic element of a tree that doesn’t have sub-elements.
var Product = /** @class */ (function () {
    function Product(price) {
        this.price = price;
    }
    // Do some work
    Product.prototype.calculatePrice = function () {
        return this.price;
    };
    return Product;
}());
// The Container (aka composite) is an element that has sub-elements: leaves or other containers.
// A container doesn’t know the concrete classes of its children. It works with all sub-ele- ments only via the component interface.
var Box = /** @class */ (function () {
    function Box() {
        this.children = [];
    }
    Box.prototype.add = function (c) {
        this.children.push(c);
    };
    Box.prototype.remove = function (c) {
    };
    Box.prototype.getChildren = function () {
        return this.children;
    };
    // Delegate all owrk to child components
    Box.prototype.calculatePrice = function () {
        var result = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result += child.calculatePrice();
        }
        return result;
    };
    return Box;
}());
var hammer = new Product(20);
var toolBox = new Box();
toolBox.add(hammer);
var phone = new Product(100);
var headphones = new Product(10);
var phoneBox = new Box();
phoneBox.add(phone);
phoneBox.add(headphones);
var charger = new Product(5);
var chargerBox = new Box();
chargerBox.add(charger);
var mobileBox = new Box();
mobileBox.add(phoneBox);
mobileBox.add(chargerBox);
var receipt = new Product(0);
var mainBox = new Box();
mainBox.add(toolBox);
mainBox.add(mobileBox);
mainBox.add(receipt);
console.log(mainBox.calculatePrice());
