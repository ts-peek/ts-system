/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import StringUtil = System.StringUtil;

    describe("System", () => {
        describe("StringUtil", () => {
            describe("EMPTY_STRING", () => {
                it("represents the empty string", () => {
                    // Act & Assert
                    expect(StringUtil.EMPTY_STRING).toBe("");
                });
            });

            describe("format", () => {
                it("replaces the format string placeholders with matching values", () => {
                    // Arrange
                    var formatString: string = "The {0} in {2} is already {1} years old.";
                    // Act
                    var result: string = StringUtil.format(formatString, "building", 100, "New York");
                    // Assert
                    expect(result).toBe("The building in New York is already 100 years old.");
                });

                it("leaves unmatched format items unmodified", () => {
                    // Arrange
                    var formatString: string = "The {value} in {3} is already {-1} years old.";
                    // Act
                    var result: string = StringUtil.format(formatString, "building", 100, "New York");
                    // Assert
                    expect(result).toBe(formatString);
                });

                it("throws exception if the given format is undefined or null", () => {
                    // Act & Assert
                    expect(() => StringUtil.format(undefined)).toThrow();
                    expect(() => StringUtil.format(null)).toThrow();
                });
            });
        });
    });
}