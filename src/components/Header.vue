<template>
    <header>
        <div class="navbar px-4 shadow-sm text-(--primary)">
            <div class="navbar-start">
                <div class="dropdown">
                    <div
                        tabIndex="{0}"
                        role="button"
                        class="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-10 w-10 text-(--primary) font-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        class="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-bold bg-(--neutral) text-(--classic-white)"
                    >
                        <li>
                            <a
                                class="text-lg hover:bg-(--primary)"
                                href="#footer"
                            >
                                <calendar-edit />
                                {{ $t("header.navbarStart.reserve") }}</a
                            >
                        </li>
                        <li>
                            <a
                                class="text-lg hover:bg-(--primary)"
                                href="#menu"
                            >
                                <update />
                                {{ $t("header.navbarStart.news") }}</a
                            >
                        </li>
                        <li>
                            <a
                                class="text-lg hover:bg-(--primary)"
                                href="#footer"
                            >
                                <card-account-phone-outline />
                                {{ $t("header.navbarStart.contact") }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center me-10 sm:me-0">
                <a class="inline-block text-2xl font--extrabold font-[1000]">{{
                    $t("header.navbarCenter.logoText")
                }}</a>
            </div>
            <div class="navbar-end">
                <a
                    class="btn rounded-xl text-md text-(--classic-white) bg-(--primary) md:text-lg"
                    href="#footer"
                    >{{ $t("header.navbarStart.reserve") }}</a
                >
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import CardAccountPhoneOutline from "@vmdi/CardAccountPhoneOutline.vue";
import Update from "@vmdi/Update.vue";
import CalendarEdit from "@vmdi/CalendarEdit.vue";
</script>
