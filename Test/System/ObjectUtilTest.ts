///// <reference path="../reference.ts"/>

//module Test {
//    "use strict";

//    import ObjectUtil = System.ObjectUtil;

//    class TestClass implements Object {

//        constructor(public x: number, public y: number) {}

//        public equals(other: TestClass): boolean {
//            return this.x === other.x && this.y === other.y;
//        }

//        public hashCode(): number { throw new Error("Not implemented"); }
//    }

//    describe("System", () => {
//        describe("ObjectUtil", () => {
//            describe("areEqual", () => {
//                it("returns true if the given values are equal", () => {
//                    // Arrange
//                    var obj: any = { x: 1 };
//                    // Act & Assert
//                    expect(ObjectUtil.areEqual(true, true)).toBe(true);
//                    expect(ObjectUtil.areEqual(0, 0)).toBe(true);
//                    expect(ObjectUtil.areEqual("", "")).toBe(true);
//                    expect(ObjectUtil.areEqual(new Boolean(true), new Boolean(true))).toBe(true);
//                    expect(ObjectUtil.areEqual(new Number(0), new Number(0))).toBe(true);
//                    expect(ObjectUtil.areEqual(new String(""), new String(""))).toBe(true);
//                    expect(ObjectUtil.areEqual(new Boolean(true), true)).toBe(true);
//                    expect(ObjectUtil.areEqual(new Number(0), 0)).toBe(true);
//                    expect(ObjectUtil.areEqual(new String(""), "")).toBe(true);
//                    expect(ObjectUtil.areEqual(new TestClass(1, 2), new TestClass(1, 2))).toBe(true);
//                    expect(ObjectUtil.areEqual(obj, obj)).toBe(true);
//                });

//                it("returns false if the given values are different", () => {
//                    expect(ObjectUtil.areEqual(true, false)).toBe(false);
//                    expect(ObjectUtil.areEqual(0, 1)).toBe(false);
//                    expect(ObjectUtil.areEqual("one", "two")).toBe(false);
//                    expect(ObjectUtil.areEqual(new Boolean(true), new Boolean(false))).toBe(false);
//                    expect(ObjectUtil.areEqual(new Number(0), new Number(1))).toBe(false);
//                    expect(ObjectUtil.areEqual(new String("one"), new String("two"))).toBe(false);
//                    expect(ObjectUtil.areEqual(new Boolean(true), false)).toBe(false);
//                    expect(ObjectUtil.areEqual(new Number(0), 1)).toBe(false);
//                    expect(ObjectUtil.areEqual(new String("one"), "two")).toBe(false);
//                    expect(ObjectUtil.areEqual(new TestClass(1, 2), new TestClass(2, 2))).toBe(false);
//                    expect(ObjectUtil.areEqual({ x: 1 }, { x: 1 })).toBe(false);
//                    expect(ObjectUtil.areEqual(undefined, null)).toBe(false);
//                });
//            });

//            describe("isBoolean", () => {
//                it("returns true if the given value is a boolean value", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isBoolean(true)).toBe(true);
//                    expect(ObjectUtil.isBoolean(false)).toBe(true);
//                });

//                it("return false if the given value is NOT a boolean value", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isBoolean(0)).toBe(false);
//                    expect(ObjectUtil.isBoolean("")).toBe(false);
//                    expect(ObjectUtil.isBoolean({})).toBe(false);
//                    expect(ObjectUtil.isBoolean(undefined)).toBe(false);
//                    expect(ObjectUtil.isBoolean(null)).toBe(false);
//                });
//            });

//            describe("isDefined", () => {
//                it("returns true if the given value is not undefined or null", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isDefined(false)).toBe(true);
//                    expect(ObjectUtil.isDefined(0)).toBe(true);
//                    expect(ObjectUtil.isDefined("")).toBe(true);
//                    expect(ObjectUtil.isDefined({})).toBe(true);
//                    expect(ObjectUtil.isDefined(new Array<any>())).toBe(true);
//                });

//                it("return false if the given value is undefined or null", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isDefined(undefined)).toBe(false);
//                    expect(ObjectUtil.isDefined(null)).toBe(false);
//                });
//            });

