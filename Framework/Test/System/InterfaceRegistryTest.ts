/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import ArgumentException = System.ArgumentException;
    import InterfaceRegistry = System.InterfaceRegistry;
    import Exception = System.Exception;

    describe("System", () => {
        describe("InterfaceRegistry", () => {
            it("has all interfaces in the 'System' namespace registered", () => {
                // Act & Assert
                expect(InterfaceRegistry.System).toBeDefined();
                expect(InterfaceRegistry.System.IAction0).toBeDefined();
                expect(InterfaceRegistry.System.IAction1).toBeDefined();
                expect(InterfaceRegistry.System.IAction2).toBeDefined();
                expect(InterfaceRegistry.System.IAction3).toBeDefined();
                expect(InterfaceRegistry.System.IAction4).toBeDefined();
                expect(InterfaceRegistry.System.IAction5).toBeDefined();
                expect(InterfaceRegistry.System.IAction6).toBeDefined();
                expect(InterfaceRegistry.System.IAction7).toBeDefined();
                expect(InterfaceRegistry.System.IAction8).toBeDefined();
                expect(InterfaceRegistry.System.IComparable).toBeDefined();
                expect(InterfaceRegistry.System.IEquatable).toBeDefined();
                expect(InterfaceRegistry.System.IFunc0).toBeDefined();
                expect(InterfaceRegistry.System.IFunc1).toBeDefined();
                expect(InterfaceRegistry.System.IFunc2).toBeDefined();
                expect(InterfaceRegistry.System.IFunc3).toBeDefined();
                expect(InterfaceRegistry.System.IFunc4).toBeDefined();
                expect(InterfaceRegistry.System.IFunc5).toBeDefined();
                expect(InterfaceRegistry.System.IFunc6).toBeDefined();
                expect(InterfaceRegistry.System.IFunc7).toBeDefined();
                expect(InterfaceRegistry.System.IFunc8).toBeDefined();
                expect(InterfaceRegistry.System.IImplements).toBeDefined();
                expect(InterfaceRegistry.System.IInstantiable).toBeDefined();
                expect(InterfaceRegistry.System.IInstantiableException).toBeDefined();
            });

            it("has all interface in the 'System.Diagnosis' namespace registered", () => {
                // Act & Assert
                expect(InterfaceRegistry.System.Diagnosis).toBeDefined();
            });
        });
    });
}