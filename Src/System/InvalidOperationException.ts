/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class InvalidOperationException implements Error {

        public name: string = "InvalidOperationException";

        constructor(public message?: string) {}
    }
}