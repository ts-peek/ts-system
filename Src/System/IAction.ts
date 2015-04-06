/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Function interface that encapsulates a method that has no parameter and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have no parameters and no return value.
     */
    export interface IAction0 {
        (): void;
    }

    /**
     * Function interface that encapsulates a method that has a single parameter of type <code>TParam</code> and does
     * not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have one parameter and no return value.
     */
    export interface IAction1<TParam> {

        /**
         * Generic method taking one parameter of type <code>TParam</code> and not returning a value.
         * @param param The first parameter.
         */
        (param: TParam): void;
    }

    /**
     * Function interface that encapsulates a method that has a two parameters of types <code>TParam1</code> and 
     * <code>TParam2</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have two parameters and no return value.
     */
    export interface IAction2<TParam1, TParam2> {

        /**
         * Generic method taking two parameters of types <code>TParam1</code> and <code>TParam2</code> and not returning
         * a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         */
        (param1: TParam1, param2: TParam2): void;
    }

    /**
     * Function interface that encapsulates a method that has a three parameters of types <code>TParam1</code>, 
     * <code>TParam2</code> and <code>TParam3</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have three parameters and no return value.
     */
    export interface IAction3<TParam1, TParam2, TParam3> {

        /**
         * Generic method taking three parameters of types <code>TParam1</code>, <code>TParam2</code> and 
         * <code>TParam3</code> and not returning a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3): void;
    }

    /**
     * Function interface that encapsulates a method that has a four parameters of types <code>TParam1</code>, 
     * <code>TParam2</code>, <code>TParam3</code> and <code>TParam4</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have four parameters and no return value.
     */
    export interface IAction4<TParam1, TParam2, TParam3, TParam4> {

        /**
         * Generic method taking four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
         * <code>TParam3</code> and <code>TParam4</code> and not returning a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         * @param param4 The fourth parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4): void;
    }

    /**
     * Function interface that encapsulates a method that has a five parameters of types <code>TParam1</code>, 
     * <code>TParam2</code>, <code>TParam3</code>, <code>TParam4</code> and <code>TParam5</code> and does 
     * not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have five parameters and no return value.
     */
    export interface IAction5<TParam1, TParam2, TParam3, TParam4, TParam5> {

        /**
         * Generic method taking four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
         * <code>TParam3</code>, <code>TParam4</code> and <code>TParam5</code> and not returning a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         * @param param4 The fourth parameter.
         * @param param5 The fifth parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5): void;
    }

    /**
     * Function interface that encapsulates a method that has a six parameters of types <code>TParam1</code>, 
     * <code>TParam2</code>, <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code> and 
     * <code>TParam6</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have six parameters and no return value.
     */
    export interface IAction6<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6> {

        /**
         * Generic method taking four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
         * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code> and <code>TParam6</code> and not returning
         * a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         * @param param4 The fourth parameter.
         * @param param5 The fifth parameter.
         * @param param6 The sixth parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6): void;
    }

    /**
     * Function interface that encapsulates a method that has a seven parameters of types <code>TParam1</code>, 
     * <code>TParam2</code>, <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, 
     * <code>TParam6</code> and <code>TParam7</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have seven parameters and no return value.
     */
    export interface IAction7<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7> {

        /**
         * Generic method taking four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
         * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, <code>TParam6</code> and 
         * <code>TParam7</code> and not returning a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         * @param param4 The fourth parameter.
         * @param param5 The fifth parameter.
         * @param param6 The sixth parameter.
         * @param param7 The sixth parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7): void;
    }

    /**
     * Function interface that encapsulates a method that has a eight parameters of types <code>TParam1</code>, 
     * <code>TParam2</code>, <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, 
     * <code>TParam6</code>, <code>TParam7</code> and <code>TParam8</code> and does not return a value.
     * <p>
     * You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have eight parameters and no return value.
     */
    export interface IAction8<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TParam8> {

        /**
         * Generic method taking four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
         * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, <code>TParam6</code>,
         * <code>TParam7</code> and <code>TParam8</code> and not returning a value.
         * @param param1 The first parameter.
         * @param param2 The second parameter.
         * @param param3 The third parameter.
         * @param param4 The fourth parameter.
         * @param param5 The fifth parameter.
         * @param param6 The sixth parameter.
         * @param param7 The sixth parameter.
         * @param param8 The eighth parameter.
         */
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7, param8: TParam8): void;
    }
}