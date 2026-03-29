<script setup lang="ts">
import NameComponent from './base/NameComponent.vue';

</script>



<template>
    <footer>
        <name-component />
    </footer>
</template>

<style lang="scss">
footer {
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