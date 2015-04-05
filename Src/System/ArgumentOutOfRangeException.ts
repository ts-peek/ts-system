/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class ArgumentOutOfRangeException extends ArgumentException {

        public name: string = "ArgumentOutOfRangeException";

        constructor(public message?: string) {
            super(message);
        }
    }
}