/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class representing a range with a lower and an upper bound.
     */
    export class Range {

        /**
         * Constructs a new range with the given lower and upper bounds.
         * @public
         * @constructor
         * @param {number} The lower bound of this range. May not be undefined or null.
         * @param {number} The upper bound of this range. May not be undefined or null. Must be greater than the given
         * lower bound.
         * @throws {ArgumentUndefinedException} If the {lowerBound} argument or the {upperBound} argument are undefined
         * or null.
         * @throws {ArgumentOutOfRangeException} If the upper bound is less than the lower bound.
         */
        constructor(private lowerBound: number, private upperBound: number) {
            Contract.isDefined(lowerBound, "Argument @lowerBound was undefined or null.");
            Contract.isDefined(upperBound, "Argument @upperBound was not defined");
            Contract.requires(lowerBound <= upperBound, ArgumentOutOfRangeException,
                "The lower bound must be less than the upper bound");
        }

        /**
         * Gets the interval between the lower und the upper bound.
         * @public
         * @return {boolean} The interval between lower and upper bound.
         */
        public getInterval(): number {
            return this.upperBound - this.lowerBound;
        }

        /**
         * Gets the lower bound of this range.
         * @public
         * @return {number} The lower bound.
         */
        public getLowerBound(): number {
            return this.lowerBound;
        }

        /**
         * Gets the upper bound of this range.
         * @public
         * @return {number} The upper bound.
         */
        public getUpperBound(): number {
            return this.upperBound;
        }

        /**
         * Checks whether or not the given value is within this range.
         * @public
         * @param {number} The number to test.
         * @return {boolean} true, if the given number is within this range, false otherwise.
         */
        public isInRange(value: number): boolean {
            return ObjectUtil.isDefined(value) && this.lowerBound <= value && this.upperBound >= value;
        }
    }
}