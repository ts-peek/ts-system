﻿/// <reference path="../reference.ts"/>

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing means to implement the {Object.equals} method in a concise and consistent way.
     * This class is consistend with the {HashCodeBuilder} class, so that equal objects are guaranteed to return the 
     * same hash code value.
     */
    export class EqualsBuilder {

        private equal: boolean = true;

        /**
         * Tests if two values are equal, considering the special behavior of the values's type.
         * @public
         * @param {any} The first value to compare.
         * @param {any} The second value to compare.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public append(first: any, second: any): EqualsBuilder {
            if (!this.equal) {
                return this;
            }

            this.equal = ObjectUtil.areEqual(first, second);
            return this;
        }

        /**
         * Adds the result of {super.equals(object)} to this builder.
         * @public
         * @param {boolean} The result when calling {super.equals(object)}.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public appendBase(baseEquals: boolean): EqualsBuilder {
            if (!this.equal) {
                return this;
            }

            if (!baseEquals) {
                baseEquals = false;
            }

            this.equal = baseEquals;
            return this;
        }

        /**
         * Tests if two boolean values are equal.
         * @public
         * @param {boolean} The first boolean value to compare.
         * @param {boolean} The second boolean value to compare.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public appendBoolean(first: boolean, second: boolean): EqualsBuilder {
            if (!this.equal) {
                return this;
            }

            this.equal = first === second;
            return this;
        }

        /**
         * Tests if two numbers are equal, optionally using a the number of precision digits.
         * This method is compatible with the hash code generated by {HashCodeBuilder} when being invoked with the same
         * value for {precisionDigits}.
         * @public
         * @param {number} The first number to compare.
         * @param {number} The second number to compare.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         * @throws {ArgumentOutOfRangeException} If the {precisionDigits} argument is negative.
         */
        public appendNumber(first: number, second: number, precisionDigits: number = 0): EqualsBuilder {
            Contract.isInRange(precisionDigits, 0, Number.POSITIVE_INFINITY,
                "Argument @precisionDigits must not be negative.");

            if (!this.equal) {
                return this;
            }

            this.equal = NumberUtil.equalsNDigitsPrecision(first, second, precisionDigits);
            return this;
        }

        /**
         * Tests if two objects are equal.
         * @public
         * @param {Object} The first object to compare.
         * @param {Object} The second object to compare.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public appendObject(first: Object, second: Object): EqualsBuilder {
            if (!this.equal) {
                return this;
            }

            this.equal = ObjectUtil.areEqual(first, second);
            return this;
        }

        /**
         * Tests if two strings are equal in a strict manner, i.e. undefined, null and empty string values are
         * considered NOT equal.
         * @public
         * @param {string} The first string to compare.
         * @param {string} The second string to compare.
         * @param {StringComparison} The strategy to use when comparing the two strings. If this parameter is not
         * provided, {StringComparison.Ordinal} will be used.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public appendString(first: string, second: string, strategy: StringComparison = StringComparison.ORDINAL): EqualsBuilder {
            if (!this.equal) {
                return this;
            } else if (!ObjectUtil.isDefined(first) || !ObjectUtil.isDefined(second)) {
                this.equal = first === second;
                return this;
            }

            return this.appendStringRelaxed(first, second, strategy);
        }

        /**
         * Tests if two strings are equal in a relaxed manner, i.e. undefined, null and empty string values are
         * considered equal.
         * @public
         * @param {string} The first string to compare.
         * @param {string} The second string to compare.
         * @param {StringComparison} The strategy to use when comparing the two strings. If this parameter is not
         * provided, {StringComparison.Ordinal} will be used.
         * @return {EqualsBuilder} This {EqualsBuilder} instance, which may be used for chaining.
         */
        public appendStringRelaxed(first: string, second: string, strategy: StringComparison = StringComparison.ORDINAL): EqualsBuilder {
            if (!this.equal) {
                return this;
            } else if (!first && !second) {
                // if both strings are falsy values (undefined, null, empty string), they are considered equal
                this.equal = true;
                return this;
            }

            this.equal = strategy === StringComparison.IGNORE_CASE
                ? first.toUpperCase() === second.toUpperCase()
                : first === second;

            return this;
        }

        /**
         * Gets whether or not all tested objects are equal.
         * @public
         * @return {boolean} true if all tested objects are equal, false otherwise.
         */
        public isEqual(): boolean {
            return this.equal;
        }
    }
}