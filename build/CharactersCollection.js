"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var strArr = this.data.split('');
        var left = strArr[leftIdx];
        strArr[leftIdx] = strArr[rightIdx];
        strArr[rightIdx] = left;
        this.data = strArr.join('');
    };
    CharactersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
