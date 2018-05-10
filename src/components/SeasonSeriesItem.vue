<template>
  <tr>
    <td>{{ series.home }}</td>
    <td class="has-text-centered">{{ series.score }}</td>
    <td class="has-text-right">{{ series.away }}</td>
  </tr>
</template>

<script>
export default {
  name: 'SeasonSeriesItem',
  props: {
    series: {
      type: Object,
      required: true,
      validator: value => value.home && value.away
    }
  }
}
</script>
