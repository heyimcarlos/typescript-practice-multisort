"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.CharactersCollection = CharactersCollection;
