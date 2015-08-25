declare module System {
    var InterfaceRegistry: any;
}
declare module System {
}
declare module System.Diagnosis {
}
declare module System {
    class Error {
        name: string;
        message: string;
        constructor(message?: string);
    }
}
declare module System {
    interface IAction0 {
        (): void;
    }
    interface IAction1<TParam> {
        (param: TParam): void;
    }
    interface IAction2<TParam1, TParam2> {
        (param1: TParam1, param2: TParam2): void;
    }
    interface IAction3<TParam1, TParam2, TParam3> {
        (param1: TParam1, param2: TParam2, param3: TParam3): void;
    }
    interface IAction4<TParam1, TParam2, TParam3, TParam4> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4): void;
    }
    interface IAction5<TParam1, TParam2, TParam3, TParam4, TParam5> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5): void;
    }
    interface IAction6<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6): void;
    }
    interface IAction7<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6, param7: TParam7): void;
    }
    interface IAction8<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TParam8> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6, param7: TParam7, param8: TParam8): void;
    }
}
declare module System {
    interface IComparable<T> {
        compareTo(other: T): number;
    }
}
declare module System {
    interface IEquatable<T> {
        equals?(other: T): boolean;
        hashCode?(): number;
    }
}
declare module System {
    interface IInstantiableException<T extends Exception> {
        new (message: string): T;
    }
}
declare module System {
    interface IFunc0<TResult> {
        (): TResult;
    }
    interface IFunc1<TParam, TResult> {
        (param: TParam): TResult;
    }
    interface IFunc2<TParam1, TParam2, TResult> {
        (param1: TParam1, param2: TParam2): TResult;
    }
    interface IFunc3<TParam1, TParam2, TParam3, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3): TResult;
    }
    interface IFunc4<TParam1, TParam2, TParam3, TParam4, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4): TResult;
    }
    interface IFunc5<TParam1, TParam2, TParam3, TParam4, TParam5, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5): TResult;
    }
    interface IFunc6<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6): TResult;
    }
    interface IFunc7<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6, param7: TParam7): TResult;
    }
    interface IFunc8<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TParam8, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6, param7: TParam7, param8: TParam8): TResult;
    }
}
declare module System {
    interface IImplements {
        implementedInterfaces(): Array<string>;
    }
}
declare module System {
    interface IInstantiable {
        new (...args: any[]): Object;
    }
}
declare module System {
    const enum StringComparison {
        ORDINAL = 0,
        IGNORE_CASE = 1,
    }
}
interface Object extends System.IEquatable<Object> {
}
interface Array<T> {
}
interface String extends System.IEquatable<string>, System.IComparable<string> {
    value(): string;
    equals(other: string): boolean;
}
interface Number extends System.IEquatable<Number>, System.IComparable<Number> {
    value(): number;
}
interface Boolean extends System.IEquatable<Boolean>, System.IComparable<Boolean> {
    value(): boolean;
}
declare module System.Diagnosis {
    class Contract {
        static requires<TException extends Exception>(condition: boolean, exceptionType: IInstantiableException<TException>, message: string): void;
        static isDefined(value: any, message: string): void;
        static isInRange(value: number, lowerBound: number, upperBound: number, message: string): void;
        static isNegative(value: number, message: string): void;
        static isPositive(value: number, message: string): void;
    }
}
declare module System {
    class ExceptionUtil {
        static notDefinedMessage(parameterName: string): string;
    }
}
declare module System {
    class ObjectUtil {
        static areEqual<T>(lhs: any, rhs: any): boolean;
        static createObject(prototype: Object): Object;
        static implements(obj: any, interfaceName: string): boolean;
        static isArray(value: any): boolean;
        static isBoolean(value: any): boolean;
        static isDefined(value: any): boolean;
        static isFunction(value: any): boolean;
        static isNumber(value: any): boolean;
        static isObject(value: any): boolean;
        static isSimpleType(value: any): boolean;
        static isString(value: any): boolean;
        static isUndefined(value: any): boolean;
    }
}
declare module System {
    class NumberUtil {
        static base10: number;
        static equals3DigitsPrecision(first: number, second: number): boolean;
        static equals6DigitsPrecision(first: number, second: number): boolean;
        static equals9DigitsPrecision(first: number, second: number): boolean;
        static equalsNDigitsPrecision(first: number, second: number, precisionDigits?: number): boolean;
        static isParsableAsNumber(value: string): boolean;
        static parseNumber(value: string): number;
        static toInt(value: number): number;
    }
}
declare module System {
    class StringUtil {
        static EMPTY_STRING: string;
        static format(format: string, ...args: any[]): string;
    }
}
declare module System {
    class Exception extends Error {
        private static defaultMessage;
        name: string;
        message: string;
        innerException: Exception;
        private stackTrace;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
        toString(): string;
        private createExceptionInfo(exception, infoString);
    }
}
declare module System {
    class ArgumentOutOfRangeException extends ArgumentException {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
declare module System {
    class ArgumentUndefinedException extends ArgumentException {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
declare module System {
    class ElementUndefinedException extends ArgumentException {
        message: string;
        name: string;
        constructor(message?: string);
    }
}
declare module System {
    class FormatException extends Exception {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
declare module System {
    class InvalidOperationException extends Exception {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
declare module System {
    class NotImplementedException extends Exception {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
declare module System {
    class EqualsBuilder {
        private equal;
        append(first: any, second: any): EqualsBuilder;
        appendBase(baseEquals: boolean): EqualsBuilder;
        appendBoolean(first: boolean, second: boolean): EqualsBuilder;
        appendNumber(first: number, second: number, precisionDigits?: number): EqualsBuilder;
        appendObject(first: Object, second: Object): EqualsBuilder;
        appendString(first: string, second: string, strategy?: StringComparison): EqualsBuilder;
        appendStringRelaxed(first: string, second: string, strategy?: StringComparison): EqualsBuilder;
        isEqual(): boolean;
    }
}
declare module System {
    class HashCodeBuilder {
        private constant;
        private total;
        constructor();
        append(value: any): HashCodeBuilder;
        appendBase(baseHashCode: number): HashCodeBuilder;
        appendBoolean(value: boolean): HashCodeBuilder;
        appendNumber(value: number, precisionDigits?: number): HashCodeBuilder;
        appendObject(value: Object): HashCodeBuilder;
        appendString(value: string, strategy?: StringComparison): HashCodeBuilder;
        getHashCode(): number;
    }
}
declare module System {
    class Range {
        private lowerBound;
        private upperBound;
        constructor(lowerBound: number, upperBound: number);
        getInterval(): number;
        getLowerBound(): number;
        getUpperBound(): number;
        isInRange(value: number): boolean;
    }
}
declare module System {
    class ArgumentException extends Exception {
        name: string;
        constructor(message?: string);
        constructor(message: string, innerException: Exception);
    }
}
