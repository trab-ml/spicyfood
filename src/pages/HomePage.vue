<template>
    <section>
        <span class="badge bg-(--secondary) text-(--classic-white)">{{
            $t("homepage.label")
        }}</span>
        <h1 class="text-6xl font-black">
            <span>{{ $t("homepage.headingOne.partOne") }}</span> <br>
            <span>{{ $t("homepage.headingOne.partTwo") }}</span> <br>
            <span class="text-(--primary)">{{
                $t("homepage.headingOne.partThree")
            }}</span>
        </h1>
        <span>{{$t("homepage.description")}}</span>
    </section>
</template>

<script setup lang="ts"></script>
