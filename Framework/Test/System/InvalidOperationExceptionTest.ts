/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import InvalidOperationException = System.InvalidOperationException;
    import Exception = System.Exception;

    describe("System", () => {
        describe("InvalidOperationException", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: InvalidOperationException = new InvalidOperationException();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: InvalidOperationException = new InvalidOperationException(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: InvalidOperationException = new InvalidOperationException();
                    var exception: InvalidOperationException = new InvalidOperationException(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'InvalidOperationException')", () => {
                    // Arrange & Act
                    var exception: InvalidOperationException = new InvalidOperationException();
                    // Assert
                    expect(exception.name).toBe("InvalidOperationException");
                });

                it("creates instances of the more general Exception type", () => {
                    // Arrange & Act
                    var exception: InvalidOperationException = new InvalidOperationException();
                    // Assert
                    expect(exception instanceof Exception).toBe(true);
                });
            });
        });
    });

}