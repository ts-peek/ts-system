/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown in case that one element of a collection-valued argument is ineligibly <code>undefined</code>
     * or <code>null</code>.
     * 
     * @author Christian Schaiter
     */
    export class ElementUndefinedException extends ArgumentException {

        /**
         * The name of the exception.
         */
        public name: string = "ElementUndefinedException";

        /**
         * Constructs a new instance of the <code>ElementUndefinedException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {
            super(message);
        }
    }
}