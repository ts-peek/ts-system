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
         * @param lowerBound The lower bound of this range. May not be undefined or null.
         * @param upperBound The upper bound of this range. May not be undefined or null. Must be greater than the given
         * lower bound.
         * @throws <code>ArgumentUndefinedException</code> If the <code>lowerBound</code> argument or the <code>upperBound</code> 
         * argument are <code>undefined</code> or <code>null</code>.
         * @throws <code>ArgumentOutOfRangeException</code> If the upper bound is less than the lower bound.
         */
        constructor(private lowerBound: number, private upperBound: number) {
            Contract.isDefined(lowerBound, "Argument @lowerBound was undefined or null.");
            Contract.isDefined(upperBound, "Argument @upperBound was not defined");
            Contract.requires(lowerBound <= upperBound, ArgumentOutOfRangeException,
                "The lower bound must be less than the upper bound");
        }

        /**
         * Gets the interval between the lower und the upper bound.
         * @returns The interval between lower and upper bound.
         */
        public getInterval(): number {
            return this.upperBound - this.lowerBound;
        }

        /**
         * Gets the lower bound of this range.
         * @returns The lower bound.
         */
        public getLowerBound(): number {
            return this.lowerBound;
        }

        /**
         * Gets the upper bound of this range.
         * @returns The upper bound.
         */
        public getUpperBound(): number {
            return this.upperBound;
        }

        /**
         * Checks whether or not the given value is within this range.
         * @param value The number to test.
         * @return <code>true</code>, if the given number is within this range; <code>false</code> otherwise.
         */
        public isInRange(value: number): boolean {
            return ObjectUtil.isDefined(value) && this.lowerBound <= value && this.upperBound >= value;
        }
    }
}