/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods when dealing with strings.
     * 
     * @author Christian Schaiter
     */
    export class StringUtil {

        /**
         * The empty string.
         */
        public static emptyString: string = "";

        /**
         * Converts the placeholders of the format string with the string representation of the provided varargs values.
         * <p>
         * The placeholders of the format string take the form <code>{n}</code>, where <code>n</code> is a non-negative
         * integer number starting with 0, which denotes the position in the varargs value array. Please note that a number
         * greater than or equal to the number of values will cause a <code>FormatException</code>. Hence, the placeholders
         * <code>{0}, {1}, {2}</code> are valid if at least three values are provided when invoking the function.
         * 
         * @param format The format string containing the placeholders <code>{n}</code>. May not be <code>undefined</code>
         * or <code>null</code>. If a placeholder index is greater than or equal to the number of provided values, a
         * <code>FormatException</code> is thrown.
         * @param args The values whose string representation replace the placeholders in the format string. Must at least 
         * contain more elements than the greaterst placeholder index.
         * @returns The format string with all placeholders being replaced by its corresponding value.
         * @throws <code>ArgumentUndefinedException</code> If the <code>format</code> argument is <code>undefined</code> or
         * <code>null</code>.
         * @throws <code>FormatException</code> If a placeholder index greater than or equal to the number of given values in 
         * the varargs array.
         */
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