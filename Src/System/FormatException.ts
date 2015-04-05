/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class FormatException implements Error {

        public name: string = "FormatException";

        constructor(public message?: string) {}
    }
}