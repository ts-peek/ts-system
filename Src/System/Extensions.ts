/* tslint:disable */
/// <reference path="../reference.ts"/> 

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

Object.prototype.equals = function(other: Object): boolean {
    return this === other;
};

Object.prototype.hashCode = function(): number {
    if (System.ObjectUtil.isDefined(this._hashCode)) {
        return this._hashCode;
    }

    this._hashCode = new System.HashCodeBuilder()
        .appendNumber(Math.random(), 10)
        .getHashCode();

    return this._hashCode;
};

String.prototype.equals = function(other: String): boolean {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};

String.prototype.hashCode = function(): number {
    if (System.ObjectUtil.isDefined(this._hashCode)) {
        return this._hashCode;
    }

    this._hashCode = new System.HashCodeBuilder()
        .appendString(this.value())
        .getHashCode();

    return this._hashCode;
};

String.prototype.compareTo = function(other: String): number {
    if (!other) {
        throw new System.ArgumentUndefinedException("Argument @other was null or undefined.");
    }

    var me: String = this;
    var min: number = Math.min(me.length, other.length);

    for (var i: number = 0; i < min; i++) {
        if (me.charAt(i) !== other.charAt(i)) {
            return me.charCodeAt(i) - other.charCodeAt(i);
        }
    }

    // When we reach this part, one string is prefixed by the other. In this case, either the strings are equal,
    // or the short string is considered smaller.
    return me.length === other.length ? 0 : me.length - other.length;
};

String.prototype.value = function(): string {
    return <string> this.valueOf();
};

Number.prototype.compareTo = function(other: Number): number {
    return <number> this.value() - other.value();
};

Number.prototype.equals = function(other: Number): boolean {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};

Number.prototype.hashCode = function(): number {
    return new System.HashCodeBuilder()
        .appendNumber(this.value())
        .getHashCode();
};

Number.prototype.value = function(): number {
    return <number> this.valueOf();
};

Boolean.prototype.compareTo = function(other: Boolean): number {
    return this.equals(other) ? 0 : this.value() ? 1 : -1;
};

Boolean.prototype.equals = function(other: Boolean): boolean {
    return System.ObjectUtil.isDefined(other) ? this.value() === other.value() : false;
};

Boolean.prototype.hashCode = function(): number {
    return new System.HashCodeBuilder()
        .appendBoolean(this.value())
        .getHashCode();
};

Boolean.prototype.value = function(): boolean {
    return <boolean> this.valueOf();
};