/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    InterfaceRegistry.System.IImplements = "IImplements";

    /**
     * This interface provides meta information about all interfaces that are implemented by a class. Usually, any
     * interface that is intented to be registered in the global <code>InterfaceRegistry</code> should also extend
     * the <code>IImplements</code> interface.
     * 
     * @author Christian Schaiter
     * @see InterfaceRegistry
     */
    export interface IImplements {

        /**
         * Gets the names of all implemented interfaces.
         * @return An array containing the names of all implemented interfaces.
         */
        implementedInterfaces(): Array<string>;
    }
}