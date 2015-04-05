/// <reference path="../../reference.ts"/> 

module System.Diagnosis {
    "use strict";

    export class Contract {

        public static requires<TException extends Error>(condition: boolean, exceptionType: IErrorConstructor<TException>,
            message: string): void {
            if (!condition) {
                throw new exceptionType(message);
            }
        }

        public static isDefined(value: any, message: string): void {
            if (!ObjectUtil.isDefined(value)) {
                throw new ArgumentUndefinedException(message);
            }
        }

        public static isInRange(value: number, lowerBound: number, upperBound: number, message: string): void {
            Contract.isDefined(value, message);
            Contract.requires(new Range(lowerBound, upperBound).isInRange(value), ArgumentOutOfRangeException, message);
        }

        public static isNegative(value: number, message: string): void {
            Contract.isDefined(value, message);

            if (value >= 0) {
                throw new ArgumentOutOfRangeException(message);
            }
        }

        public static isPositive(value: number, message: string): void {
            Contract.isDefined(value, message);

            if (value < 0) {
                throw new ArgumentOutOfRangeException(message);
            }
        }
    }
}