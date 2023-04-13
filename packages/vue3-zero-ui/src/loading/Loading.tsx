import { computed, defineComponent, type ExtractPropTypes } from "vue";
import {
  extend,
  addUnit,
  numericProp,
  getSizeStyle,
  makeStringProp,
} from "../utils";
import "./index.less";

// eslint-disable-next-line no-undef
const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => (
    <i class={`zero-loading__line zero-loading__line--${index + 1}`} />
  ));

const CircularIcon = (
  <svg class={`zero-loading__circular`} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

export type LoadingType = "circular" | "spinner";

export const loadingProps = {
  type: makeStringProp<LoadingType>("circular"),
  size: numericProp,
  color: {
    type: String,
    default: "blue",
  },
  vertical: Boolean,
  textSize: {
    type: numericProp,
    default: 14,
  },
  textColor: String,
};

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;

export default defineComponent({
  name: "ZLoading",

  props: loadingProps,

  setup(props, { slots }) {
    const spinnerStyle = computed(() =>
      extend({ color: props.color }, getSizeStyle(props.size))
    );

    const renderIcon = () => {
      const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
      return (
        <span
          class={`zero-loading__spinner zero-loading__spinner--${props.type}`}
          style={spinnerStyle.value}
        >
          {slots.icon ? slots.icon() : DefaultIcon}
        </span>
      );
    };

    const renderText = () => {
      if (slots.default) {
        return (
          <span
            class="zero-loading__text ml"
            style={{
              fontSize: addUnit(props.textSize),
              color: props.textColor ?? props.color,
            }}
          >
            {slots.default()}
          </span>
        );
      }
    };

    return () => {
      const { type, vertical, color } = props;
      return (
        <div
          class={`zero-loading zero-loading--${type} ${
            vertical ?? "flex flex-col items-center"
          } color:${color}`}
          aria-live="polite"
          aria-busy={true}
        >
          {renderIcon()}
          {renderText()}
        </div>
      );
    };
  },
});
