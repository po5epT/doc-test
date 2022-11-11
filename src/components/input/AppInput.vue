<template>
  <label class="label">
    <span v-if="hasIconLeft" class="input-icon input-icon_left">
      <slot name="icon-left" />
    </span>

    <input
      v-model="compValue"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      class="input"
    />

    <span
      v-if="hasIconRight && hasValue"
      @click="reset"
      class="input-icon input-icon_right"
    >
      <slot name="icon-right" />
    </span>
  </label>
</template>

<script>
export default {
  name: "AppInput",

  props: {
    value: {
      required: true,
    },

    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },
  },

  computed: {
    compValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      },
    },

    inputClasses() {
      return {
        "input_has-icon-left": this.hasIconLeft,
        "input_has-icon-right": this.hasIconRight,
      };
    },

    hasIconLeft() {
      return !!this.$slots["icon-left"];
    },

    hasIconRight() {
      return !!this.$slots["icon-right"];
    },

    hasValue() {
      return !!this.value;
    },
  },

  methods: {
    reset() {
      this.$emit("input", "");
    },
  },
};
</script>

<style src="./styles.styl" lang="stylus" scoped></style>
