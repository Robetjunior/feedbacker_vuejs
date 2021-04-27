<template>
  <div
    :style="{
      width: computedWidth,
      height: height,
    }"
    class="opacity-75 content-loader"
  >
    <span :style="{ animationDuration }" class="content-loader--fx"/>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    maxWidth: {
      default: 100,
      type: Number,
    },
    minWidth: {
      default: 80,
      type: Number,
    },
    animationDuration: {
      type: String,
      default: '1.6s'
    },
    height: {
      default: '1rem',
      type: String,
    },
    height: {
      default: '1rem',
      type: String,
    },

    setup(props) {
      const computedWidth = computed(() => {
        const value = Math.random() * (props.width - props.minWidth)
        return props.width ?? `${Math.floor(value + props.minWidth)}%`
      })

      return {
        computedWidth
      }
    }
  }
}
</script>

<style>

</style>
