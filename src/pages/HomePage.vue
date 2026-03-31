<template>
    <section
        class="px-5 my-8 p-2 text-start bg-(--light-pink) border border-amber-400"
    >
        <span class="badge bg-(--secondary) text-(--classic-white)">{{
            $t("homepage.label")
        }}</span>
        <h1 class="my-4 text-6xl font-black">
            <span>{{ $t("homepage.headingOne.partOne") }}</span> <br />
            <span class="">{{ $t("homepage.headingOne.partTwo") }}</span> <br />
            <span class="text-(--primary)">{{
                $t("homepage.headingOne.partThree")
            }}</span>
        </h1>
        <span class="text-lg text-(--light-dark)">{{
            $t("homepage.description")
        }}</span>
        <span class="flex w-full justify-between mt-5 text-(--primary)"
            ><span class="inline w-3/6 mt-2.5 border-t"></span>
            <silverware-fork-knife class="inline mx-4 text-(--primary)" />
            <span class="inline w-3/6 mt-2.5 border-t"></span
        ></span>
        <div
            class="relative h-96 my-6 overflow-x-hidden overflow-y-hidden drop-shadow-xl/50 drop-shadow-primary"
        >
            <img
                class="ml-8 rounded-l-[6rem] object-cover w-full h-full"
                src="/spicy-african-dish.png"
                alt="Gourmet spicy African dish with plantains and vibrant garnish"
            />
        </div>
    </section>
    <section class="px-5 py-12 bg-(--light-pink) text-left">
        <h2 class="text-4xl font-black">
            {{ $t("homepage.secretSignature.heading") }}
        </h2>
        <p class="my-4 text-(--primary) text-sm font-extrabold">
            {{ $t("homepage.secretSignature.subheading") }}
            <span class="inline-block w-8 ml-1 mb-0.5 border-t border-2" />
        </p>
        <p>{{ $t("homepage.secretSignature.description") }}</p>
    </section>
</template>

<script setup lang="ts">
import SilverwareForkKnife from "vmdi/SilverwareForkKnife.vue";
</script>
