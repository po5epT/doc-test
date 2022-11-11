<template>
  <button class="button" :class="buttonClasses">
    <span class="button__icon" :class="iconClasses" v-if="hasIcon">
      <slot name="icon" />
    </span>

    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",

  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonClasses() {
      return {
        button_rounded: this.rounded,
        button_square: this.hasIcon && !this.hasContent,
      };
    },

    iconClasses() {
      return {
        button__icon_left: this.hasIcon && this.hasContent,
      };
    },

    hasContent() {
      return !!this.$slots.default;
    },

    hasIcon() {
      return !!this.$slots.icon;
    },
  },
};
</script>

<style src="./styles.styl" lang="stylus" scoped></style>
