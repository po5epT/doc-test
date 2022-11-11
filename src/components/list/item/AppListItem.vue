<template>
  <div class="item" :class="itemClasses">
    <div v-if="item.id" class="item__inner">
      <AppButton rounded class="item__expand" @click.native="toggle">
        <template #icon>
          <ArrowUpIcon v-if="isExpanded" />
          <ArrowDownIcon v-else />
        </template>
      </AppButton>

      <div class="item__label">{{ item.label }}</div>

      <div class="item__description">
        {{ item.description }}
      </div>

      <AppControls class="item__controls" />
    </div>

    <Draggable
      v-if="item.subItems.length"
      :list="item.subItems"
      group="docs"
      handle=".controls__move"
      class="item__sub-items"
      :class="subItemsClasses"
    >
      <TransitionGroup>
        <div
          class="sub-item"
          v-for="subItem in item.subItems"
          :key="subItem.id"
        >
          <div class="sub-item__inner">
            <div class="sub-item__label">{{ subItem.name }}</div>

            <div class="sub-item__requirement">
              <span v-if="subItem.required">Обязательный</span>
            </div>

            <div class="sub-item__description">
              {{ subItem.description }}
            </div>

            <AppControls class="sub-item__controls" />
          </div>
        </div>
      </TransitionGroup>
    </Draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";

import AppControls from "@/components/controls/AppControls";
import AppButton from "@/components/button/AppButton";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

export default {
  name: "AppListItem",

  components: {
    Draggable,
    AppControls,
    AppButton,
    ArrowUpIcon,
    ArrowDownIcon,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      isExpanded: false,
    };
  },

  computed: {
    isDetached() {
      return !this.item.id;
    },

    itemClasses() {
      return {
        item_expanded: this.isExpanded,
        item_detached: this.isDetached,
      };
    },

    hasSubItems() {
      return this.item.subItems.length;
    },

    subItemsClasses() {
      return {
        "item__sub-items_detached": this.isDetached,
      };
    },
  },

  methods: {
    toggle() {
      if (!this.hasSubItems) return;

      this.isExpanded = !this.isExpanded;
    },
  },

  created() {
    if (this.hasSubItems) this.isExpanded = true;
  },
};
</script>

<style src="./styles.styl" lang="stylus" scoped></style>
