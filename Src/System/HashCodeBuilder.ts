/// <reference path="../reference.ts"/>

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing means to implement the {Object.equals} method in a concise and consistent way.
     * This class is consistent with the {HashCodeBuilder} class, so that equal objects are guaranteed to return the 
     * same hash code value.
     */
    export class HashCodeBuilder {

        private static base10: number = 10;

        private constant: number;

        private total: number;

        /**
         * Contructs a new {HashCodeBuilder} instance, using a given initial value and a multiplier. Both numbers must
         * be randomly chosen, non-zero and odd. Prime numbers are preferred, especially for the multiplier.
         * @constructor
         * @public
         * @param {number} The initial value for the hash code. May not be zero nor even.
         * @param {number} The multiplier used when appeding new hash codes. May not be zero nor even.
         * @throws {ArgumentException} If the {intialValue} argument or the {multiplier} argument are zero or even.
         */
        constructor();
        constructor(initialValue?: number, multiplier?: number) {
            if (!ObjectUtil.isDefined(initialValue)) {
                initialValue = 17;
            }

            if (!ObjectUtil.isDefined(multiplier)) {
                multiplier = 37;
            }

            Contract.requires(initialValue !== 0, ArgumentException, "Argument @initialValue must not be zero.");
            Contract.requires(initialValue % 2 === 1, ArgumentException, "Argument @initialValue must not be even.");
            Contract.requires(multiplier !== 0, ArgumentException, "Argument @multiplier must not be zero.");
            Contract.requires(multiplier % 2 === 1, ArgumentException, "Argument @multiplier must not be even.");

            this.total = initialValue;
            this.constant = multiplier;
        }

        /**
         * Tests if two values are equal, considering the special behavior of the values's type.
         * @public
         * @param {any} The value that contributes to the final hash code.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         */
        public append(value: any): HashCodeBuilder {
            if (ObjectUtil.isBoolean(value)) {
                return this.appendBoolean(value);
            } else if (ObjectUtil.isNumber(value) || isNaN(value)) {
                return this.appendNumber(value);
            } else if (ObjectUtil.isString(value)) {
                return this.appendString(value);
            } else {
                return this.appendObject(value);
            }
        }

        /**
         * Adds the result of {super.hashCode(object)} to this builder.
         * @public
         * @param {number} The result when calling {super.hashCode(object)}.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         */
        public appendBase(baseHashCode: number): HashCodeBuilder {
            return this.appendNumber(baseHashCode);
        }

        /**
         * Appends a hash code for the given boolean value.
         * @public
         * @param {boolean} The boolean value that contributes to the final hash code.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         */
        public appendBoolean(value: boolean): HashCodeBuilder {
            if (!ObjectUtil.isDefined(value)) {
                return this;
            }

            this.total = this.total * this.constant + (value ? 0 : 1);
            return this;
        }

        /**
         * Appends a hash code for the given number.
         * @public
         * @param {number} The number that contributes to the final hash code.
         * @param {number} The number of decimal digits that must be zero in the absolute difference between two 
         * numbers in order to be considered as equal. This parameter should be used in accordance with the precision
         * value used when calling the {EqualsBuilder.Append(number,number,number)} method of the. Must be 
         * non-negative. Defaults to 0.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         * @throws {ArgumentOutOfRangeException} If the {precisionDigits} argument is negative.
         */
        public appendNumber(value: number, precisionDigits: number = 0): HashCodeBuilder {
            Contract.isInRange(precisionDigits, 0, Number.POSITIVE_INFINITY,
                "Argument @precisionDigits must not be negative.");

            if (!ObjectUtil.isDefined(value) || isNaN(value)) {
                return this;
            }

            if (precisionDigits === 0) {
                precisionDigits = 1;
            }

            var intValue: number = Math.round(value * Math.pow(HashCodeBuilder.base10, precisionDigits - 1)) | 0;
            this.total = this.total * this.constant + intValue;
            return this;
        }

        /**
         * Appends a hash code for the given object.
         * @public
         * @param {Object} The object that contributes to the final hash code.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         */
        public appendObject(value: Object): HashCodeBuilder {
            if (!ObjectUtil.isDefined(value)) {
                return this;
            }

            return this.appendNumber(value.hashCode());
        }

        /**
         * Appends a hash code for the given string.
         * @public
         * @param {string} The string that contributes to the final hash code.
         * @param {StringComparison} The strategy to use when building the hash code. If this parameter is not provided,
         * {StringComparison.Ordinal} will be used.
         * @return {HashCodeBuilder} This {HashCodeBuilder} instance, which may be used for chaining.
         */
        public appendString(value: string, strategy: StringComparison = StringComparison.ORDINAL): HashCodeBuilder {
            if (!ObjectUtil.isDefined(value)) {
                return this;
            }

            var length: number = value.length;
            value = strategy === StringComparison.IGNORE_CASE ? value.toUpperCase() : value;

            for (var i: number = 0; i < length; i++) {
                this.appendNumber(value.charCodeAt(i));
            }

            return this;
        }

        /**
         * Gets the constructed hash code.
         * @public
         * @return The constructed hash code value.
         */
        public getHashCode(): number {
            return this.total;
        }
    }
}