import { PropType } from "vue";

// 数字或字符串属性
export const numericProp = [Number, String];

export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal,
});
