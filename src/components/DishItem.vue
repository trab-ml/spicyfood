<template>
    <div :class="dish.boxClass">
        <img
            :src="dish.imgSrc"
            :alt="dish.imgAlt"
            :class="dish.imgClass"
        />
        <div class="flex justify-center -mt-5">
            <div
                :class="dish.dropdownClass"
            >
                <div tabindex="0" role="button" class="text-(--primary)">
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
                        <h4 class="card-title text-lg">{{ dish.name }}</h4>
                        <p class="text-lg font-light">{{ dish.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type DishItemType from '@/types/DishItemType';

const props = defineProps<{dish: DishItemType}>();
</script>
