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
        public static EMPTY_STRING: string = "";

        /**
         * Replaces the placeholders of the format string with the string representation of the provided varargs values.
         * <p>
         * The placeholders of the format string take the form <code>{n}</code>, where <code>n</code> is a non-negative
         * integer number starting with 0, which denotes the position in the varargs value array. If the value for 
         * <code>n</code> is not a number, it will not get replaced but left unmodified instead. The same is true for
         * negative placeholder numbers. Hence, a placeholder will only get substituted if there is a matching index in
         * the varargs array.
         * 
         * @param format The format string containing the placeholders <code>{n}</code>. May not be <code>undefined</code>
         * or <code>null</code>.
         * @param args The values whose string representation substitute the placeholders in the format string at the.
         * @returns The format string with all placeholders being replaced by its corresponding values.
         * @throws <code>ArgumentUndefinedException</code> If the <code>format</code> argument is <code>undefined</code> or
         * <code>null</code>.
         */
        public static format(format: string, ...args: any[]) {
            Contract.isDefined(format, ExceptionUtil.notDefinedMessage("format"));

            return format.replace(/{(\d+)}/g, (match: string, index: string) => {
                var numIndex: number = NumberUtil.toInt(NumberUtil.parseNumber(index));
                return ObjectUtil.isDefined(args[numIndex]) ? args[numIndex] : match;
            });
        }
    }
}