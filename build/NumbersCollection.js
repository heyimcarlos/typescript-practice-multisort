"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var left = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = left;
    };
    NumbersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // getter, we don't need to call it. Just reference it directly.
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
