/// <reference path="../reference.ts"/>

module System {
    "use strict";

    export declare class Error {

        public name: string;

        public message: string;

        constructor(message?: string);
    }
}

System.Error = Error;