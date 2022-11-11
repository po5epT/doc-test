<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: "AppIcon",

  props: {
    width: {
      type: Number,
      default: 12,
    },

    height: {
      type: Number,
      default: 15,
    },
  },

  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
};
</script>
