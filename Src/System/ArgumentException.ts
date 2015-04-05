/// <reference path="../reference.ts" />

module System {
    "use strict";

    /**
     * Exception being thrown in case one of the arguments provided to a method or function does not meet the
     * prevalent preconditions.
     */
    export class ArgumentException {

        /**
         * The name of the exception.
         */
        public name: string = "ArgumentException";

        /**
         * Constructs a new instance of the ArgumentException class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {}
    }
}