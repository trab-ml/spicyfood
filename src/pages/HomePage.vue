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
                src="/src/assets/images/spicy-african-dish.png"
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
                        src="/src/assets/images/vegetable-meat-sauce.png"
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
                        src="/src/assets/images/fruit-juice.png"
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
    <Menu />
    <SpiceRoots />
    <section class="px-5 py-16 text-center">
        <span
            class="relative inline-block rounded-4xl p-4 w-fit bg-(--primary)/25"
            ><calendar-month-outline class="text-(--primary)"
        /></span>
        <h2 class="mt-4 text-4xl font-black">
            {{ $t("homepage.callOfAction.heading") }}
        </h2>
        <a
            class="mt-6 mb-4 btn rounded-xl text-lg text-(--classic-white) bg-(--primary) py-8 px-12 shadow-xl shadow-(color:--primary)/50 md:text-lg"
            href="#footer"
            >{{ $t("homepage.callOfAction.bookMsg") }}</a
        >
        <p>{{ $t("homepage.callOfAction.description") }}</p>
    </section>
</template>

<script setup lang="ts">
import SilverwareForkKnife from "@vmdi/SilverwareForkKnife.vue";
import CalendarMonthOutline from "@vmdi/CalendarMonthOutline.vue";
import Menu from "@/components/Menu.vue";
import SpiceRoots from "@/components/SpiceRoots.vue";
</script>
