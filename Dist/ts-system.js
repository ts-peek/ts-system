/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry = {};
})(System || (System = {}));
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System = System.InterfaceRegistry.System || {};
})(System || (System = {}));
var System;
(function (System) {
    var Diagnosis;
    (function (Diagnosis) {
        "use strict";
        System.InterfaceRegistry.System.Diagnosis = System.InterfaceRegistry.System.Diagnosis || {};
    })(Diagnosis = System.Diagnosis || (System.Diagnosis = {}));
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
})(System || (System = {}));
System.Error = Error;
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IAction0 = "IAction0";
    System.InterfaceRegistry.System.IAction1 = "IAction1";
    System.InterfaceRegistry.System.IAction2 = "IAction2";
    System.InterfaceRegistry.System.IAction3 = "IAction3";
    System.InterfaceRegistry.System.IAction4 = "IAction4";
    System.InterfaceRegistry.System.IAction5 = "IAction5";
    System.InterfaceRegistry.System.IAction6 = "IAction6";
    System.InterfaceRegistry.System.IAction7 = "IAction7";
    System.InterfaceRegistry.System.IAction8 = "IAction8";
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IComparable = "IComparable";
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IEquatable = "IEquatable";
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IInstantiableException = "IInstantiableException";
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IFunc0 = "IFunc0";
    System.InterfaceRegistry.System.IFunc1 = "IFunc1";
    System.InterfaceRegistry.System.IFunc2 = "IFunc2";
    System.InterfaceRegistry.System.IFunc3 = "IFunc3";
    System.InterfaceRegistry.System.IFunc4 = "IFunc4";
    System.InterfaceRegistry.System.IFunc5 = "IFunc5";
    System.InterfaceRegistry.System.IFunc6 = "IFunc6";
    System.InterfaceRegistry.System.IFunc7 = "IFunc7";
    System.InterfaceRegistry.System.IFunc8 = "IFunc8";
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IImplements = "IImplements";
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    System.InterfaceRegistry.System.IInstantiable = "IInstantiable";
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
})(System || (System = {}));
/* tslint:disable */
/// <reference path="../reference.ts"/> 
Object.prototype.equals = function (other) {
    return this === other;
};
Object.prototype.hashCode = function () {
    if (System.ObjectUtil.isDefined(this._hashCode)) {
        return this._hashCode;
    }
    this._hashCode = new System.HashCodeBuilder()
        .appendNumber(Math.random(), 10)
        .getHashCode();
    return this._hashCode;
};
String.prototype.equals = function (other) {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};
String.prototype.hashCode = function () {
    if (System.ObjectUtil.isDefined(this._hashCode)) {
        return this._hashCode;
    }
    this._hashCode = new System.HashCodeBuilder()
        .appendString(this.value())
        .getHashCode();
    return this._hashCode;
};
String.prototype.compareTo = function (other) {
    if (!other) {
        throw new System.ArgumentUndefinedException("Argument @other was null or undefined.");
    }
    var me = this;
    var min = Math.min(me.length, other.length);
    for (var i = 0; i < min; i++) {
        if (me.charAt(i) !== other.charAt(i)) {
            return me.charCodeAt(i) - other.charCodeAt(i);
        }
    }
    return me.length === other.length ? 0 : me.length - other.length;
};
String.prototype.value = function () {
    return this.valueOf();
};
Number.prototype.compareTo = function (other) {
    return this.value() - other.value();
};
Number.prototype.equals = function (other) {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};
Number.prototype.hashCode = function () {
    return new System.HashCodeBuilder()
        .appendNumber(this.value())
        .getHashCode();
};
Number.prototype.value = function () {
    return this.valueOf();
};
Boolean.prototype.compareTo = function (other) {
    return this.equals(other) ? 0 : this.value() ? 1 : -1;
};
Boolean.prototype.equals = function (other) {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};
Boolean.prototype.hashCode = function () {
    return new System.HashCodeBuilder()
        .appendBoolean(this.value())
        .getHashCode();
};
Boolean.prototype.value = function () {
    return this.valueOf();
};
/// <reference path="../../reference.ts"/> 
var System;
(function (System) {
    var Diagnosis;
    (function (Diagnosis) {
        "use strict";
        var Contract = (function () {
            function Contract() {
            }
            Contract.requires = function (condition, exceptionType, message) {
                if (!condition) {
                    throw new exceptionType(message);
                }
            };
            Contract.isDefined = function (value, message) {
                if (!System.ObjectUtil.isDefined(value)) {
                    throw new System.ArgumentUndefinedException(message);
                }
            };
            Contract.isInRange = function (value, lowerBound, upperBound, message) {
                Contract.isDefined(value, message);
                Contract.requires(new System.Range(lowerBound, upperBound).isInRange(value), System.ArgumentOutOfRangeException, message);
            };
            Contract.isNegative = function (value, message) {
                Contract.isDefined(value, message);
                if (value >= 0) {
                    throw new System.ArgumentOutOfRangeException(message);
                }
            };
            Contract.isPositive = function (value, message) {
                Contract.isDefined(value, message);
                if (value < 0) {
                    throw new System.ArgumentOutOfRangeException(message);
                }
            };
            return Contract;
        })();
        Diagnosis.Contract = Contract;
    })(Diagnosis = System.Diagnosis || (System.Diagnosis = {}));
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var ExceptionUtil = (function () {
        function ExceptionUtil() {
        }
        ExceptionUtil.notDefinedMessage = function (parameterName) {
            Contract.isDefined(parameterName, "You must provide the name of the parameter being undefined or null.");
            return "Argument @" + parameterName + " was undefined or null.";
        };
        return ExceptionUtil;
    })();
    System.ExceptionUtil = ExceptionUtil;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var ObjectUtil = (function () {
        function ObjectUtil() {
        }
        ObjectUtil.areEqual = function (lhs, rhs) {
            if (lhs === rhs) {
                return true;
            }
            else if (ObjectUtil.isDefined(lhs) && ObjectUtil.isFunction(lhs.equals)) {
                return lhs.equals(rhs);
            }
            else if (ObjectUtil.isDefined(rhs) && ObjectUtil.isFunction(rhs.equals)) {
                return rhs.equals(lhs);
            }
            else {
                return false;
            }
        };
        ObjectUtil.createObject = function (prototype) {
            prototype = prototype || null;
            if (ObjectUtil.isDefined(Object.create)) {
                return Object.create(prototype);
            }
            var f = function () { };
            f.prototype = prototype;
            return new f();
        };
        ObjectUtil.implements = function (obj, interfaceName) {
            obj = obj;
            return ObjectUtil.isDefined(obj) && ObjectUtil.isDefined(obj.implementedInterfaces)
                && obj.implementedInterfaces().indexOf(interfaceName) >= 0;
        };
        ObjectUtil.isArray = function (value) {
            return ObjectUtil.isDefined(Array.isArray)
                ? Array.isArray(value)
                : typeof value === "object" && Object.prototype.toString.call(value) === "[object Array]";
        };
        ObjectUtil.isBoolean = function (value) {
            return typeof (value) === "boolean";
        };
        ObjectUtil.isDefined = function (value) {
            return !ObjectUtil.isUndefined(value) && value !== null;
        };
        ObjectUtil.isFunction = function (value) {
            return typeof (value) === "function";
        };
        ObjectUtil.isNumber = function (value) {
            return typeof (value) === "number" && value === value;
        };
        ObjectUtil.isObject = function (value) {
            return typeof (value) === "object";
        };
        ObjectUtil.isSimpleType = function (value) {
            return ObjectUtil.isBoolean(value) || ObjectUtil.isNumber(value) || ObjectUtil.isString(value);
        };
        ObjectUtil.isString = function (value) {
            return typeof (value) === "string";
        };
        ObjectUtil.isUndefined = function (value) {
            return typeof (value) === "undefined";
        };
        return ObjectUtil;
    })();
    System.ObjectUtil = ObjectUtil;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var NumberUtil = (function () {
        function NumberUtil() {
        }
        NumberUtil.equals3DigitsPrecision = function (first, second) {
            return NumberUtil.equalsNDigitsPrecision(first, second, 3);
        };
        NumberUtil.equals6DigitsPrecision = function (first, second) {
            return NumberUtil.equalsNDigitsPrecision(first, second, 6);
        };
        NumberUtil.equals9DigitsPrecision = function (first, second) {
            return NumberUtil.equalsNDigitsPrecision(first, second, 9);
        };
        NumberUtil.equalsNDigitsPrecision = function (first, second, precisionDigits) {
            if (precisionDigits === void 0) { precisionDigits = 10; }
            Contract.isDefined(precisionDigits, System.ExceptionUtil.notDefinedMessage("precisionDigits"));
            Contract.isInRange(precisionDigits, 0, 20, "Argument @precisionDigits must not be negative and not greater than 20, but was" + precisionDigits + ".");
            if (!System.ObjectUtil.isDefined(first) || !System.ObjectUtil.isDefined(second) || precisionDigits === 0) {
                return first === second;
            }
            else {
                var precision = Math.pow(NumberUtil.base10, NumberUtil.toInt(precisionDigits));
                return Math.abs(first * precision - second * precision) / precision < (1 / precision);
            }
        };
        NumberUtil.isParsableAsNumber = function (value) {
            return value !== null && System.ObjectUtil.isNumber(parseFloat(new Number(value).toString()));
        };
        NumberUtil.parseNumber = function (value) {
            Contract.requires(NumberUtil.isParsableAsNumber(value), System.FormatException, "The provided value may not be parsed as a number.");
            return parseFloat(new Number(value).toString());
        };
        NumberUtil.toInt = function (value) {
            Contract.isDefined(value, System.ExceptionUtil.notDefinedMessage("value"));
            return value | 0;
        };
        NumberUtil.base10 = 10;
        return NumberUtil;
    })();
    System.NumberUtil = NumberUtil;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var StringUtil = (function () {
        function StringUtil() {
        }
        StringUtil.format = function (format) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            Contract.isDefined(format, System.ExceptionUtil.notDefinedMessage("format"));
            return format.replace(/{(\d+)}/g, function (match, index) {
                var numIndex = System.NumberUtil.toInt(System.NumberUtil.parseNumber(index));
                return System.ObjectUtil.isDefined(args[numIndex]) ? args[numIndex] : match;
            });
        };
        StringUtil.EMPTY_STRING = "";
        return StringUtil;
    })();
    System.StringUtil = StringUtil;
})(System || (System = {}));
/// <reference path="../reference.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception(message, innerException) {
            _super.call(this, message);
            this.name = "Exception";
            this.message = System.ObjectUtil.isDefined(message) ? message : Exception.defaultMessage;
            this.stackTrace = (new System.Error()).stackTrace;
            this.innerException = innerException;
        }
        Exception.prototype.toString = function () {
            return this.createExceptionInfo(this, System.StringUtil.EMPTY_STRING);
        };
        Exception.prototype.createExceptionInfo = function (exception, infoString) {
            Contract.isDefined(exception, System.ExceptionUtil.notDefinedMessage("exception"));
            Contract.isDefined(infoString, System.ExceptionUtil.notDefinedMessage("infoString"));
            infoString += System.StringUtil.format("{0}: {1}\n{2}\n", exception.name, exception.message, exception.stackTrace);
            if (System.ObjectUtil.isDefined(exception.innerException)) {
                infoString += System.StringUtil.format("\n>>>>>>> caused by:\n");
                return this.createExceptionInfo(exception.innerException, infoString);
            }
            return infoString;
        };
        Exception.defaultMessage = "An error occured during program execution.";
        return Exception;
    })(System.Error);
    System.Exception = Exception;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var ArgumentOutOfRangeException = (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "ArgumentOutOfRangeException";
        }
        return ArgumentOutOfRangeException;
    })(System.ArgumentException);
    System.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var ArgumentUndefinedException = (function (_super) {
        __extends(ArgumentUndefinedException, _super);
        function ArgumentUndefinedException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "ArgumentUndefinedException";
        }
        return ArgumentUndefinedException;
    })(System.ArgumentException);
    System.ArgumentUndefinedException = ArgumentUndefinedException;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var ElementUndefinedException = (function (_super) {
        __extends(ElementUndefinedException, _super);
        function ElementUndefinedException(message) {
            _super.call(this, message);
            this.message = message;
            this.name = "ElementUndefinedException";
        }
        return ElementUndefinedException;
    })(System.ArgumentException);
    System.ElementUndefinedException = ElementUndefinedException;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var FormatException = (function (_super) {
        __extends(FormatException, _super);
        function FormatException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "FormatException";
        }
        return FormatException;
    })(System.Exception);
    System.FormatException = FormatException;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "InvalidOperationException";
        }
        return InvalidOperationException;
    })(System.Exception);
    System.InvalidOperationException = InvalidOperationException;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var NotImplementedException = (function (_super) {
        __extends(NotImplementedException, _super);
        function NotImplementedException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "NotImplementedException";
        }
        return NotImplementedException;
    })(System.Exception);
    System.NotImplementedException = NotImplementedException;
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var EqualsBuilder = (function () {
        function EqualsBuilder() {
            this.equal = true;
        }
        EqualsBuilder.prototype.append = function (first, second) {
            if (!this.equal) {
                return this;
            }
            this.equal = System.ObjectUtil.areEqual(first, second);
            return this;
        };
        EqualsBuilder.prototype.appendBase = function (baseEquals) {
            if (!this.equal) {
                return this;
            }
            if (!baseEquals) {
                baseEquals = false;
            }
            this.equal = baseEquals;
            return this;
        };
        EqualsBuilder.prototype.appendBoolean = function (first, second) {
            if (!this.equal) {
                return this;
            }
            this.equal = first === second;
            return this;
        };
        EqualsBuilder.prototype.appendNumber = function (first, second, precisionDigits) {
            if (precisionDigits === void 0) { precisionDigits = 0; }
            Contract.isInRange(precisionDigits, 0, Number.POSITIVE_INFINITY, "Argument @precisionDigits must not be negative.");
            if (!this.equal) {
                return this;
            }
            this.equal = System.NumberUtil.equalsNDigitsPrecision(first, second, precisionDigits);
            return this;
        };
        EqualsBuilder.prototype.appendObject = function (first, second) {
            if (!this.equal) {
                return this;
            }
            this.equal = System.ObjectUtil.areEqual(first, second);
            return this;
        };
        EqualsBuilder.prototype.appendString = function (first, second, strategy) {
            if (strategy === void 0) { strategy = 0; }
            if (!this.equal) {
                return this;
            }
            else if (!System.ObjectUtil.isDefined(first) || !System.ObjectUtil.isDefined(second)) {
                this.equal = first === second;
                return this;
            }
            return this.appendStringRelaxed(first, second, strategy);
        };
        EqualsBuilder.prototype.appendStringRelaxed = function (first, second, strategy) {
            if (strategy === void 0) { strategy = 0; }
            if (!this.equal) {
                return this;
            }
            else if (!first && !second) {
                this.equal = true;
                return this;
            }
            this.equal = strategy === 1
                ? first.toUpperCase() === second.toUpperCase()
                : first === second;
            return this;
        };
        EqualsBuilder.prototype.isEqual = function () {
            return this.equal;
        };
        return EqualsBuilder;
    })();
    System.EqualsBuilder = EqualsBuilder;
})(System || (System = {}));
/// <reference path="../reference.ts"/>
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var HashCodeBuilder = (function () {
        function HashCodeBuilder(initialValue, multiplier) {
            if (!System.ObjectUtil.isDefined(initialValue)) {
                initialValue = 17;
            }
            if (!System.ObjectUtil.isDefined(multiplier)) {
                multiplier = 37;
            }
            Contract.requires(initialValue !== 0, System.ArgumentException, "Argument @initialValue must not be zero.");
            Contract.requires(initialValue % 2 === 1, System.ArgumentException, "Argument @initialValue must not be even.");
            Contract.requires(multiplier !== 0, System.ArgumentException, "Argument @multiplier must not be zero.");
            Contract.requires(multiplier % 2 === 1, System.ArgumentException, "Argument @multiplier must not be even.");
            this.total = initialValue;
            this.constant = multiplier;
        }
        HashCodeBuilder.prototype.append = function (value) {
            if (System.ObjectUtil.isBoolean(value)) {
                return this.appendBoolean(value);
            }
            else if (System.ObjectUtil.isNumber(value) || isNaN(value)) {
                return this.appendNumber(value);
            }
            else if (System.ObjectUtil.isString(value)) {
                return this.appendString(value);
            }
            else {
                return this.appendObject(value);
            }
        };
        HashCodeBuilder.prototype.appendBase = function (baseHashCode) {
            return this.appendNumber(baseHashCode);
        };
        HashCodeBuilder.prototype.appendBoolean = function (value) {
            if (!System.ObjectUtil.isDefined(value)) {
                return this;
            }
            this.total = this.total * this.constant + (value ? 0 : 1);
            return this;
        };
        HashCodeBuilder.prototype.appendNumber = function (value, precisionDigits) {
            if (precisionDigits === void 0) { precisionDigits = 0; }
            Contract.isInRange(precisionDigits, 0, Number.POSITIVE_INFINITY, "Argument @precisionDigits must not be negative.");
            if (!System.ObjectUtil.isDefined(value) || isNaN(value)) {
                return this;
            }
            if (precisionDigits === 0) {
                precisionDigits = 1;
            }
            var intValue = Math.round(value * Math.pow(System.NumberUtil.base10, precisionDigits - 1)) | 0;
            this.total = this.total * this.constant + intValue;
            return this;
        };
        HashCodeBuilder.prototype.appendObject = function (value) {
            if (!System.ObjectUtil.isDefined(value)) {
                return this;
            }
            return this.appendNumber(value.hashCode());
        };
        HashCodeBuilder.prototype.appendString = function (value, strategy) {
            if (strategy === void 0) { strategy = 0; }
            if (!System.ObjectUtil.isDefined(value)) {
                return this;
            }
            var length = value.length;
            value = strategy === 1 ? value.toUpperCase() : value;
            for (var i = 0; i < length; i++) {
                this.appendNumber(value.charCodeAt(i));
            }
            return this;
        };
        HashCodeBuilder.prototype.getHashCode = function () {
            return this.total;
        };
        return HashCodeBuilder;
    })();
    System.HashCodeBuilder = HashCodeBuilder;
})(System || (System = {}));
/// <reference path="../reference.ts"/> 
var System;
(function (System) {
    "use strict";
    var Contract = System.Diagnosis.Contract;
    var Range = (function () {
        function Range(lowerBound, upperBound) {
            this.lowerBound = lowerBound;
            this.upperBound = upperBound;
            Contract.isDefined(lowerBound, "Argument @lowerBound was undefined or null.");
            Contract.isDefined(upperBound, "Argument @upperBound was not defined");
            Contract.requires(lowerBound <= upperBound, System.ArgumentOutOfRangeException, "The lower bound must be less than the upper bound");
        }
        Range.prototype.getInterval = function () {
            return this.upperBound - this.lowerBound;
        };
        Range.prototype.getLowerBound = function () {
            return this.lowerBound;
        };
        Range.prototype.getUpperBound = function () {
            return this.upperBound;
        };
        Range.prototype.isInRange = function (value) {
            return System.ObjectUtil.isDefined(value) && this.lowerBound <= value && this.upperBound >= value;
        };
        return Range;
    })();
    System.Range = Range;
})(System || (System = {}));
// Registry for interfaces
/// <reference path="System/InterfaceRegistry.ts"/>
/// <reference path="System/Modules.ts" />
/// <reference path="System/Error.ts" />
/// <reference path="System/IAction.ts" />
/// <reference path="System/IComparable.ts" />
/// <reference path="System/IEquatable.ts" />
/// <reference path="System/IInstantiableException.ts" />
/// <reference path="System/IFunction.ts" />
/// <reference path="System/IImplements.ts" />
/// <reference path="System/IInstantiable.ts" />
/// <reference path="System/StringComparison.ts" />
/// <reference path="System/Extensions.ts" />
/// <reference path="System/Diagnosis/Contract.ts" />
/// <reference path="System/ExceptionUtil.ts" />
/// <reference path="System/ObjectUtil.ts" />
/// <reference path="System/NumberUtil.ts" />
/// <reference path="System/StringUtil.ts" />
/// <reference path="System/Exception.ts" />
/// <reference path="System/ArgumentException.ts" />
/// <reference path="System/ArgumentOutOfRangeException.ts" />
/// <reference path="System/ArgumentUndefinedException.ts" />
/// <reference path="System/ElementUndefinedException.ts" />
/// <reference path="System/FormatException.ts" />
/// <reference path="System/InvalidOperationException.ts" />
/// <reference path="System/NotImplementedException.ts" />
/// <reference path="System/EqualsBuilder.ts" />
/// <reference path="System/HashCodeBuilder.ts" />
/// <reference path="System/Range.ts" />
/// <reference path="../reference.ts" />
var System;
(function (System) {
    "use strict";
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(message, innerException) {
            _super.call(this, message, innerException);
            this.name = "ArgumentException";
        }
        return ArgumentException;
    })(System.Exception);
    System.ArgumentException = ArgumentException;
})(System || (System = {}));
//# sourceMappingURL=ts-system.js.map