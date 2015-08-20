///// <reference path="../reference.ts"/> 

//module Test {
//    "use strict";

//    import IFunc0 = System.IFunc0;
//    import HashCodeBuilder = System.HashCodeBuilder;
//    import StringComparison = System.StringComparison;

//    class TestClass implements Object {

//        constructor(public x: number, public y: number) {}

//        public equals(other: TestClass): boolean {
//            return this.x === other.x && this.y === other.y;
//        }

//        public hashCode(): number {
//            return new HashCodeBuilder().appendNumber(this.x).appendNumber(this.y).getHashCode();
//        }
//    }

//    describe("System", () => {
//        describe("HashCodeBuilder", () => {
//            var getBuilder: IFunc0<HashCodeBuilder> = () => {
//                return new HashCodeBuilder();
//            };

//            describe("@constructor", () => {
//                it("set initial hash code to an odd number", () => {
//                    // Arrange & Act
//                    var builder: HashCodeBuilder = new HashCodeBuilder();
//                    // Assert
//                    expect(builder.getHashCode() % 2).toBe(1);
//                });
//            });

//            describe("append", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.append(false)
//                        .append(10.12345)
//                        .append("test")
//                        .append(new TestClass(1, 2))
//                        .append(undefined);
//                    builder2.append(false)
//                        .append(10.12345)
//                        .append("test")
//                        .append(new TestClass(1, 2))
//                        .append(undefined);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined, null or NaN", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.append(undefined)
//                        .append(null)
//                        .append(Number.NaN);
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });
//            });

//            describe("appendBase", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.appendBase(10.12345);
//                    builder2.appendBase(10.12345);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined, null or NaN", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.appendBase(undefined)
//                        .appendBase(null)
//                        .appendBase(Number.NaN);
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });
//            });

//            describe("appendBoolean", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.appendBoolean(true);
//                    builder2.appendBoolean(true);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined or null", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.appendBoolean(undefined)
//                        .appendBoolean(null);
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });
//            });

//            describe("appendNumber", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.appendNumber(10.12345)
//                        .appendNumber(1.4444, 3);
//                    builder2.appendNumber(10.12345)
//                        .appendNumber(1.4445, 3);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined, null or NaN", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.appendNumber(undefined);
//                    builder.appendNumber(null);
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });

//                it("breaks equals/hashCode contract if tolerance is too small", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.appendNumber(1.4444, 4);
//                    builder2.appendNumber(1.4445, 4);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(false);
//                });
//            });

//            describe("appendObject", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    var obj: any = { x: 1 };
//                    // Act
//                    builder1.appendObject(new TestClass(1, 2))
//                        .appendObject(obj);
//                    builder2.appendObject(new TestClass(1, 2))
//                        .appendObject(obj);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined or null", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.appendObject(undefined)
//                        .appendObject(null);
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });
//            });

//            describe("appendString", () => {
//                it("modifies the builder according to the equals/hashCode contract", () => {
//                    // Arrange
//                    var builder1: HashCodeBuilder = getBuilder();
//                    var builder2: HashCodeBuilder = getBuilder();
//                    // Act
//                    builder1.appendString("one")
//                        .appendString("TWO", StringComparison.IGNORE_CASE);
//                    builder2.appendString("one")
//                        .appendString("two", StringComparison.IGNORE_CASE);
//                    // Assert
//                    expect(builder1.getHashCode() === builder2.getHashCode()).toBe(true);
//                });

//                it("does not modify the builder state if the given value is undefined, null or the empty string", () => {
//                    // Arrange
//                    var builder: HashCodeBuilder = getBuilder();
//                    var hashCode: number = builder.getHashCode();
//                    // Act
//                    builder.appendString(undefined)
//                        .appendString(null)
//                        .appendString("");
//                    // Assert
//                    expect(builder.getHashCode()).toBe(hashCode);
//                });
//            });
//        });
//    });
//}