/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Exception being thrown when the format of an argument is invalid, or when a composite format string is not well 
     * formed.
     * <p>
     * A composite format string takes the form of <i>{x}</i>, where <i>x</i> denotes the numeric position of the argument
     * within the enclosing string.
     * <p>
     * <strong>Example:</strong><br>
     * <code>StringUtil.format("The {0} barks {1} times in the {2}.", "dog", 3, "kitchen");</code>
     * 
     * @see StringUtil
     */
    export class FormatException extends Exception {

        /**
         * The name of the exception.
         */
        public name: string = "FormatException";

        /**
         * Constructs a new instance of the <code>FormatException</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(public message?: string) {
            super(message);
        }
    }
}