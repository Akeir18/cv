<template>
    <header>
        <h1>Header</h1>
    </header>
</template>

<style lang="scss">
header {
    background-color: $bg-secondary;
    color: $text-main;
    height: 75px;
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