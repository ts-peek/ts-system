/// <reference path="../reference.ts"/>

module System {
    "use strict";

    export interface IComparable<T> {

        compareTo(other: T): number;
    }
}