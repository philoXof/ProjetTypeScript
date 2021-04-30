"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.battle = exports.attack = exports.firstAttack = void 0;
function firstAttack(poke1, poke2) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (poke1.speed < poke2.speed)
                return [2 /*return*/, poke2];
            if (poke1.speed > poke2.speed)
                return [2 /*return*/, poke1];
            return [2 /*return*/, poke1];
        });
    });
}
exports.firstAttack = firstAttack;
function attack(poke1, poke2) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, poke1.hp -= poke2.strength];
        });
    });
}
exports.attack = attack;
function battle(poke1, poke2) {
    return __awaiter(this, void 0, void 0, function () {
        var tour, inter;
        var _this = this;
        return __generator(this, function (_a) {
            tour = 0;
            inter = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(tour === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, attack(poke1, poke2)];
                        case 1:
                            _a.sent();
                            tour = 1;
                            return [3 /*break*/, 4];
                        case 2:
                            if (!(tour === 1)) return [3 /*break*/, 4];
                            return [4 /*yield*/, attack(poke2, poke1)];
                        case 3:
                            _a.sent();
                            tour = 0;
                            _a.label = 4;
                        case 4:
                            if (poke1.hp < 0 || poke2.hp < 0)
                                clearInterval(inter);
                            return [2 /*return*/];
                    }
                });
            }); }, 1000);
            return [2 /*return*/, poke1.hp];
        });
    });
}
exports.battle = battle;
