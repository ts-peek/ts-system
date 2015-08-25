/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import ExceptionUtil = System.ExceptionUtil;

    describe("System", () => {
        describe("ExceptionUtil", () => {
            describe("notDefinedMessage", () => {
                it("creates a defined exception message if the provided argument was undefined or null", () => {
                    // Arrange
                    var parameterName: string = "parameter";
                    // Act
                    var result: string = ExceptionUtil.notDefinedMessage(parameterName);
                    // Assert
                    expect(result).toBe(`Argument @${parameterName} was undefined or null.`);
                });

                it("throws exception if the given argument is undefined or null", () => {
                    // Act & Assert
                    expect(() => ExceptionUtil.notDefinedMessage(undefined)).toThrow();
                    expect(() => ExceptionUtil.notDefinedMessage(null)).toThrow();
                });
            });
        });
    });
}