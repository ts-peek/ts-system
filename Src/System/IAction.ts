/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    /**
     * Function interface that encapsulates a method that has no parameter and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have no parameters and no return value.
     */
    export interface IAction0 {
        (): void;
    }

    /**
     * Function interface that encapsulates a method that has a single parameter of type <TParam> and does not return
     * a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have one parameter and no return value.
     */
    export interface IAction1<TParam> {
        (param: TParam): void;
    }

    /**
     * Function interface that encapsulates a method that has a two parameters of types <TParam1> and <TParam2> and 
     * does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have two parameters and no return value.
     */
    export interface IAction2<TParam1, TParam2> {
        (param1: TParam1, param2: TParam2): void;
    }

    /**
     * Function interface that encapsulates a method that has a three parameters of types <TParam1>, <TParam2> and 
     * <TParam3> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have three parameters and no return value.
     */
    export interface IAction3<TParam1, TParam2, TParam3> {
        (param1: TParam1, param2: TParam2, param3: TParam3): void;
    }

    /**
     * Function interface that encapsulates a method that has a four parameters of types <TParam1>, <TParam2>, 
     * <TParam3> and <TParam4> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have four parameters and no return value.
     */
    export interface IAction4<TParam1, TParam2, TParam3, TParam4> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4): void;
    }

    /**
     * Function interface that encapsulates a method that has a five parameters of types <TParam1>, <TParam2>, 
     * <TParam3>, <TParam4> and <TParam5> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have five parameters and no return value.
     */
    export interface IAction5<TParam1, TParam2, TParam3, TParam4, TParam5> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5): void;
    }

    /**
     * Function interface that encapsulates a method that has a six parameters of types <TParam1>, <TParam2>, 
     * <TParam3>, <TParam4>, <TParam5> and <TParam6> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have six parameters and no return value.
     */
    export interface IAction6<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6): void;
    }

    /**
     * Function interface that encapsulates a method that has a seven parameters of types <TParam1>, <TParam2>, 
     * <TParam3>, <TParam4>, <TParam5>, <TParam6> and <TParam7> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have seven parameters and no return value.
     */
    export interface IAction7<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7): void;
    }

    /**
     * Function interface that encapsulates a method that has a eight parameters of types <TParam1>, <TParam2>, 
     * <TParam3>, <TParam4>, <TParam5>, <TParam6>, <TParam7> and <TParam8> and does not return a value.
     * 
     * @remarks: You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have eight parameters and no return value.
     */
    export interface IAction8<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TParam8> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7, param8: TParam8): void;
    }
}