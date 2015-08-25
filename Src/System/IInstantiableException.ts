/// <reference path="../reference.ts"/>

module System {
    "use strict";

    InterfaceRegistry.System.IInstantiableException = "IInstantiableException";

    /**
     * Interface representing the instatiable type of an exception, which may be used as static type for exception 
     * constructor functions. For example, the <code>Contract.requires</code> method is a very generic method, in that
     * it consumes a condition and an instatiable exception type; and creates and throws a new exception of the given 
     * type in case the provided condition is not satisfied. See following example for a practicle usage scenario:
     * <p>
     * <code>
     * public logarithm(value: number): number {
     *     System.Diagnosis.Contract.requires(value >= 0, System.ArgumentOutOfRangeException);
     *     return Math.log(value) / Math.LN10;
     * }
     * </code>
     * 
     * @author Christian Schaiter
     */
    export interface IInstantiableException<T extends Exception> {
        new(message: string): T;
    }
}