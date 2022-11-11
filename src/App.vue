<template>
  <div id="app">
    <div class="page">
      <div class="header page__header">
        <h1 class="title page__title">Документы</h1>

        <AppButton rounded class="header__button">
          <template #icon>
            <BookmarkIcon class="bookmark-icon" />
          </template>
        </AppButton>

        <AppButton rounded class="header__button">
          <template #icon>
            <PlusIcon class="plus-icon" />
          </template>

          Новый тип
        </AppButton>

        <AppButton rounded class="header__button">
          <template #icon>
            <PlusIcon class="plus-icon" />
          </template>

          Новый документ
        </AppButton>
      </div>

      <div class="page__search search">
        <AppInput v-model="searchQuery" placeholder="Поиск">
          <template #icon-left>
            <SearchIcon class="search-icon" />
          </template>

          <template #icon-right>
            <TimesIcon class="times-icon" />
          </template>
        </AppInput>
      </div>

      <Draggable
        v-if="documents.length"
        v-model="filteredDocuments"
        group="category"
        handle=".controls__move"
        class="page__documents items"
      >
        <TransitionGroup>
          <AppListItem
            v-for="item in filteredDocuments"
            :key="item.id"
            :item="item"
          />
        </TransitionGroup>
      </Draggable>
    </div>
  </div>
</template>

<script>
import Draggable from "vuedraggable";

import AppListItem from "@/components/list/item/AppListItem";
import AppButton from "@/components/button/AppButton";
import AppInput from "@/components/input/AppInput";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import TimesIcon from "@/components/icons/TimesIcon";

import data from "./data.json";

export default {
  name: "App",

  components: {
    Draggable,
    AppListItem,
    AppInput,
    AppButton,
    BookmarkIcon,
    PlusIcon,
    SearchIcon,
    TimesIcon,
  },

  data() {
    return {
      searchQuery: "",

      documents: [],
    };
  },

  computed: {
    filteredDocuments() {
      const regEx = new RegExp(`${this.searchQuery}`, "i");
      if (!this.searchQuery) return this.documents;

      return this.documents
        .map((category) => {
          const cat = {
            ...category,
            subItems: category.subItems.filter((item) => regEx.test(item.name)),
          };

          if (cat.subItems.length) {
            cat.foundDocs = true;
          }

          return cat;
        })
        .filter((category) => regEx.test(category.label) || category.foundDocs);
    },
  },

  created() {
    this.documents = data;
  },
};
</script>

<style src="./stylus/app.styl" lang="stylus" scoped></style>
