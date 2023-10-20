<script lang="ts">
import {defineComponent} from 'vue'
import {increment} from "@/utils/helper";

export default defineComponent({
  name: "MyStepper",
  methods: {
    incrementNum(current: number, max: number) {
      this.current = increment(current, max)
    }
  },
  data() {
    return {
      current: 0
    }
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
  }
})
</script>

<template>
  <div>
    <h1 data-testid="stepper-value">Stepper: {{ current }}</h1>
    <button class="mybutton" data-testid="increment" @click="incrementNum(current, max)" type="button"/>
  </div>
</template>

<style scoped>
.mybutton{
  height: 30px;
  width: 60px;
}

</style>
