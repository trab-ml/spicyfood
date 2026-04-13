<template>
    <footer
        id="footer"
        class="px-7 my-4 text-center text-sm text-black/50 tracking-widest border-t border-(--primary)/40"
    >
        <nav class="flex flex-col items-center py-5">
            <a class="hover:text-(--primary)" :href="`mailto:${$t('footer.email')}`">{{
                $t("footer.email")
            }}</a>
            <a class="hover:text-(--primary)" :href="`${$t('footer.creator.contact')}`">{{
                $t("footer.creator.name")
            }}</a>
        </nav>
        <p class="text-(--primary) text-md font-black">
            {{ $t("footer.copyright") }}
        </p>
    </footer>
</template>
