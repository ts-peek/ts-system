/// <reference path="../reference.ts"/>

module System {
    "use strict";

    /**
     * Class providing utility methods to assist when dealing with exceptions.
     */
    export class ExceptionUtil {

        public static notDefinedMessage(parameterName: string) {
            return "Argument @" + parameterName + " was undefined or null";
        }
    }
}