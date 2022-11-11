<template>
  <div class="controls">
    <AppButton class="controls__edit" @click.native="onEdit">
      <template #icon>
        <PenIcon />
      </template>
    </AppButton>

    <AppButton class="controls__delete" @click.native="onDelete">
      <template #icon>
        <TrashIcon />
      </template>
    </AppButton>

    <AppButton class="controls__move" @click.native="onMove">
      <template #icon>
        <ArrowsIcon />
      </template>
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/button/AppButton";
import TrashIcon from "@/components/icons/TrashIcon";
import ArrowsIcon from "@/components/icons/ArrowsIcon";
import PenIcon from "@/components/icons/PenIcon";

export default {
  name: "AppControls",

  components: {
    AppButton,
    TrashIcon,
    ArrowsIcon,
    PenIcon,
  },

  methods: {
    onEdit() {
      this.$emit("edit");
    },

    onDelete() {
      this.$emit("delete");
    },

    onMove() {
      this.$emit("move");
    },
  },
};
</script>

<style src="./styles.styl" lang="stylus" scoped></style>
