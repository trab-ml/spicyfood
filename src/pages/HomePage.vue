<template>
    <section class="px-5 my-8 p-2 text-start bg-(--light-pink)">
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
        <span class="text-lg text-(--light-dark) tracking-widest">{{
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
        <p class="text-lg tracking-widest">
            {{ $t("homepage.secretSignature.description") }}
        </p>

        <div class="flex mt-12 gap-4">
            <div
                class="card bg-base-100 w-1/2 shadow-sm rounded-2xl tracking-wide"
            >
                <figure class="mt-4 px-4">
                    <img
                        src="/vegetable-meat-sauce.png"
                        alt="vegetable meat sauce"
                        class="rounded-2xl"
                    />
                </figure>
                <div class="card-body my-4 px-4 py-0 text-sm md:px-12">
                    <h4 class="card-title text-sm text-(--primary)">
                        {{ $t("homepage.secretSignature.specialityOne.name") }}
                    </h4>
                    <p class="font-extrabold">
                        {{
                            $t(
                                "homepage.secretSignature.specialityOne.description",
                            )
                        }}
                    </p>
                </div>
            </div>
            <div
                class="card bg-base-100 w-1/2 mt-12 shadow-sm rounded-2xl tracking-wide"
            >
                <figure class="mt-4 px-4">
                    <img
                        src="/fruit-juice.png"
                        alt="fruit juice"
                        class="rounded-2xl"
                    />
                </figure>
                <div class="card-body my-4 px-4 py-0 text-sm md:px-12">
                    <h4 class="card-title text-sm text-(--primary)">
                        {{ $t("homepage.secretSignature.specialityTwo.name") }}
                    </h4>
                    <p class="font-extrabold">
                        {{
                            $t(
                                "homepage.secretSignature.specialityTwo.description",
                            )
                        }}
                    </p>
                </div>
            </div>
        </div>
    </section>
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
            <div class="col-span-2 row-span-2 sm:row-span-1">
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
                                        $t("homepage.menu.dishThree.description")
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SilverwareForkKnife from "vmdi/SilverwareForkKnife.vue";
</script>
