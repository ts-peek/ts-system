/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    InterfaceRegistry.System.IInstantiable = "IInstantiable";

    /**
     * Interface representing instantiable types, which may be used as static types for constructor functions. For
     * instance, when requiring the type of the <code>Range</code> class, one may write:
     * <p>
     * <code>var type: IInstantiable = Range;</code>
     * <p>
     * 
     * @author Christian Schaiter
     */
    export interface IInstantiable {
        new(...args: any[]): Object;
    }
}