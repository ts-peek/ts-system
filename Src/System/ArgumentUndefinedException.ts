/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown in case that an argument to a method or function is ineligibly <code>undefined</code> or
     * <code>null</code>.
     * 
     * @author Christian Schaiter
     */
    export class ArgumentUndefinedException extends ArgumentException {

        /**
         * The name of the exception.
         */
        public name: string = "ArgumentUndefinedException";

        /**
         * Constructs a new instance of the <code>ArgumentUndefinedException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {
            super(message);
        }
    }
}