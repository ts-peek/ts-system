/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown in case that the value of an argument to a method or function is outside the permitted
     * range of values, as defined by the invoked method.
     * 
     * @author Christian Schaiter
     */
    export class ArgumentOutOfRangeException extends ArgumentException {

        /**
         * The name of the exception.
         */
        public name: string = "ArgumentOutOfRangeException";

        /**
         * Constructs a new instance of the <code>ArgumentOutOfRangeException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {
            super(message);
        }
    }
}