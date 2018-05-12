<template>
  <progress
    :value="`${role * 20}`"
    class="progress is-primary"
    max="100">{{ role * 20 + "%" }}</progress>
</template>

<script>
export default {
  name: 'PlayerRole',
  props: {
    role: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 5
    }
  }
}
</script>
