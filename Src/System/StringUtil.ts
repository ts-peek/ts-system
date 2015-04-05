/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    export class StringUtil {

        public static format(format: string, ...args: any[]) {
            Contract.isDefined(format, ExceptionUtil.notDefinedMessage("format"));

            return format.replace(/{(\d+)}/g, (match: string, index: string) => {
                Contract.requires(NumberUtil.isParsableAsNumber(index), FormatException,
                    "Illegal format item given '" + index + "'");

                var numIndex: number = parseInt(index, NumberUtil.base10);
                return ObjectUtil.isDefined(args[numIndex]) ? args[numIndex] : match;
            });
        }
    }
}