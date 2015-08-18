﻿/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown in case that a method is not (yet) implemented.
     * 
     * @author Christian Schaiter
     */
    export class NotImplementedException extends Exception {

        /**
         * The name of the exception.
         */
        public name: string = "NotImplementedException";

        /**
         * Constructs a new instance of the <code>NotImplementedException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {
            super(message);
        }
    }
}