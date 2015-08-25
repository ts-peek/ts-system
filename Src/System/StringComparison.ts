/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Enumeration providing the case rules for comparing strings.
     */
    export const enum StringComparison {
        /**
         * Compare strings by taking the exact string values.
         */
        ORDINAL,

        /**
         * Compare strings by ignoring case information.
         */
        IGNORE_CASE
    }
}