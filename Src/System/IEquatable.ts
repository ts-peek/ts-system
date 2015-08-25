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
         * <p>
         * The equals method implements an equivalence relation on non-null object references:
         * <ul>
         * <li>It is <i>reflexive</i>: for any non-null reference value <code>x</code>, <code>x.equals(x)</code> should return 
         * <code>true</code>.
         * <li>It is <emph>symmetric</emph>: for any non-null reference values <code>x</code> and <code>y</code>, <code>x.equals(y)</code>
         * should return
         * <code>true</code> if and only if <code>y.equals(x)</code> returns <code>true</code>.
         * <li>It is <i>transitive</i>: for any non-null reference values <code>x</code>, <code>y</code>, and <code>z</code>, if 
         * <code>x.equals(y)</code> returns <code>true</code> and <code>y.equals(z)</code> returns <code>true,</code> then 
         * <code>x.equals(z)</code> should return <code>true</code>.
         * <li>It is <i>consistent</i>: for any non-null reference values <code>x</code> and <code>y</code>, multiple invocations of
         * <code>x.equals(y)</code> consistently return <code>true</code> or consistently return <code>false</code>, provided no 
         * information used in equals comparisons on the objects is modified.
         * <li>For any non-null reference value <code>x</code>, <code>x.equals(null)</code> should return <code>false</code>.
         * </ul>
         * The <code>IEquatable.equals</code> method for plain JavaScript objects (objects that do not override their <code>equals</code>
         * method) implements the most discriminating possible equivalence relation on objects; that is, for any non-null reference values
         * <code>x</code> and <code>y</code>, this method returns <code>true</code> if and only if <code>x</code> and <code>y</code> refer
         * to the same object (<code>x === y</code> has the value <code>true</code>).
         * <p>
         * Note that it is generally necessary to override the <code>IEquatable.hashCode</code> method whenever this method is overridden,
         * so as to maintain the general contract for the <code>IEquatable.hashCode</code> method, which states that equal objects must 
         * have equal hash codes.
         * @see IEquatable.hashCode
         * @param other An object to compare with this object.
         * @return <code>true</code> if the current object is equal to the <code>other</code> paramter, <code>false</code>
         * otherwise.
         */
        equals?(other: T): boolean;

        /**
         * Gets a hash code value for the object. This method is supported for the benefit of collections that internally use hash tables.
         * <p>
         * The general contract of <code>IEquatable.hashCode</code> is:
         * <ul>
         * <li>Whenever it is invoked on the same object more than once during an execution of a JavaScript application, the method must
         * consistently return the same integer, provided no information used in equals comparisons on the object is modified. This integer
         * need not remain consistent from one execution of an application to another execution of the same application.
         * <li>If two objects are equal according to the <code>IEquatable.equals</code> method, then calling the 
         * <code>IEquatable.hashCode</code> method on each of the two objects must produce the same integer result.
         * <li>It is not required that if two objects are unequal according to the <code>IEquatable.equals</code> method, then calling the 
         * <code>IEquatable.hashCode</code> method on each of the two objects must produce distinct results. However, the programmer should
         * be aware that producing distinct results for unequal objects may improve the performance of hash tables.
         * </ul>
         * As much as is reasonably practical, the <code>IEquatable.hashCode</code> method of plain objects does return distinct integers 
         * for distinct objects.
         * @see IEquatable.equals
         * @returns An integer value as the hash code for the object.
         */
        hashCode?(): number;
    }
}