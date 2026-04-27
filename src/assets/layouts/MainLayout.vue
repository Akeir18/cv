<script setup lang="ts">
import FooterComponent from '../components/layout/FooterComponent.vue';
import HeaderComponent from '../components/layout/HeaderComponent.vue';

</script>

<template>
    <header-component />
    <main>
        <slot />
    </main>
    <footer-component />
</template>

<style lang="scss">
main {
    background-color: $bg-primary;
    color: $text-main;
    min-height: calc(100dvh - calc($header-footer-height * 2));
    padding: $spacing-xs;

    @include responsive(mobile) {
        padding: $spacing-sm;
    }

    @include responsive(tablet) {
        padding: $spacing-md;
    }

    @include responsive(desktop) {
        padding: $spacing-lg;
    }

    @include responsive(wide) {
        padding: $spacing-xl;
    }
}
</style>