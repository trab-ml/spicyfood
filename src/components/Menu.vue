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
            <DishItem v-for="dish in dishList" :dish="{ ...dish }" :hasDropdown=true />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type DishItemType from "@/types/DishItemType";
import DishItem from "./DishItem.vue";
import dishOne from "@images/attieke-plantains-poisson.png";
import dishTwo from "@images/burger-bananes-plantains.png";
import dishThree from "@images/tcheboudiene-poisson.png";
import dishFour from "@images/sauce-mafe-poulet.png";

const { t } = useI18n();

const ODD_BOX_CLASS = "col-span-2 row-span-2 sm:row-span-1";
const ODD_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-center font-bold";
const EVEN_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-left font-bold sm:dropdown-center";

const dishList: DishItemType[] = [
    {
        boxClass: ODD_BOX_CLASS,
        name: t("homepage.menu.dishOne.name"),
        description: t("homepage.menu.dishOne.description"),
        imgSrc: dishOne,
        imgAlt: t("homepage.menu.dishOne.imgAlt"),
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-80",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    {
        boxClass: "sm:h-fit",
        name: t("homepage.menu.dishTwo.name"),
        description: t("homepage.menu.dishTwo.description"),
        imgSrc: dishTwo,
        imgAlt: t("homepage.menu.dishTwo.imgAlt"),
        imgClass: "rounded-4xl sm:w-full sm:h-80",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
    {
        boxClass: ODD_BOX_CLASS,
        name: t("homepage.menu.dishThree.name"),
        description: t("homepage.menu.dishThree.description"),
        imgSrc: dishThree,
        imgAlt: t("homepage.menu.dishThree.imgAlt"),
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-75",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    {
        boxClass: "row-span-3 col-start-3 sm:row-span-1",
        name: t("homepage.menu.dishFour.name"),
        description: t("homepage.menu.dishFour.description"),
        imgSrc: dishFour,
        imgAlt: t("homepage.menu.dishFour.imgAlt"),
        imgClass: "object-cover w-full h-75",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
];
</script>
