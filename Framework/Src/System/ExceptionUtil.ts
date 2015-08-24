/// <reference path="../reference.ts"/>

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods to assist when dealing with exceptions.
     * 
     * @author Christian Schaiter
     */
    export class ExceptionUtil {

        /**
         * Gets a message describing that a parameter with the given name was illegally <code>undefined</code> or 
         * <code>null</code>. Use this method to get consistent error messages for method parameters being illegally 
         * <code>undefined</code> or <code>null</code>.
         * @param parameterName The name of the parameter being <code>undefined</code> or <code>null</code>. May not be
         * <code>undefined</code> or <code>null</code>.
         * @returns A consistent error message for <code>undefined</code> or <code>null</code> arguments.
         * @throws ArgumentUndefinedException If the <code>parameterName</code> argument itself is <code>undefined</code>
         * or <code>null</code>.
         */
        public static notDefinedMessage(parameterName: string) {
            Contract.isDefined(parameterName, "You must provide the name of the parameter being undefined or null.");

            return `Argument @${parameterName} was undefined or null.`;
        }
    }
}