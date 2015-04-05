/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export interface IInstantiable {
        new (...args: any[]): Object;
    }
}