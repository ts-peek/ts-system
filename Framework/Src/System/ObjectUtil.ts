/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Class providing utility methods when dealing with objects or when more information about a value is required.
     * 
     * @author Christian Schaiter
     */
    export class ObjectUtil {

        /**
         * Tests whether or not two values are strictly equal. Strict equality considers <code>undefined</code> and
         * <code>null</code> values unequal and does not try to convert one value to match the other.
         * @param lhs The first value to compare.
         * @param rhs The second value to compare.
         * @returns <code>true</code> if both given values are strictly equal; <code>false</code> otherwise.
         */
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

        /**
         * Creates a new object with the given object as its prototype. This method provides ES3 support for the 
         * <code>Object.create</code> method of ES5.
         * @param prototype The object being the prototype object of the newly created object. May not be 
         * <code>undefined</code> or <code>null</code>.
         * @returns The newly created object with the given object as its prototype.
         * @throws <code>ArgumentUndefinedException</code> If the <code>prototype</code> object is <code>undefined</code> or 
         * <code>null</code>. 
         */
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

        /**
         * Tests whether or not the given object implements a certain interface, being described by its name.
         * <p>
         * Iin general, the name will be retrieved through the <code>InterfaceRegistry</code> class. Please note
         * that this method does not use structural typing when determining whether the object implements the
         * given interface, but instead uses the <code>IImplements.implements</code> method of the object itself. This
         * method provides runtime information about the interfaces the object implements.
         * <p>
         * This method is especially usedful when overloading a method or constructor. When a method or constructor 
         * is overloaded, the parameter type must be determined at runtime (where all interface information is lost, 
         * since interfaces are a compile time only construct) in order to treat it correctly. When the static type 
         * of the parameter is an interface, this method is the only chance to test if the parameter indeed implements
         * the static interface.
         * 
         * @see InterfaceRegistry
         * @see IImplements
         * @param obj The object being tested. If the object is <code>undefined</code> or <code>null</code>, the method
         * returns <code>false</code>.
         * @param interfaceName The name of the interface (retrieved through the <code>InterfaceRegistry</code> class).
         * @returns <code>true</code> if the given object implemnts the interface represented by its name; 
         * <code>false</code> otherwise.
         */
        public static implements(obj: any, interfaceName: string): boolean {
            obj = <IImplements> obj;
            return ObjectUtil.isDefined(obj) && ObjectUtil.isDefined(obj.implements)
                && obj.implements().indexOf(interfaceName) >= 0;
        }

        /**
         * Tests whether or not the given value is an array.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is an array; <code>false</code> otherwise. 
         */
        public static isArray(value: any): boolean {
            return ObjectUtil.isDefined(Array.isArray)
                ? Array.isArray(value)
                : typeof value === "object" && Object.prototype.toString.call(value) === "[object Array]";
        }

        /**
         * Tests whether or not the given value is a boolean value.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is a boolean value; <code>false</code> otherwise. 
         */
        public static isBoolean(value: any): boolean {
            return typeof (value) === "boolean";
        }

        /**
         * Tests whether or not the given value is defined, i.e. it is not <code>undefined</code> and not 
         * <code>null</code>.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is defined; <code>false</code> otherwise. 
         */
        public static isDefined(value: any): boolean {
            return !ObjectUtil.isUndefined(value) && value !== null;
        }

        /**
         * Tests whether or not the given value is a function.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is a function; <code>false</code> otherwise. 
         */
        public static isFunction(value: any): boolean {
            return typeof (value) === "function";
        }

        /**
         * Tests whether or not the given value is a number.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is a number; <code>false</code> otherwise. 
         */
        public static isNumber(value: any): boolean {
            // ReSharper disable once SimilarExpressionsComparison
            return typeof (value) === "number" && value === value;
        }

        /**
         * Tests whether or not the given value is an object (i.e. no simple type).
         * @see ObjectUtil.isSimpleType
         * @param value The value to test.
         * @returns <code>true</code> if the given value is an object; <code>false</code> otherwise. 
         */
        public static isObject(value: any): boolean {
            return typeof (value) === "object";
        }

        /**
         * Tests whether or not the given value is a simple type (i.e. no object).
         * @see ObjectUtil.isObject
         * @param value The value to test.
         * @returns <code>true</code> if the given value is an object; <code>false</code> otherwise. 
         */
        public static isSimpleType(value: any): boolean {
            return ObjectUtil.isBoolean(value) || ObjectUtil.isNumber(value) || ObjectUtil.isString(value);
        }

        /**
         * Tests whether or not the given value is a string.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is a string; <code>false</code> otherwise. 
         */
        public static isString(value: any): boolean {
            return typeof (value) === "string";
        }

        /**
         * Tests whether or not the given value is <code>undefined</code>. If the value is <code>null</code>, this
         * method returns <code>false</code>.
         * @param value The value to test.
         * @returns <code>true</code> if the given value is <code>undefined</code>; <code>false</code> otherwise. 
         */
        public static isUndefined(value: any): boolean {
            return typeof (value) === "undefined";
        }
    }
}