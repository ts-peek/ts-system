/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods to assist when dealing with numbers.
     * 
     * @author Christian Schaiter
     */
    export class NumberUtil {

        public static base10: number = 10;

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 3 digits of their difference are all zero. If both values are <code>undefined</code> or <code>null</code>
         * they are also considered equal. However, if one value is <code>undefined</code> and the other value is 
         * <code>null</code>, this method returns <code>false</code>.
         * @param first The first number to compare.
         * @param second The second number to compare.
         * @returns <code>true</code>, if the the two numbers are equal (with respect to 3 decimal places); <code>false</code> 
         * otherwise.
         */
        public static equals3DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 3);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 6 digits of their difference are all zero. If both values are <code>undefined</code> or <code>null</code>
         * they are also considered equal. However, if one value is <code>undefined</code> and the other value is 
         * <code>null</code>, this method returns <code>false</code>.
         * @param first The first number to compare.
         * @param second The second number to compare.
         * @returns <code>true</code>, if the two numbers are equal (with respect to 6 decimal places); <code>false</code>
         * otherwise.
         */
        public static equals6DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 6);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first 3 digits of their difference are all zero. If both values are <code>undefined</code> or <code>null</code>
         * they are also considered equal. However, if one value is <code>undefined</code> and the other value is 
         * <code>null</code>, this method returns <code>false</code>.
         * @param first The first number to compare.
         * @param second The second number to compare.
         * @returns <code>true</code>, if the two numbers are equal (with respect to 9 decimal places), <code>false</code>
         * otherwise.
         */
        public static equals9DigitsPrecision(first: number, second: number): boolean {
            return NumberUtil.equalsNDigitsPrecision(first, second, 9);
        }

        /** 
         * Gets whether the first number equals the second number. The two values are being considered equal if the
         * first n digits of their difference are all zero. If both values are <code>undefined</code> or <code>null</code>
         * they are also considered equal. However, if one value is <code>undefined</code> and the other value is 
         * <code>null</code>, this method returns <code>false</code>.
         * @param first The first number to compare.
         * @param second The second number to compare.
         * @param precisionDigits The number of decimal digits that must be zero in the absolute difference 
         * |{first} - {second}| in order to be considered equal. If <code>precisionDigits</code> is zero, the two values must 
         * match exactly to be treated equal. Must be non-negative. Defaults to 10.
         * @returns <code>true</code>, if the the two numbers are equal (with respect to the given <code>precisionDigits</code> 
         * argument); <code>false</code> otherwise.
         * @throws <code>ArgumentOutOfRangeException</code> If the <code>precisionDigits</code> argument is negative.
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
         * @param value The value being checked.
         * @returns <code>true</code> if the given value may be parsed as a number; <code>false</code> otherwise.
         */
        public static isParsableAsNumber(value: string): boolean {
            return ObjectUtil.isNumber(parseInt(value, NumberUtil.base10));
        }

        /**
         * Gets the integer part of the given number.
         * @param value The number being transformed to an integer value. May not be <code>undefined</code> or <code>null</code>
         * @returns The integer part of the number.
         */
        public static toInt(value: number) {
            Contract.isDefined(value, ExceptionUtil.notDefinedMessage("value"));

            return value | 0;
        }
    }
}