//            describe("isFunction", () => {
//                it("returns true if the given value is a function", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isFunction(() => 1)).toBe(true);
//                });

//                it("return false if the given value is NOT a function", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isFunction(true)).toBe(false);
//                    expect(ObjectUtil.isFunction(0)).toBe(false);
//                    expect(ObjectUtil.isFunction("")).toBe(false);
//                    expect(ObjectUtil.isFunction({})).toBe(false);
//                    expect(ObjectUtil.isFunction(undefined)).toBe(false);
//                    expect(ObjectUtil.isFunction(null)).toBe(false);
//                });
//            });

//            describe("isNumber", () => {
//                it("returns true if the given value is a number", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isNumber(0)).toBe(true);
//                    expect(ObjectUtil.isNumber(1)).toBe(true);
//                    expect(ObjectUtil.isNumber(Number.NEGATIVE_INFINITY)).toBe(true);
//                    expect(ObjectUtil.isNumber(Number.POSITIVE_INFINITY)).toBe(true);
//                });

//                it("return false if the given value is NOT a number", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isNumber(true)).toBe(false);
//                    expect(ObjectUtil.isNumber(Number.NaN)).toBe(false);
//                    expect(ObjectUtil.isNumber({})).toBe(false);
//                    expect(ObjectUtil.isNumber(undefined)).toBe(false);
//                    expect(ObjectUtil.isNumber(null)).toBe(false);
//                });
//            });

//            describe("isObject", () => {
//                it("returns true if the given value is an object", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isObject({})).toBe(true);
//                    expect(ObjectUtil.isObject(new Object())).toBe(true);
//                    expect(ObjectUtil.isObject(new Array<any>())).toBe(true);
//                    expect(ObjectUtil.isObject(new String("test"))).toBe(true);
//                    expect(ObjectUtil.isObject(null)).toBe(true);
//                });

//                it("return false if the given value is NOT an object", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isObject(true)).toBe(false);
//                    expect(ObjectUtil.isObject(0)).toBe(false);
//                    expect(ObjectUtil.isObject("")).toBe(false);
//                    expect(ObjectUtil.isObject(undefined)).toBe(false);
//                });
//            });

//            describe("isSimpleType", () => {
//                it("returns true if the given value is a simple type", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isSimpleType(true)).toBe(true);
//                    expect(ObjectUtil.isSimpleType(0)).toBe(true);
//                    expect(ObjectUtil.isSimpleType("")).toBe(true);
//                });

//                it("return false if the given value is NOT a simple type", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isSimpleType({})).toBe(false);
//                    expect(ObjectUtil.isSimpleType(new String("test"))).toBe(false);
//                    expect(ObjectUtil.isSimpleType(undefined)).toBe(false);
//                    expect(ObjectUtil.isSimpleType(null)).toBe(false);
//                });
//            });

//            describe("isString", () => {
//                it("returns true if the given value is a string", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isString("")).toBe(true);
//                    expect(ObjectUtil.isString("test")).toBe(true);
//                });

//                it("return false if the given value is NOT a string", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isString(true)).toBe(false);
//                    expect(ObjectUtil.isString(0)).toBe(false);
//                    expect(ObjectUtil.isString({})).toBe(false);
//                    expect(ObjectUtil.isString(new String("test"))).toBe(false);
//                    expect(ObjectUtil.isString(undefined)).toBe(false);
//                    expect(ObjectUtil.isString(null)).toBe(false);
//                });
//            });

//            describe("isUndefined", () => {
//                it("returns true if the given value is undefined", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isUndefined(undefined)).toBe(true);
//                });

//                it("return false if the given value is NOT undefined", () => {
//                    // Act & Assert
//                    expect(ObjectUtil.isUndefined(false)).toBe(false);
//                    expect(ObjectUtil.isUndefined(0)).toBe(false);
//                    expect(ObjectUtil.isUndefined("")).toBe(false);
//                    expect(ObjectUtil.isUndefined(null)).toBe(false);
//                    expect(ObjectUtil.isUndefined({})).toBe(false);
//                });
//            });
//        });
//    });
//}