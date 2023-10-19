<script lang="ts">
import {defineComponent} from 'vue'
import {increment} from "@/utils/helper";

export default defineComponent({
  name: "MyStepper",
  methods: {increment},
  props: {
    max: {
      type: Number,
      default: 5
    },
    current: {
      type: Number,
      default: 0
    }
  }
})
</script>

<template>
  <div>
    <h1 data-testid="stepper-value">Stepper: {{ current }}</h1>
    <button data-testid="increment" @click="increment(current, max)" type="button"/>
  </div>
</template>

<style scoped>

</style>
