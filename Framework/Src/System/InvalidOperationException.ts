/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown in case that a certain method call is not allowed.
     * 
     * @author Christian Schaiter
     */
    export class InvalidOperationException extends Exception {

        /**
         * The name of the exception.
         */
        public name: string = "InvalidOperationException";

        /**
         * Constructs a new instance of the <code>InvalidOperationException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         * @param innerException The reason why the newly created exception occured.
         */
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
        constructor(message?: string, innerException?: Exception) {
            super(message, innerException);
        }
    }
}