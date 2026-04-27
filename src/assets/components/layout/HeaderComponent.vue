<script setup lang="ts">
import NameComponent from './base/NameComponent.vue';
</script>

<template>
    <header>
        <name-component />
    </header>
</template>

<style lang="scss">
header {
    position: sticky;
    top: 0px;
    background-color: $bg-secondary;
    color: $text-main;
    height: $header-footer-height;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0px $spacing-xs;

    @include responsive(mobile) {
        padding: 0px $spacing-sm;
    }

    @include responsive(tablet) {
        padding: 0px $spacing-md;
    }

    @include responsive(desktop) {
        padding: 0px $spacing-lg;
    }

    @include responsive(wide) {
        padding: 0px $spacing-xl;
    }
}
</style>