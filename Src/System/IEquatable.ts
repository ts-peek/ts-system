/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export interface IEquatable<T> {

        equals(other: T): boolean;

        hashCode(): number;
    }
}