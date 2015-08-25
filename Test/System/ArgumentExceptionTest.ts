/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import ArgumentException = System.ArgumentException;
    import Exception = System.Exception;

    describe("System", () => {
        describe("ArgumentException", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: ArgumentException = new ArgumentException();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: ArgumentException = new ArgumentException(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: ArgumentException = new ArgumentException();
                    var exception: ArgumentException = new ArgumentException(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'ArgumentException')", () => {
                    // Arrange & Act
                    var exception: ArgumentException = new ArgumentException();
                    // Assert
                    expect(exception.name).toBe("ArgumentException");
                });

                it("creates instances of the more general Exception type", () => {
                    // Arrange & Act
                    var exception: ArgumentException = new ArgumentException();
                    // Assert
                    expect(exception instanceof Exception).toBe(true);
                });
            });
        });
    });
}