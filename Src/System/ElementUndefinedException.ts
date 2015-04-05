/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class ElementUndefinedException extends ArgumentException {

        public name: string = "ElementUndefinedException";

        constructor(public message?: string) {
            super(message);
        }
    }
}