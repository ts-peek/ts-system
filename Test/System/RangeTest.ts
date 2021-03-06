﻿/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import IFunc0 = System.IFunc0;
    import Range = System.Range;

    describe("System", () => {
        describe("Range", () => {
            var getRange: IFunc0<Range> = () => new Range(1, 2);

            describe("@constructor", () => {
                it("creates a valid range if the upper bound is greater or equal to the lower bound", () => {
                    // Arrange & Act
                    var range: Range = new Range(1, 2);
                    // Assert
                    expect(range.getLowerBound()).toBe(1);
                    expect(range.getUpperBound()).toBe(2);
                });

                it("throws exception if lower bound is undefined or null", () => {
                    // Act & Assert
                    expect(() => new Range(undefined, 2)).toThrow();
                    expect(() => new Range(null, 2)).toThrow();
                });

                it("throws exception if upper bound is undefined or null", () => {
                    // Act & Assert
                    expect(() => new Range(1, undefined)).toThrow();
                    expect(() => new Range(1, null)).toThrow();
                });

                it("throws exception if lower bound is greater than upper bound", () => {
                    // Act & Assert
                    expect(() => new Range(2, 1)).toThrow();
                });
            });

            describe("getInterval", () => {
                it("gets the difference between upper and lower bound", () => {
                    // Arrange
                    var range: Range = getRange();
                    // Act
                    var result: number = range.getInterval();
                    // Assert
                    expect(result).toBe(1);
                });
            });

            describe("isInRange", () => {
                it("returns false if the given value is not within the range", () => {
                    // Arrange
                    var range: Range = getRange();
                    // Act
                    var result1: boolean = range.isInRange(1);
                    var result2: boolean = range.isInRange(2);
                    // Assert
                    expect(result1).toBe(true);
                    expect(result2).toBe(true);
                });

                it("returns false if the given value is not within the range", () => {
                    // Arrange
                    var range: Range = getRange();
                    // Act
                    var result: boolean = range.isInRange(3);
                    // Assert
                    expect(result).toBe(false);
                });

                it("returns false if the given value is undefined or null", () => {
                    // Arrange
                    var range: Range = getRange();
                    // Act & Assert
                    expect(range.isInRange(null)).toBe(false);
                    expect(range.isInRange(undefined)).toBe(false);
                });
            });
        });
    });
}