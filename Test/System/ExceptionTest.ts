/// <reference path="../reference.ts"/>

module Test {
    "use strict";

    import Exception = System.Exception;

    describe("System", () => {
        describe("Exception", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: Exception = new Exception();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: Exception = new Exception(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: Exception = new Exception();
                    var exception: Exception = new Exception(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'Exception')", () => {
                    // Arrange & Act
                    var exception: Exception = new Exception();
                    // Assert
                    expect(exception.name).toBe("Exception");
                });

                it("creates instances of the more general JavaScript <Error> type", () => {
                    // Arrange & Act
                    var exception: Exception = new Exception();
                    // Assert
                    expect(exception instanceof Error).toBe(true);
                });
            });

            describe("toString", () => {
                it("recursively provides information about the exception and all its inner exceptions", () => {
                    // Arrange
                    var innerExceptionMessage: string = "Inner message";
                    var middleExceptionMessage: string = "Middel message";
                    var outerExceptionmessage: string = "Outer message";
                    var innerException: Exception = new Exception(innerExceptionMessage);
                    var middleException: Exception = new Exception(middleExceptionMessage, innerException);
                    var outerException: Exception = new Exception(outerExceptionmessage, middleException);
                    // Act
                    var result: string = outerException.toString();
                    // Assert
                    expect(result).toContain(innerExceptionMessage);
                    expect(result).toContain(middleExceptionMessage);
                    expect(result).toContain(outerExceptionmessage);
                });
            });
        });
    });
}