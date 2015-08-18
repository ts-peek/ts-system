/*/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import EqualsBuilder = System.EqualsBuilder;
    import IFunc0 = System.IFunc0;
    import StringComparison = System.StringComparison;

    class TestClass implements Object {

        constructor(public x: number, public y: number) {}

        public equals(other: TestClass): boolean {
            return this.x === other.x && this.y === other.y;
        }

        public hashCode(): number { throw new Error("Not implemented"); }
    }

    debugger;
    describe("System", () => {
        describe("EqualsBuilder", () => {
            var getBuilder: IFunc0<EqualsBuilder> = () => {
                return new EqualsBuilder();
            };

            describe("@constructor", () => {
                it("initially sets builder state to true", () => {
                    // Arrange & Act
                    var builder: EqualsBuilder = new EqualsBuilder();
                    // Assert
                    expect(builder.isEqual()).toBe(true);
                });
            });

            describe("append", () => {
                it("does not modify the builder state when comparing equal values", () => {
                    /* tslint:disable #1#
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    var obj: any = { x: 1 };
                    // Act
                    builder.append(true, true);
                    builder.append(0, 0);
                    builder.append("", "");
                    builder.append(new Boolean(true), new Boolean(true));
                    builder.append(new Number(0), new Number(0));
                    builder.append(new String("test"), new String("test"));
                    builder.append(new Boolean(true), true);
                    builder.append(new Number(0), 0);
                    builder.append(new String("test"), "test");
                    builder.append(obj, obj);
                    builder.append(new TestClass(1, 2), new TestClass(1, 2));
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing different boolean values", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.append(true, false);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing different numbers", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.append(0, 1);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing different strings", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.append("one", "two");
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing unequal objects", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var instance1: TestClass = new TestClass(1, 2);
                    var instance2: TestClass = new TestClass(2, 2);
                    // Act
                    builder.append(instance1, instance2);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing equal objects without equals method", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.append({ x: 1 }, { x: 1 });
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendBase", () => {
                it("does not modify the builder state when the base equals method returns true", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendBase(true);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when the base equals method returns false", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendBase(false);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when the base equals method returns undefined", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendBase(undefined);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendBoolean", () => {
                it("does not modify the builder state when comparing equal values", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendBoolean(false, false);
                    builder.appendBoolean(true, true);
                    builder.appendBoolean(undefined, undefined);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing different values", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendBoolean(true, false);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendNumber", () => {
                it("does not modify the builder state when comparing strictly equal values", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendNumber(1, 1);
                    builder.appendNumber(1.5, 1.5);
                    builder.appendNumber(undefined, undefined);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("does not modify the builder state when comparing values being withing the given tolerance", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendNumber(1.0001, 1.0002, 3);
                    builder.appendNumber(1.0000001, 1.0000002, 6);
                    builder.appendNumber(1.0000000001, 1.0000000002, 6);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing different values", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendNumber(1, 2);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing values not being within the given tolerance", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendNumber(1.000001, 1.000002, 6);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendObject", () => {
                it("does not modify the builder state when comparing equal objects", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    var obj: any = { x: 1, y: 2 };
                    var instance1: TestClass = new TestClass(1, 2);
                    var instance2: TestClass = new TestClass(1, 2);
                    // Act
                    builder.appendObject(obj, obj);
                    builder.appendObject(instance1, instance2);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing unequal objects", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var instance1: TestClass = new TestClass(1, 2);
                    var instance2: TestClass = new TestClass(2, 2);
                    // Act
                    builder.appendObject(instance1, instance2);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing equal objects without equals method", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var instance1: any = { x: 1 };
                    var instance2: any = { x: 1 };
                    // Act
                    builder.appendObject(instance1, instance2);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendString", () => {
                it("does not modify the builder state when comparing equal strings", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendString("test", "test");
                    builder.appendString("test", "TEST", StringComparison.IGNORE_CASE);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing different strings", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendString("one", "two");
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing equal strings with different cases", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendString("one", "ONE", StringComparison.ORDINAL);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });

            describe("appendStringRelaxed", () => {
                it("does not modify the builder state when comparing equal strings", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    var equal: boolean = builder.isEqual();
                    // Act
                    builder.appendStringRelaxed("test", "test");
                    builder.appendStringRelaxed("test", "TEST", StringComparison.IGNORE_CASE);
                    builder.appendStringRelaxed("", undefined);
                    builder.appendStringRelaxed("", null);
                    builder.appendStringRelaxed(undefined, null);
                    // Assert
                    expect(builder.isEqual()).toBe(equal);
                });

                it("turns the builder state into false when comparing different strings", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendStringRelaxed("one", "two");
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });

                it("turns the builder state into false when comparing equal strings with different cases", () => {
                    // Arrange
                    var builder: EqualsBuilder = getBuilder();
                    // Act
                    builder.appendStringRelaxed("one", "ONE", StringComparison.ORDINAL);
                    // Assert
                    expect(builder.isEqual()).toBe(false);
                });
            });
        });
    });
}*/
