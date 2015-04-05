/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class ArgumentUndefinedException extends ArgumentException {

        public name: string = "ArgumentUndefinedException";

        constructor(public message?: string) {
            super(message);
        }
    }
}