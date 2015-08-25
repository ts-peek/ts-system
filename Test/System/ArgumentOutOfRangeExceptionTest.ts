/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import ArgumentOutOfRangeException = System.ArgumentOutOfRangeException;
    import Exception = System.Exception;

    describe("System", () => {
        describe("ArgumentOutOfRangeException", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: ArgumentOutOfRangeException = new ArgumentOutOfRangeException();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: ArgumentOutOfRangeException = new ArgumentOutOfRangeException(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: ArgumentOutOfRangeException = new ArgumentOutOfRangeException();
                    var exception: ArgumentOutOfRangeException = new ArgumentOutOfRangeException(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'ArgumentOutOfRangeException')", () => {
                    // Arrange & Act
                    var exception: ArgumentOutOfRangeException = new ArgumentOutOfRangeException();
                    // Assert
                    expect(exception.name).toBe("ArgumentOutOfRangeException");
                });

                it("creates instances of the more general Exception type", () => {
                    // Arrange & Act
                    var exception: ArgumentOutOfRangeException = new ArgumentOutOfRangeException();
                    // Assert
                    expect(exception instanceof Exception).toBe(true);
                });
            });
        });
    });
}