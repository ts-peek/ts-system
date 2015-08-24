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
         * match exactly to be treated equal. Must be non-negative and less than or equal to 20. Defaults to 10.
         * @returns <code>true</code>, if the the two numbers are equal (with respect to the given <code>precisionDigits</code> 
         * argument); <code>false</code> otherwise.
         * @throws <code>ArgumentOutOfRangeException</code> If the <code>precisionDigits</code> argument is negative.
         */
        public static equalsNDigitsPrecision(first: number, second: number, precisionDigits: number = 10): boolean {
            Contract.isDefined(precisionDigits, ExceptionUtil.notDefinedMessage("precisionDigits"));
            Contract.isInRange(precisionDigits, 0, 20,
                `Argument @precisionDigits must not be negative and not greater than 20, but was${precisionDigits}.`);

            if (!ObjectUtil.isDefined(first) || !ObjectUtil.isDefined(second) || precisionDigits === 0) {
                // if one of the values is not defined (i.e. undefined or null), they are only equal if both are either
                // undefined or null
                return first === second;
            } else {
                var precision: number = Math.pow(NumberUtil.base10, NumberUtil.toInt(precisionDigits));
                return Math.abs(first * precision - second * precision) / precision < (1 / precision);
            }
        }

        /**
         * Checks whether or not the given value is parsable as a number. This method is more restrictive than the <code>parseInt</code>
         * method provided by the JavaScript language itself. Following values cause the method to return false:
         * <p>
         * <code>
         * NumberUtil.isParsableAsNumber(undefined);
         * NumberUtil.isParsableAsNumber(null);
         * NumberUtil.isParsableAsNumber("NaN");
         * NumberUtil.isParsableAsNumber("123Test");
         * NumberUtil.isParsableAsNumber("123,456");
         * </code>
         * <p>
         * The method does not consider any cultural differences of number representations; it uses the english format without any
         * group separators. It supports the scientific notation, i.e <code>1.23456E3</code> is considered a parsable number.
         * @see NumberUtil.parseNumber
         * 
         * @param value The value being checked.
         * @returns <code>true</code> if the given value may be parsed as a number; <code>false</code> otherwise.
         */
        public static isParsableAsNumber(value: string): boolean {
            return value !== null && ObjectUtil.isNumber(parseFloat(new Number(value).toString()));
        }

        /**
         * Parses the given string value as a number. This method is more restrictive than the <code>parseInt</code> method provided by the
         * JavaScript language itself. The provided value may be parsed to a number iff the <code>NumberUtil.isParsableNumber</code> method
         * returns <code>true</code>.
         * @see NumberUtil.isParsableAsNumber
         * 
         * @param value The value being parsed. Must represent a valid number as string.
         * @returns The parsed number.
         * @throws <code>FormatException</code> If the <code>value</code> cannot be parsed to a number due to a invalid number representation.
         */
        public static parseNumber(value: string): number {
            Contract.requires(NumberUtil.isParsableAsNumber(value), FormatException, "The provided value may not be parsed as a number.");

            return parseFloat(new Number(value).toString());
        }

        /**
         * Gets the integer part of the given number. If the number is <code>NaN</code>, this method returns 0.
         * @param value The number being transformed to an integer value. May not be <code>undefined</code> or <code>null</code>
         * @returns The integer part of the number.
         */
        public static toInt(value: number) {
            Contract.isDefined(value, ExceptionUtil.notDefinedMessage("value"));

            return value | 0;
        }
    }
}