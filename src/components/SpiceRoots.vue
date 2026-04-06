<template>
    <section class="px-5 py-12 bg-(--neutral) text-left text-(--classic-white)">
        <h2 class="text-4xl font-black">
            {{ $t("homepage.spiceRoots.heading") }}
        </h2>
        <p class="my-4 text-sm font-light">
            {{ $t("homepage.spiceRoots.subheading") }}
        </p>

        <div class="carousel rounded-box">
            <DishItem
                v-for="dish in spiceDishList"
                :dish="{ ...dish }"
                :hasDropdown="false"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import DishItem from "./DishItem.vue";
import type DishItemType from "@/types/DishItemType";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { tm } = useI18n();

const spiceDishList = computed<DishItemType[]>(() => {
    return tm("homepage.spiceRoots.dishes") as DishItemType[];
});
</script>
