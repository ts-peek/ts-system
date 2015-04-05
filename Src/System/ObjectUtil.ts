/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods when dealing with objects or when more information about a value is required.
     */
    export class ObjectUtil {

        public static interfaceNameFormat: string = ":{0}";

        public static areEqual<T>(lhs: any, rhs: any): boolean {
            if (lhs === rhs) {
                // if both values are equal, we simply return true. This implies that if the values are of type 
                // 'boolean', 'number' or 'string' (i.e. a simple type), or both are null or undefined, they are 
                // checked here. Hence, if they are not equal, the check falls through and this method returns 
                // (correctly) false.
                return true;
            } else if (ObjectUtil.isDefined(lhs) && ObjectUtil.isFunction(lhs.equals)) {
                // if the first value (lhs) is of type IEquatable<T>, use its equals() method to check for equality
                return lhs.equals(rhs);
            } else if (ObjectUtil.isDefined(rhs) && ObjectUtil.isFunction(rhs.equals)) {
                // if the first value (lhs) is of type IEquatable<T>, use its equals() method to check for equality
                return rhs.equals(lhs);
            } else {
                return false;
            }
        }

        public static createObject(prototype: Object): Object {
            Contract.isDefined(prototype, ExceptionUtil.notDefinedMessage("prototype"));

            if (ObjectUtil.isDefined(Object.create)) {
                // If Object.create() is defined (EcmaScript 5), we use this function to create the new object with the
                // given prototype
                return Object.create(prototype);
            }

            var f: any = () => {}; // Define a dummy constructor function.
            f.prototype = prototype;

            return new f(); // Use f() to create an "heir" of p.
        }

        public static implements(obj: any, interfaceName: string): boolean {
            obj = <IImplements> obj;
            return ObjectUtil.isDefined(obj) && ObjectUtil.isDefined(obj.implements)
                && obj.implements().indexOf(interfaceName) >= 0;
        }

        public static isArray(value: any): boolean {
            return ObjectUtil.isDefined(Array.isArray)
                ? Array.isArray(value)
                : typeof value === "object" && Object.prototype.toString.call(value) === "[object Array]";
        }

        public static isBoolean(value: any): boolean {
            return typeof (value) === "boolean";
        }

        public static isDefined(value: any): boolean {
            return !ObjectUtil.isUndefined(value) && value !== null;
        }

        public static isFunction(value: any): boolean {
            return typeof (value) === "function";
        }

        public static isInstanceOf(obj: Object, type: IInstantiable): boolean {
            Contract.isDefined(type, ExceptionUtil.notDefinedMessage("type"));

            if (!ObjectUtil.isDefined(obj)) {
                return false;
            }

            for (var property in type.prototype) {
                if (!(property in obj)) {
                    return false;
                }
            }

            return true;
        }

        public static isNumber(value: any): boolean {
            // ReSharper disable once SimilarExpressionsComparison
            return typeof (value) === "number" && value === value;
        }

        public static isObject(value: any): boolean {
            return typeof (value) === "object";
        }

        public static isSimpleType(value: any): boolean {
            return ObjectUtil.isBoolean(value) || ObjectUtil.isNumber(value) || ObjectUtil.isString(value);
        }

        public static isString(value: any): boolean {
            return typeof (value) === "string";
        }

        public static isUndefined(value: any): boolean {
            return typeof (value) === "undefined";
        }
    }
}