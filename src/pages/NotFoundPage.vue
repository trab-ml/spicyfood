<template>
    <div class="flex flex-col justify-items-center items-center">
        <h1
            class="mt-5 text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
        >
            {{ $t("notFoundPage.title") }}
        </h1>
        <a href="/" class="text-blue-600 underline underline-offset-4">{{
            $t("notFoundPage.callToAction")
        }}</a>
    </div>
</template>
