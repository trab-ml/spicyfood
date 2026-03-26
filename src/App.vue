<template>
    <Header class="border border-solid border-black text-center" />
    <main class="border border-dashed border-black text-center">
        <RouterView />
    </main>
    <Footer class="border border-solid border-black text-center" />
</template>

<script setup lang="js">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
