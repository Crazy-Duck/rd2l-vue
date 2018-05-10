<template>
  <th @click="sort()">
    <abbr
      :title="title">{{ text }}</abbr>
    <font-awesome-icon
      v-if="!sorted"
      icon="sort"/>
    <font-awesome-icon
      v-else
      :icon="arrow"/>
  </th>
</template>

<style scoped>
  th {
    cursor: pointer;
  }
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    sorted: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      direction: -1
    }
  },
  computed: {
    arrow: function () {
      return this.direction < 0 ? 'sort-down' : 'sort-up'
    }
  },
  methods: {
    sort () {
      this.direction *= -1
      this.$emit('sort', this.direction)
    }
  }
}
</script>
