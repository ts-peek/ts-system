/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import ArgumentUndefinedException = System.ArgumentUndefinedException;
    import Exception = System.Exception;

    describe("System", () => {
        describe("ArgumentUndefinedException", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: ArgumentUndefinedException = new ArgumentUndefinedException();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: ArgumentUndefinedException = new ArgumentUndefinedException(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: ArgumentUndefinedException = new ArgumentUndefinedException();
                    var exception: ArgumentUndefinedException = new ArgumentUndefinedException(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'ArgumentUndefinedException')", () => {
                    // Arrange & Act
                    var exception: ArgumentUndefinedException = new ArgumentUndefinedException();
                    // Assert
                    expect(exception.name).toBe("ArgumentUndefinedException");
                });

                it("creates instances of the more general Exception type", () => {
                    // Arrange & Act
                    var exception: ArgumentUndefinedException = new ArgumentUndefinedException();
                    // Assert
                    expect(exception instanceof Exception).toBe(true);
                });
            });
        });
    });
}