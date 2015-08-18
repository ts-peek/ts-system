/// <reference path="../reference.ts"/>

module Test {
    "use strict";

    import Exception = System.Exception;

    describe("System", () => {
        describe("Exception", () => {
            describe("@constructor", () => {
                it("creates instances of the more general JavaScript <Error> type", () => {
                    // Arrange & Act
                    var exception: Exception = new Exception();
                    // Assert
                    expect(exception instanceof Error).toBe(true);
                });
            });
        });
    });
}