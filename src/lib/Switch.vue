<template>
    <div>
        <button class="gulu-switch" @click="toggle" :class="{checked:value}"><span></span></button>
    </div>
</template>
<script lang="ts">
    export default {
        props: {
            value: Boolean
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('update:value', !props.value)
            }
            return {toggle}
        },
    }
</script>
<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .gulu-switch {
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: 2px;
            left: calc(100% - #{$h2} - 2px);
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: left .5s;
        }

        &.checked {
            background: blue;

            > span {
                left: 2px;
            }
        }

        &:focus {
            outline: none;
        }
    }


</style>