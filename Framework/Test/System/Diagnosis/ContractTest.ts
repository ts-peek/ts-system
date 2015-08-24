/// <reference path="../../reference.ts"/> 

module Test {
    "use strict";

    import ArgumentOutOfRangeException = System.ArgumentOutOfRangeException;
    import ArgumentUndefinedException = System.ArgumentUndefinedException;
    import Contract = System.Diagnosis.Contract;
    import FormatException = System.FormatException;

    describe("System.Diagnosis", () => {
        describe("Contract", () => {
            describe("requires", () => {
                it("throws an instance of the given exception type when the provided condition is not satisfied", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        // Act
                        Contract.requires(0 > 1, FormatException, message);
                        fail("Exception has not been thrown for an invalid condition.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof FormatException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("does not throw an exception if the provided condition is satisfied", () => {
                    try {
                        // Act
                        Contract.requires(0 < 1, FormatException, "");
                    } catch (e) {
                        // Assert
                        fail("Exception has been thrown for a valid condition.");
                    }
                });
            });

            describe("isDefined", () => {
                it("throws an ArgumentUndefinedException if the given value is undefined", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        Contract.isDefined(undefined, message);
                        fail("Exception has not been thrown for an undefined value.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof ArgumentUndefinedException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("throws an ArgumentUndefinedException if the given value is null", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        Contract.isDefined(null, message);
                        fail("Exception has not been thrown for a null value.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof ArgumentUndefinedException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("does not throw an exception if the provided value is not undefined or null", () => {
                    try {
                        // Act
                        Contract.isDefined("", "");
                        Contract.isDefined(0, "");
                        Contract.isDefined(NaN, "");
                        Contract.isDefined(<Array<any>>[], "");
                        Contract.isDefined({}, "");
                    } catch (e) {
                        // Assert
                        fail("Exception has been thrown for a defined value.");
                    }
                });
            });

            describe("isInRange", () => {
                it("throws an ArgumentOutOfRangeException if the given value is not within the provided range", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        Contract.isInRange(10, 0, 9, message);
                        fail("Exception has not been thrown for an out-of-bounds value.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof ArgumentOutOfRangeException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("does not throw an exception if the provided value is within the given bounds", () => {
                    try {
                        // Act
                        Contract.isInRange(5, 0, 10, "");
                    } catch (e) {
                        // Assert
                        fail("Exception has been thrown for a valid value.");
                    }
                });

                it("throws exception if the given value is undefined or null", () => {
                    // Act & Assert
                    expect(() => Contract.isInRange(undefined, 0, 10, "")).toThrow();
                    expect(() => Contract.isInRange(null, 0, 10, "")).toThrow();
                });

                it("throws exception if the lower bound is undefined or null", () => {
                    // Act & Assert
                    expect(() => Contract.isInRange(1, undefined, 10, "")).toThrow();
                    expect(() => Contract.isInRange(1, null, 10, "")).toThrow();
                });

                it("throws exception if the upper bound is undefined or null", () => {
                    // Act & Assert
                    expect(() => Contract.isInRange(1, 0, undefined, "")).toThrow();
                    expect(() => Contract.isInRange(1, 0, null, "")).toThrow();
                });

                it("throws exception if the lower bound is less than the upper bound", () => {
                    // Act & Assert
                    expect(() => Contract.isInRange(1, 1, 0, "")).toThrow();
                });
            });

            describe("isNegative", () => {
                it("throws an ArgumentOutOfRangeException if the given value non-negative", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        Contract.isNegative(0, message);
                        fail("Exception has not been thrown for a non-negative value.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof ArgumentOutOfRangeException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("does not throw an exception if the provided value is negative", () => {
                    try {
                        // Act
                        Contract.isNegative(-1, "");
                    } catch (e) {
                        // Assert
                        fail("Exception has been thrown for a negative value.");
                    }
                });

                it("throws exception if the given value is undefined or null", () => {
                    // Act & Assert
                    expect(() => Contract.isNegative(undefined, "")).toThrow();
                    expect(() => Contract.isNegative(null, "")).toThrow();
                });
            });

            describe("isPositive", () => {
                it("throws an ArgumentOutOfRangeException if the given value negative", () => {
                    // Arrange
                    var message: string = "Unit test message";
                    try {
                        Contract.isPositive(-1, message);
                        fail("Exception has not been thrown for a negative value.");
                    } catch (e) {
                        // Assert
                        expect(e instanceof ArgumentOutOfRangeException).toBe(true);
                        expect(e.message).toBe(message);
                    }
                });

                it("does not throw an exception if the provided value is non-negative", () => {
                    try {
                        // Act
                        Contract.isPositive(0, "");
                    } catch (e) {
                        // Assert
                        fail("Exception has been thrown for a non-negative value.");
                    }
                });

                it("throws exception if the given value is undefined or null", () => {
                    // Act & Assert
                    expect(() => Contract.isPositive(undefined, "")).toThrow();
                    expect(() => Contract.isPositive(null, "")).toThrow();
                });
            });
        });
    });
}