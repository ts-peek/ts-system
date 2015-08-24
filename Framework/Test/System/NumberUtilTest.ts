/// <reference path="../reference.ts"/> 

module Test {
    "use strict";

    import NumberUtil = System.NumberUtil;

    describe("System", () => {
        describe("NumberUtil", () => {
            describe("equals3DigitsPrecision", () => {
                it("returns true if the integer part and the first three digits after the comma are equal", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(10.1234, 10.1235)).toBe(true);
                });

                it("returns true if both values are undefined", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(undefined, undefined)).toBe(true);
                });

                it("returns true if both values are null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(null, null)).toBe(true);
                });

                it("returns false if the integer part or the first three digits after the comma are different", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(10.123, 11.123)).toBe(false);
                    expect(NumberUtil.equals3DigitsPrecision(10.123, 10.124)).toBe(false);
                });

                it("return false if both values are NaN", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(NaN, NaN)).toBe(false);
                });

                it("returns false if one value is undefined and the other is null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals3DigitsPrecision(undefined, null)).toBe(false);
                    expect(NumberUtil.equals3DigitsPrecision(null, undefined)).toBe(false);
                });
            });

            describe("equals6DigitsPrecision", () => {
                it("returns true if the integer part and the first six digits after the comma are equal", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(10.1234567, 10.12345679)).toBe(true);
                });

                it("returns true if both values are undefined", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(undefined, undefined)).toBe(true);
                });

                it("returns true if both values are null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(null, null)).toBe(true);
                });

                it("returns false if the integer part or the first six digits after the comma are different", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(10.123456, 11.123456)).toBe(false);
                    expect(NumberUtil.equals6DigitsPrecision(10.123456, 10.123457)).toBe(false);
                });

                it("return false if both values are NaN", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(NaN, NaN)).toBe(false);
                });

                it("returns false if one value is undefined and the other is null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals6DigitsPrecision(undefined, null)).toBe(false);
                    expect(NumberUtil.equals6DigitsPrecision(null, undefined)).toBe(false);
                });
            });

            describe("equals9DigitsPrecision", () => {
                it("returns true if the integer part and the first nine digits after the comma are equal", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(10.1234567890, 10.1234567891)).toBe(true);
                });

                it("returns true if both values are undefined", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(undefined, undefined)).toBe(true);
                });

                it("returns true if both values are null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(null, null)).toBe(true);
                });

                it("returns false if the integer part or the first nine digits after the comma are different", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(10.123456789, 11.123456789)).toBe(false);
                    expect(NumberUtil.equals9DigitsPrecision(10.123456789, 10.123456780)).toBe(false);
                });

                it("return false if both values are NaN", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(NaN, NaN)).toBe(false);
                });

                it("returns false if one value is undefined and the other is null", () => {
                    // Act & Assert
                    expect(NumberUtil.equals9DigitsPrecision(undefined, null)).toBe(false);
                    expect(NumberUtil.equals9DigitsPrecision(null, undefined)).toBe(false);
                });
            });

            describe("equalsNDigitsPrecision", () => {
                it("returns true if the integer part and the first N digits after the comma are equal", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(10.12, 10.13, 1)).toBe(true);
                    expect(NumberUtil.equalsNDigitsPrecision(10.123456, 10.123457, 5)).toBe(true);
                    expect(NumberUtil.equalsNDigitsPrecision(10.12345678901, 10.12345678902)).toBe(true);
                    expect(NumberUtil.equalsNDigitsPrecision(10.12345678901, 10.12345678902, undefined)).toBe(true);
                });

                it("returns true if both values are undefined", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(undefined, undefined)).toBe(true);
                });

                it("returns true if both values are null", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(null, null)).toBe(true);
                });

                it("returns false if the integer part or the first N digits after the comma are different", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(10.1, 11.1, 1)).toBe(false);
                    expect(NumberUtil.equalsNDigitsPrecision(10.12345, 10.12346, 5)).toBe(false);
                    expect(NumberUtil.equalsNDigitsPrecision(10.1234567890, 10.1234567891)).toBe(false);
                });

                it("return false if both values are NaN", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(NaN, NaN)).toBe(false);
                });

                it("returns false if one value is undefined and the other is null", () => {
                    // Act & Assert
                    expect(NumberUtil.equalsNDigitsPrecision(undefined, null)).toBe(false);
                    expect(NumberUtil.equalsNDigitsPrecision(null, undefined)).toBe(false);
                });

                it("throws exception if the precision is null, negative or greater than 20", () => {
                    // Act & Assert
                    expect(() => NumberUtil.equalsNDigitsPrecision(0, 0, null)).toThrow();
                    expect(() => NumberUtil.equalsNDigitsPrecision(0, 0, -1)).toThrow();
                    expect(() => NumberUtil.equalsNDigitsPrecision(0, 0, 21)).toThrow();
                });
            });

            describe("isParsableAsNumber", () => {
                it("returns true if the given value can be parsed as number", () => {
                    // Act & Assert
                    expect(NumberUtil.isParsableAsNumber("123")).toBe(true);
                    expect(NumberUtil.isParsableAsNumber("123.456")).toBe(true);
                    expect(NumberUtil.isParsableAsNumber("-123.456")).toBe(true);
                    expect(NumberUtil.isParsableAsNumber("1.23456E2")).toBe(true);
                });

                it("returns false if the given value cannot be parsed as number", () => {
                    // Act & Assert
                    expect(NumberUtil.isParsableAsNumber("Test")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber("123Test")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber("123.456Test")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber("123,456")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber("--123")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber("NaN")).toBe(false);
                    expect(NumberUtil.isParsableAsNumber(undefined)).toBe(false);
                    expect(NumberUtil.isParsableAsNumber(null)).toBe(false);
                });
            });

            describe("parseNumber", () => {
                it("parses a valid number represented as string", () => {
                    // Act and Assert
                    expect(NumberUtil.parseNumber("123")).toBe(123);
                    expect(NumberUtil.parseNumber("123.456")).toBe(123.456);
                    expect(NumberUtil.parseNumber("-123.456")).toBe(-123.456);
                    expect(NumberUtil.parseNumber("1.23456E3")).toBe(1234.56);
                });

                it("throws exception if the given string is not parsable as a number", () => {
                    // Act & Assert
                    expect(() => NumberUtil.parseNumber("Test")).toThrow();
                    expect(() => NumberUtil.parseNumber("123Test")).toThrow();
                    expect(() => NumberUtil.parseNumber("123.456Test")).toThrow();
                    expect(() => NumberUtil.parseNumber("123,456")).toThrow();
                    expect(() => NumberUtil.parseNumber("--123")).toThrow();
                    expect(() => NumberUtil.parseNumber("NaN")).toThrow();
                    expect(() => NumberUtil.parseNumber(undefined)).toThrow();
                    expect(() => NumberUtil.parseNumber(null)).toThrow();
                });
            });

            describe("toInt", () => {
                it("extracts the integer part of a decimal number", () => {
                    // Act & Assert
                    expect(NumberUtil.toInt(10)).toBe(10);
                    expect(NumberUtil.toInt(123.456)).toBe(123);
                    expect(NumberUtil.toInt(-123.456)).toBe(-123);
                    expect(NumberUtil.toInt(NaN)).toBe(0);
                });

                it("throws exception if the given value is undefined or null", () => {
                    // Act & Assert
                    expect(() => NumberUtil.toInt(undefined)).toThrow();
                    expect(() => NumberUtil.toInt(null)).toThrow();
                });
            });
        });
    });
}