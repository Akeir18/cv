<template>
    <footer>
        <h1>Footer</h1>
    </footer>
</template>

<style lang="scss">
footer {
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