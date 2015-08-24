/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import NotImplementedException = System.NotImplementedException;
    import Exception = System.Exception;

    describe("System", () => {
        describe("NotImplementedException", () => {
            describe("@constructor", () => {
                it("sets a default error message if no message is provided", () => {
                    // Arrange & Act
                    var exception: NotImplementedException = new NotImplementedException();
                    // Assert
                    expect(exception.message).toBe("An error occured during program execution.");
                });

                it("sets the message property if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var exception: NotImplementedException = new NotImplementedException(message);
                    // Assert
                    expect(exception.message).toBe(message);
                });

                it("sets the message and inner exception if provided by the constructor invocation", () => {
                    // Arrange & Act
                    var message: string = "Unit test message";
                    var innerException: NotImplementedException = new NotImplementedException();
                    var exception: NotImplementedException = new NotImplementedException(message, innerException);
                    // Assert
                    expect(exception.message).toBe(message);
                    expect(exception.innerException).toBe(innerException);
                });

                it("sets the name property to the name of the type (i.e. 'NotImplementedException')", () => {
                    // Arrange & Act
                    var exception: NotImplementedException = new NotImplementedException();
                    // Assert
                    expect(exception.name).toBe("NotImplementedException");
                });

                it("creates instances of the more general Exception type", () => {
                    // Arrange & Act
                    var exception: NotImplementedException = new NotImplementedException();
                    // Assert
                    expect(exception instanceof Exception).toBe(true);
                });
            });
        });
    });
}