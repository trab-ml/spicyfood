<template>
    <div class="my-4 px-6 py-6 text-left">
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
            <!-- V-FOR... -->
            <!-- <div class="col-span-2 row-span-2 sm:row-span-1">
                <img
                    src="/attieke-plantains-poisson.png"
                    alt="attieke plantains poisson"
                    class="object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-80"
                />
                <div class="flex justify-center -mt-5">
                    <div
                        class="dropdown dropdown-hover dropdown-top dropdown-center font-bold"
                    >
                        <div
                            tabindex="0"
                            role="button"
                            class="text-(--primary)"
                        >
                            <svg
                                tabindex="0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="h-12 w-12 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 ml-10 shadow-sm"
                        >
                            <div tabindex="0" class="card-body tracking-wide">
                                <h4 class="card-title text-lg">
                                    {{ $t("homepage.menu.dishOne.name") }}
                                </h4>
                                <p class="text-lg font-light">
                                    {{
                                        $t("homepage.menu.dishOne.description")
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:h-fit">
                <img
                    src="/burger-bananes-plantains.png"
                    alt="burger bananes plantains"
                    class="rounded-4xl sm:w-full sm:h-80"
                />
                <div class="flex justify-center -mt-5">
                    <div
                        class="dropdown dropdown-hover dropdown-top dropdown-left font-bold sm:dropdown-center"
                    >
                        <div
                            tabindex="0"
                            role="button"
                            class="text-(--primary)"
                        >
                            <svg
                                tabindex="0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="h-12 w-12 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 ml-10 shadow-sm"
                        >
                            <div tabindex="0" class="card-body tracking-wide">
                                <h4 class="card-title">
                                    {{ $t("homepage.menu.dishTwo.name") }}
                                </h4>
                                <p class="text-lg font-light">
                                    {{
                                        $t("homepage.menu.dishTwo.description")
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 row-span-2 sm:row-span-1">
                <img
                    src="/tcheboudiene-poisson.png"
                    alt="tcheboudiene poisson"
                    class="object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-75"
                />
                <div class="flex justify-center -mt-5">
                    <div
                        class="dropdown dropdown-hover dropdown-top dropdown-center font-bold"
                    >
                        <div
                            tabindex="0"
                            role="button"
                            class="text-(--primary)"
                        >
                            <svg
                                tabindex="0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="h-12 w-12 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 ml-10 shadow-sm"
                        >
                            <div tabindex="0" class="card-body tracking-wide">
                                <h4 class="card-title">
                                    {{ $t("homepage.menu.dishThree.name") }}
                                </h4>
                                <p class="text-lg font-light">
                                    {{
                                        $t(
                                            "homepage.menu.dishThree.description",
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-span-3 col-start-3 sm:row-span-1">
                <img
                    src="/sauce-mafe-poulet.png"
                    alt="sauce mafe poulet"
                    class="object-cover w-full h-75"
                />
                <div class="flex justify-center -mt-5">
                    <div
                        class="dropdown dropdown-hover dropdown-top dropdown-left font-bold sm:dropdown-center"
                    >
                        <div
                            tabindex="0"
                            role="button"
                            class="text-(--primary)"
                        >
                            <svg
                                tabindex="0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="h-12 w-12 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 mx-0 px-0 shadow-sm"
                        >
                            <div tabindex="0" class="card-body tracking-wide">
                                <h4 class="card-title">
                                    {{ $t("homepage.menu.dishFour.name") }}
                                </h4>
                                <p class="text-lg font-light">
                                    {{
                                        $t("homepage.menu.dishFour.description")
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {t} = useI18n();

const ODD_BOX_CLASS = "col-span-2 row-span-2 sm:row-span-1";
const ODD_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-center font-bold";
const EVEN_DROPDOWN_CLASS =
    "dropdown dropdown-hover dropdown-top dropdown-left font-bold sm:dropdown-center";

const dishList = {
    dishOne: {
        boxClass: ODD_BOX_CLASS,
        name: t("homepage.menu.dishOne.name"),
        description: t("homepage.menu.dishOne.description"),
        imgSrc: t("homepage.menu.dishOne.imgSrc"),
        imgAlt: t("homepage.menu.dishOne.imgAlt"),
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-80",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    dishTwo: {
        boxClass: "sm:h-fit",
        name: t("homepage.menu.dishTwo.name"),
        description: t("homepage.menu.dishTwo.description"),
        imgSrc: t("homepage.menu.dishTwo.imgSrc"),
        imgAlt: t("homepage.menu.dishTwo.imgAlt"),
        imgClass: "rounded-4xl sm:w-full sm:h-80",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
    dishThree: {
        boxClass: ODD_BOX_CLASS,
        name: t("homepage.menu.dishThree.name"),
        description: t("homepage.menu.dishThree.description"),
        imgSrc: t("homepage.menu.dishThree.imgSrc"),
        imgAlt: t("homepage.menu.dishThree.imgAlt"),
        imgClass: "object-cover w-100 h-50 rounded-[4rem] sm:w-full sm:h-75",
        dropdownClass: ODD_DROPDOWN_CLASS,
    },
    dishFour: {
        boxClass: "row-span-3 col-start-3 sm:row-span-1",
        name: t("homepage.menu.dishFour.name"),
        description: t("homepage.menu.dishFour.description"),
        imgSrc: t("homepage.menu.dishFour.imgSrc"),
        imgAlt: t("homepage.menu.dishFour.imgAlt"),
        imgClass: "object-cover w-full h-75",
        dropdownClass: EVEN_DROPDOWN_CLASS,
    },
};
</script>
