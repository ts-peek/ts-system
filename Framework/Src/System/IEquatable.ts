/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    InterfaceRegistry.System.IEquatable = "IEquatable";

    /**
     * Defines generalized methods that a class implements to determine equality of instances as well as hash code 
     * values for dictionary-based collections or hashsets.
     * <p>
     * This interface is implemented by types whose values can be equated (for example, the <code>Number</code> and 
     * <code>String</code> classes).
     * 
     * @author Christian Schaiter
     * @see IComparable<T>
     */
    export interface IEquatable<T> {

        /**
         * Indicates whether the current object is equal to another object of the same type.
         * 
         * @param other An object to compare with this object.
         * @return <code>true</code> if the current object is equal to the <code>other</code> paramter, <code>false</code>
         * otherwise.
         */
        equals?(other: T): boolean;

        hashCode?(): number;
    }
}