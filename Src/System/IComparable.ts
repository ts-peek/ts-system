/// <reference path="../reference.ts"/>

module System {
    "use strict";

    /**
     * Interface that defines a generalized comparison method that a value type or class implements to create a 
     * type-specific comparison method for ordering or sorting its instances.
     * <p>
     * This interface is implemented by types whose values can be ordered or sorted and provides a strongly typed 
     * comparison method for ordering members of a generic collection object. For example, one number can be larger
     * than a second number, and one string can appear in alphabetical order before another. It requires that 
     * implementing types define a single method, <code>compareTo(T)</code>, that indicates whether the position of 
     * the current instance in the sort order is before, after, or the same as a second object of the same type. 
     * Typically, the method is not called directly from developer code. Instead, it is called automatically by methods
     * of collection classes.
     * <p>
     * Typically, types that provide an <code>IComparable&lt;T&gt;</code> implementation also implement the 
     * <code>IEquatable&lt;T&gt;</code> interface. The <code>IEquatable&lt;T&gt;</code> interface defines the 
     * <code>equals</code> method, which determines the equality of instances of the implementing type.
     * 
     * @author Christian Schaiter
     * @see IEquatable
     */
    export interface IComparable<T> {

        /**
         * Compares the current instance with another object of the same type and returns an integer that indicates 
         * whether the current instance precedes, follows, or occurs in the same position in the sort order as the 
         * other object.
         * <p>
         * The <code>compareTo</code> provides a strongly typed comparison method for ordering members of a generic 
         * collection object. Because of this, it is usually not called directly from developer code. Instead, it is 
         * called automatically by methods of collection classes.
         * <p>
         * This method is only a definition and must be implemented by a specific class or value type to have effect. 
         * The meaning of the comparisons specified in the return value below ("precedes", "occurs in the same position
         * as", and "follows) depends on the particular implementation. By definition, any object compares greater than 
         * <code>undefined</code> or <code>null</code>, and two <code>undefined</code> or <code>null</code> references 
         * compare equal to each other. Also, <code>undefined</code> compares equal to <code>null</code>.
         * <p>
         * <i>Notes to Implementers:</i><br>
         * For objects <code>a</code>, <code>b</code>, and <code>c</code>, the following must be true:<br>
         * - <code>a.compareTo(a)</code> is required to return zero.<br>
         * - If <code>a.compareTo(b)</code> returns zero, then <code>b.compareTo(a)</code> is required to return zero.<br>
         * - If <code>a.compareTo(b)</code> returns zero and <code>b.compareTo(c)</code> returns zero, then 
         * <code>a.compareTo(c)</code> is required to return zero.<br>
         * - If <code>a.compareTo(b)</code> returns a value other than zero, then <code>b.compareTo(a)</code> is required
         * to return a value of the opposite sign.<br>
         * - If <code>a.compareTo(b)</code> returns a value <i>x</i> that is not equal to zero, and 
         * <code>b.compareTo(c)</code> returns a value <i>y</i> of the same sign as <i>x</i>, then 
         * <code>a.compareTo(c)</code> is required to return a value of the same sign as <i>x</i> and <i>y</i>.
         * @param other An object to compare with this instance.
         * @return A value that indicates the relative order of the objects being compared. The return value has these 
         * meanings:<br>
         * - Less than zero: this instance precedes <code>other</code> in the sort order;<br> 
         * - Zero: this instance occurs at the sam position in the sort order as <code>other</code>
         * - Greater than zero: this instance follows <code>other</code> in the sort order.
         */
        compareTo(other: T): number;
    }
}