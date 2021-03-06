﻿/// <reference path="../reference.ts"/> 

module System {
    "use strict";

    InterfaceRegistry.System.IFunc0 = "IFunc0";
    InterfaceRegistry.System.IFunc1 = "IFunc1";
    InterfaceRegistry.System.IFunc2 = "IFunc2";
    InterfaceRegistry.System.IFunc3 = "IFunc3";
    InterfaceRegistry.System.IFunc4 = "IFunc4";
    InterfaceRegistry.System.IFunc5 = "IFunc5";
    InterfaceRegistry.System.IFunc6 = "IFunc6";
    InterfaceRegistry.System.IFunc7 = "IFunc7";
    InterfaceRegistry.System.IFunc8 = "IFunc8";

    /**
     * Function interface that encapsulates a method that has no parameter and returns a value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must not have any parameters and must return a 
     * value.
     */
    export interface IFunc0<TResult> {
        (): TResult;
    }

    /**
     * Function interface that encapsulates a method with one parameter of type <code>TParam</code> and a return value of type
     * <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have one parameter and a return value.
     */
    export interface IFunc1<TParam, TResult> {
        (param: TParam): TResult;
    }

    /**
     * Function interface that encapsulates a method with two parameters of types <code>TParam1</code> and <code>TParam2</code> and a 
     * return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have two parameters and a return value.
     */
    export interface IFunc2<TParam1, TParam2, TResult> {
        (param1: TParam1, param2: TParam2): TResult;
    }

    /**
     * Function interface that encapsulates a method with three parameters of types <code>TParam1</code>, <code>TParam2</code> and 
     * <code>TParam3</code> and a return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have three parameters and a return value.
     */
    export interface IFunc3<TParam1, TParam2, TParam3, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3): TResult;
    }

    /**
     * Function interface that encapsulates a method with four parameters of types <code>TParam1</code>, <code>TParam2</code>, 
     * <code>TParam3</code> and <code>TParam4</code> and a return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have four parameters and a return value.
     */
    export interface IFunc4<TParam1, TParam2, TParam3, TParam4, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4): TResult;
    }

    /**
     * Function interface that encapsulates a method with five parameters of types <code>TParam1</code>, <code>TParam2</code>, 
     * <code>TParam3</code>, <code>TParam4</code> and <code>TParam5</code> and a return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have five parameters and a return value.
     */
    export interface IFunc5<TParam1, TParam2, TParam3, TParam4, TParam5, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5): TResult;
    }

    /**
     * Function interface that encapsulates a method with six parameters of types <code>TParam1</code>, <code>TParam2</code>, 
     * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code> and <code>TParam6</code> and a return value of 
     * type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have six parameters and a return value.
     */
    export interface IFunc6<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6): TResult;
    }

    /**
     * Function interface that encapsulates a method with seven parameters of types <code>TParam1</code>, <code>TParam2</code>,
     * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, <code>TParam6</code> and <code>TParam7</code> 
     * and a return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have seven parameters and a return value.
     */
    export interface IFunc7<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7): TResult;
    }

    /**
     * Function interface that encapsulates a method with eight parameters of types <code>TParam1</code>, <code>TParam2</code>,
     * <code>TParam3</code>, <code>TParam4</code>, <code>TParam5</code>, <code>TParam6</code>, <code>TParam7</code> and 
     * <code>TParam8</code> and a return value of type <code>TResult</code>.
     * 
     * @remarks You can use the function interface to pass a method as a parameter without explicitly declaring a 
     * custom interface. The encapsulated method must correspond to the method signature that is defined by this 
     * function interface. This means that the encapsulated method must have eight parameters and a return value.
     */
    export interface IFunc8<TParam1, TParam2, TParam3, TParam4, TParam5, TParam6, TParam7, TParam8, TResult> {
        (param1: TParam1, param2: TParam2, param3: TParam3, param4: TParam4, param5: TParam5, param6: TParam6,
            param7: TParam7, param8: TParam8): TResult;
    }
}