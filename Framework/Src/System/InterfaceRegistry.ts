/// <reference path="../reference.ts"/>

module System {
    "use strict";

    /**
     * Use this global variable to dynamically register new interfaces. 
     * <p>
     * Since interfaces are a compile time construct in TypeScript, the language does not provide any built-in means 
     * to determine whether an object is an instance of an interface. When using function overloads, one 
     * frequently has to check the type of the parameters and perform different actions for different parameter types.
     * However, whenever the type of the parameter is an interface, there is no simple way to check the type.
     * <p>
     * <strong>Register an interface</strong>
     * <p>
     * This class serves as global registry for interfaces, providing means to access their names during
     * runtime (where all interface information would otherwise be lost). For most interfaces there is no need to
     * explicitly register them; however, in case you have to check instance types in function overloads, this registry
     * can provide a global reference to the parameter's interface type. Since this registry is of a dynamic type
     * (of type <code>any</code>), a new interface <i>INewInterface</i> may be registered by following single line of
     * code:
     * <p>
     * <code>InterfaceRegistry.INewInterface = "INewInterface";</code>
     * <p>
     * <strong>Test instances</strong>
     * <p>
     * Furthermore, the registered interface must extend the <code>IImplements</code> interface, which defines the 
     * <code>IImplements::implements</code> method that exposes all interfaces being implemented by a
     * subclass. Without this information, it would be impossible for a class to determine which interfaces it actually 
     * implements (remember, all this information is only available at compile time). As an example, all classes that 
     * implement the <code>INewInterface</code> must define an <code>implements</code> method that returns a string array
     * of length 1, containing the string <code>"INewInterface"</code> as its single element. If all requirements above
     * are fulfilled, it is very simple to test if an object <i>o</i> is an instance of <i>INewInterface</i>:
     * <p>
     * <code>ObjectUtil.implements(o, InterfaceRegistry.INewInterface);</code>
     * 
     * @author Christian Schaiter
     * @see IImplements
     * @see ObjectUtil
     */
    // ReSharper disable once InconsistentNaming
    export var InterfaceRegistry: any = {};
}