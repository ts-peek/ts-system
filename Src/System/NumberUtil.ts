/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods to assist when dealing with numbers.
     */
    export class NumberUtil {

        public static base10: number = 10;

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 3 digits of their difference are all zero.
         * @param {number} The first number to compare.
         * @param {number} The second number to compare.
         * @return true, if the the two numbers are equal (with respect to 3 decimal places), false otherwise.
         */
        public static equals3DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 3);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 6 digits of their difference are all zero.
         * @param {number} The first number to compare.
         * @param {number} The second number to compare.
         * @return true, if the two numbers are equal (with respect to 6 decimal places), false otherwise
         */
        public static equals6DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 6);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 3 digits of their difference are all zero.
         * @param {number} The first number to compare.
         * @param {number} The second number to compare.
         * @return true, if the two numbers are equal (with respect to 9 decimal places), false otherwise.
         */
        public static equals9DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 9);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first n digits of their difference are all zero.
         * @param {number} The first number to compare.
         * @param {number} The second number to compare.
         * @param precisionDigits {number} The number of decimal digits that must be zero in the absolute difference 
         * |{first} - {second}| in order to be considered equal. If {precisionDigits} is zero, the two values must 
         * match exactly to be treated equal. Must be non-negative. Defaults to 10.
         * @return true, if the the two numbers are equal (with respect to the given {precisionDigits} argument), false
         * otherwise.
         * @throws {ArgumentOutOfRangeException} If the {precisionDigits} argument is negative.
         */
        public static equalsNDigitsPrecision(first: number, second: number, precisionDigits: number = 10): boolean {
            Contract.isInRange(precisionDigits, 0, Number.POSITIVE_INFINITY,
                "Argument @precisionDigits must not be negative.");

            if (!ObjectUtil.isDefined(first) || !ObjectUtil.isDefined(second) || precisionDigits === 0) {
                // if one of the values is not defined (i.e. undefined or null), they are only equal if both are either
                // undefined or null
                return first === second;
            } else {
                return Math.abs(first - second) < (1 / Math.pow(NumberUtil.base10, precisionDigits));
            }
        }

        /**
         * Checks whether or not the given value is parsable as a number.
         * @public
         * @param {string} value The value being checked.
         * @return {boolean} true if the given value may be parsed as a number, false otherwise.
         */
        public static isParsableAsNumber(value: string): boolean {
            return ObjectUtil.isNumber(parseInt(value, NumberUtil.base10));
        }

        public static toInt(value: number) {
            Contract.isDefined(value, ExceptionUtil.notDefinedMessage("value"));

            return value | 0;
        }
    }
}