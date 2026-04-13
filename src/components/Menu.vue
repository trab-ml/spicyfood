<template>
    <div id="menu" class="mt-4 px-6 pt-6 pb-2 text-left">
        <div class="flex items-center justify-between">
            <h2 class="text-4xl font-bold">
                {{ $t("homepage.menu.heading") }}
            </h2>
            <span
                class="p-1 text-sm text-(--primary) font-bold tracking-wide border rounded-md"
                >{{ $t("homepage.menu.mostPopulars") }}</span
            >
        </div>
        <div class="grid grid-cols-3 grid-flow-dense gap-4 my-6">
            <DishItem
                v-for="dish in dishList"
                :dish="{
                    ...dish,
                    name: $t(`homepage.menu.${dish.id}.name`),
                    description: $t(`homepage.menu.${dish.id}.description`),
                    imgSrc: $t(`homepage.menu.${dish.id}.imgSrc`),
                    imgAlt: $t('`homepage.menu.${dish.id}.imgAlt`'),
                }"
                :hasDropdown="true"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import DishItem from "./DishItem.vue";

const ODD_BOX_CLASS = "col-span-2 row-span-2 sm:row-span-1";
const ODD_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-center font-bold";
const EVEN_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-left font-bold sm:dropdown-center";

const dishList = [
    {
        id: "dishOne",
        boxClass: ODD_BOX_CLASS,
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-80",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    {
        id: "dishTwo",
        boxClass: "sm:h-fit",
        imgClass: "rounded-4xl sm:w-full sm:h-80",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
    {
        id: "dishThree",
        boxClass: ODD_BOX_CLASS,
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-75",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    {
        id: "dishFour",
        boxClass: "row-span-3 col-start-3 sm:row-span-1",
        imgClass: "object-cover w-full h-75",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
];
</script>
