import { CSSProperties } from "vue";
import { Numeric } from "./basic";
import { isDef, isNumeric } from "./validate";

const camelizeRE = /-(\w)/g;

export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase());

export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return undefined;
}

// 获取样式
export function getSizeStyle(
  originSize?: Numeric | Numeric[]
): CSSProperties | undefined {
  if (isDef(originSize)) {
    // 如果数组【10，20】前面是width， 后面是height
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1]),
      };
    }

    const size = addUnit(originSize);
    return {
      width: size,
      height: size,
    };
  }
}
