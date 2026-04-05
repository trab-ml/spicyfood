<template>
    <footer
        class="px-7 my-4 text-center text-sm text-black/50 tracking-widest border-t border-(--primary)/40"
    >
        <nav class="flex flex-col py-5">
            <a :href="`mailto:${$t('footer.email')}`">{{
                $t("footer.email")
            }}</a>
            <a :href="`mailto:${$t('footer.creator.contact')}`">{{
                $t("footer.creator.name")
            }}</a>
            <span>
                <a>{{ $t("footer.policy") }}</a>
                <a class="ms-5">{{ $t("footer.privacy") }}</a>
            </span>
        </nav>
        <p class="text-(--primary) text-md font-black">
            {{ $t("footer.copyright") }}
        </p>
    </footer>
</template>
