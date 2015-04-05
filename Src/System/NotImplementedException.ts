/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    export class NotImplementedException implements Error {

        public name: string = "NotImplementedException";

        constructor(public message?: string) {}
    }
}