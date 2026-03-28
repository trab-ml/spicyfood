<template>
    <header>
        <div class="navbar shadow-sm text-(--primary) gap-2.75">
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
                        class="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
                    >
                        <li><a class="text-lg">{{ $t("header.navbarStart.reserve") }}</a></li>
                        <li><a class="text-lg">{{ $t("header.navbarStart.news") }}</a></li>
                        <li><a class="text-lg">{{ $t("header.navbarStart.contact") }}</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="inline-block text-2xl font-extrabold">{{ $t("header.navbarCenter.logoText") }}</a>
            </div>
            <div class="navbar-end">
                <a class="btn rounded-xl text-md text-(--primary) border border-solid border-(--primary) md:text-lg">{{ $t("header.navbarStart.reserve") }}</a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts"></script>
