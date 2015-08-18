/// <reference path="../reference.ts" />

module System {
    "use strict";

    import Contract = Diagnosis.Contract;

    /**
     * Exception being thrown when general error occurs during application execution.
     * <p>
     * This class is the base class for all exceptions. The <i>TSSystem</i> API does not use any built-in JavaScript 
     * error types (such as <code>Error</code>, <code>RangeError</code>, etc.), but uses its own more elaborate 
     * exception types instead, taking Java or C# as example. However, in order to be consistent with the
     * JavaScript exception API, the <code>Exception</code> class inherits from the <code>Error</code> class, so that
     * <pre><code>new Exception() instanceof Error === true</code></pre><br>
     * is valid. Once thrown, an exception must be handled by 
     * the application or the execution of the application stops.
     * <p>
     * This exception should only be thrown if no more concrete exceptions (that would describe the problem in a more concise
     * way) exist. E.g., if an argument value does not satisfy the preconditions defined by a method, the more concrete
     * <code>ArgumentException</code> should be thrown.
     * <p>
     * <strong>Try-Catch Blocks</strong><br>
     * The JavaScript runtime provides an exception handling model that is based on the representation of exceptions as 
     * objects, and the separation of program code and exception handling code into <i>try</i> blocks and <i>catch</i> 
     * blocks, respectively. There can only be one catch block per try block, and the particular types of exceptions 
     * must be filtered within the catch block in order to apply different actions per exception type. This filtering 
     * usually takes the following form:
     * <pre><code>try {
     *      invokeMe();
     *  } catch(ex) {
     *      if (ex instanceof ArgumentOutOfRangeException) {
     *          // do something specific in here
     *      } else if (ex instanceof ArgumentException) {
     *          // do something less specific in here
     *      } else if (ex instanceof Exception) {
     *          // do some general error handling in here
     *      } else {
     *          // a severe error occured, e.g. a TypeError
     *      }
     *  }</code></pre>
     * <p>
     * <strong>Exception Type Features</strong><br>
     * Exception types support the following features:<br>
     * <ul>
     * <li>Human-readable text that describes the error. When an exception occurs, the runtime makes available a text 
     * message to inform the user of the nature of the error and to suggest actions to resolve the problem. This text 
     * message is held in the <code>message</code> property of the exception object. During the creation of the 
     * exception object, you can pass a text string to the constructor to describe the details of that particular 
     * exception. If no error message argument is supplied to the constructor, the default error message is used.</li>
     * <li>The state of the call stack when the exception was thrown. The <code>stackTrace</code> property carries a 
     * stack trace that can be used to determine where in the code the error occurs. The stack trace lists all the 
     * called methods, and the line numbers in the source file where the calls are made.</li>
     * </ul><p>
     * <strong>Exception Chaining</strong><br>
     * When an exception <i>X</i> is thrown as a direct result of a previous exception <i>Y</i>, the 
     * <code>innerException</code> property of <i>X</i> should contain a reference to <i>Y</i>. Use the 
     * <code>innerException</code> property to obtain the set of exceptions that led to the current exception. The 
     * <code>innerException</code> property is set upon initialization of the exception object.
     * 
     * @author Christian Schaiter
     */
    export class Exception extends Error {

        private static defaultMessage: string =
        "An error occured during program execution. View the stackTrace property for more details.";

        /**
         * The name of the exception.
         */
        public name: string = "Exception";

        /**
         * The message containing more detailed information about the exception.
         */
        public message: string;

        /**
         * The stack trace of the exception.
         */
        public stackTrace: string;

        /**
         * The <code>Exception</code> instance that caused the current exception.
         */
        public innerException: Exception;

        /**
         * Constructs a new instance of the <code>Exception</code> class.
         * @param message The message that provides more details about the reason of the exception.
         */
        constructor(message?: string);
        constructor(message: string, innerException?: Exception);
        constructor(message?: string, innerException?: Exception) {
            super(message);

            this.message = ObjectUtil.isDefined(message) ? message : Exception.defaultMessage;
            this.stackTrace = (<any> new Error()).stackTrace;
            this.innerException = innerException;
        }

        /**
         * Gets a proper string representation, consisting of the name and message of the exception.
         * @return A string representation of the exception.
         */
        public toString(): string {
            return this.createExceptionInfo(this, StringUtil.emptyString);
        }

        private createExceptionInfo(exception: Exception, infoString: string): string {
            Contract.isDefined(exception, ExceptionUtil.notDefinedMessage("exception"));
            Contract.isDefined(infoString, ExceptionUtil.notDefinedMessage("infoString"));

            infoString += StringUtil.format("{0}: {1}\n{2}\n",
                exception.name, exception.message, exception.stackTrace);

            if (ObjectUtil.isDefined(exception.innerException)) {
                infoString += StringUtil.format("\n>>>>>>> caused by:\n");
                return this.createExceptionInfo(exception.innerException, infoString);
            }

            return infoString;
        }
    }
}