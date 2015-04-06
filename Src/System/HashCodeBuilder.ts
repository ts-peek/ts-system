/// <reference path="../reference.ts"/>

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing means to implement the <code>Object::hashCode</code> method in a concise and consistent way.
     * This class is consistent with the <code>HashCodeBuilder</code> class, so that equal objects are guaranteed to 
     * return the same hash code value.
     * 
     * @author Christian Schaiter
     * @see EqualsBuilder
     */
    export class HashCodeBuilder {

        private constant: number;

        private total: number;

        /**
         * Contructs a new <code>HashCodeBuilder</code> instance, using a given initial value and a multiplier. Both 
         * numbers must be randomly chosen, non-zero and odd. Prime numbers are preferred, especially for the multiplier.
         * @param initialValue The initial value for the hash code. May not be zero nor even.
         * @param multiplier The multiplier used when appeding new hash codes. May not be zero nor even.
         * @throws ArgumentException If the <code>intialValue</code> argument or the <code>multiplier</code> argument 
         * are zero or even.
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
         * Appends a hash code for the given value, considering the special behavior of the values's type.
         * @param value The value that contributes to the final hash code.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
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
         * Adds the result of <code>super.hashCode()</code> to this builder.
         * @param baseHashCode The result when calling {super.hashCode()}.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
         */
        public appendBase(baseHashCode: number): HashCodeBuilder {
            return this.appendNumber(baseHashCode);
        }

        /**
         * Appends a hash code for the given boolean value.
         * @param value The boolean value that contributes to the final hash code.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
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
         * @param value The number that contributes to the final hash code.
         * @param precisionDigits The number of decimal digits that must be zero in the absolute difference between two 
         * numbers in order to be considered as equal. This parameter should be used in accordance with the precision
         * value used when calling the <code>EqualsBuilder::append(number,number,number)</code> method of the 
         * <code>EqualsBuilder</code> class. Must be non-negative. Defaults to 0.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
         * @throws ArgumentOutOfRangeException If the <code>precisionDigits</code> argument is negative.
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

            var intValue: number = Math.round(value * Math.pow(NumberUtil.base10, precisionDigits - 1)) | 0;
            this.total = this.total * this.constant + intValue;
            return this;
        }

        /**
         * Appends a hash code for the given object.
         * @param value The object that contributes to the final hash code.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
         */
        public appendObject(value: Object): HashCodeBuilder {
            if (!ObjectUtil.isDefined(value)) {
                return this;
            }

            return this.appendNumber(value.hashCode());
        }

        /**
         * Appends a hash code for the given string.
         * @param value The string that contributes to the final hash code.
         * @param strategy The strategy to use when building the hash code. If this parameter is not provided,
         * {StringComparison::ORDINAL} will be used.
         * @return This <code>HashCodeBuilder</code> instance, which may be used for chaining.
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
         * @return The constructed hash code value.
         */
        public getHashCode(): number {
            return this.total;
        }
    }
}