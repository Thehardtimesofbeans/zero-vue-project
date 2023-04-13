import { Numeric } from "./basic";

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null;

export const isNumeric = (val: Numeric): val is string =>
  typeof val === "number" || /^\d+(\.\d+)?$/.test(val);

export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";
