var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(user_name, user_last_name, user_age) {
        this.user_age = user_age;
        this.user_name = user_name;
        this.user_last_name = user_last_name;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.user_name, " ").concat(this.user_last_name);
    };
    return User;
}());
var user = new User("burak", "eren", 20);
console.log(user.getFullName());
var Customer = /** @class */ (function () {
    function Customer(userName, userLastName, userAge) {
        this.discountRate = 10;
        this.userName = userName;
        this.userLastName = userLastName;
        this.userAge = userAge;
    }
    Customer.prototype.getFullName = function () {
        return "".concat(this.userName, " ").concat(this.userLastName);
    };
    Customer.prototype.getDiscountedPrice = function (price) {
        return price - (price * (this.discountRate / 100));
    };
    return Customer;
}());
var SuperCustomer = /** @class */ (function (_super) {
    __extends(SuperCustomer, _super);
    function SuperCustomer(userName, userLastName, userAge, superCustomerID) {
        var _this = _super.call(this, userName, userLastName, userAge) || this;
        _this.discountRate = 20;
        _this.superCustomerID = superCustomerID;
        return _this;
    }
    SuperCustomer.prototype.getFullName = function () {
        return "".concat(_super.prototype.getFullName.call(this), " Super Customer ID: ").concat(this.superCustomerID);
    };
    return SuperCustomer;
}(Customer));
var customer = new Customer("emre", "efe", 20);
var superCustomer = new SuperCustomer("ali", "emre", 30, 12345);
console.log("customer " + customer.getFullName() + customer.getDiscountedPrice(500));
console.log("super customer " + superCustomer.getFullName() + " price " + superCustomer.getDiscountedPrice(500));
