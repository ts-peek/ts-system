/// <reference path="../reference.ts" />

module System {
    "use strict";

    export class ArgumentException implements Error {

        public name: string = "ArgumentException";

        constructor(public message?: string) {}
    }
}