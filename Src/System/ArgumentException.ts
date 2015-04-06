/// <reference path="../reference.ts" />

module System {
    "use strict";

    /**
     * Exception being thrown in case one of the arguments provided to a method or function does not meet the
     * prevalent preconditions.
     * <p>
     * This exception should be thrown if no more concrete exception (that would describe the problem in a more concise
     * way) exists. E.g., if no <code>undefined</code> or <code>null</code> values are permitted as argument values, the
     * more concrete <code>ArgumentUndefinedException</code> should be thrown.
     * 
     * @author Christian Schaiter
     * @see ArgumentOutOfRangeException
     * @see ArgumentUndefinedException
     * @see ElementUndefinedException
     */
    export class ArgumentException {

        /**
         * The name of the exception.
         */
        public name: string = "ArgumentException";

        /**
         * Constructs a new instance of the <code>ArgumentException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {}
    }
}