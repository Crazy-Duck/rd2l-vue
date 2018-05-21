<template>
  <tr>
    <td><router-link :to="`/team/${series.home.id}`">{{ series.home.name }}</router-link></td>
    <td class="has-text-centered">{{ series.score }}</td>
    <td class="has-text-right"><router-link :to="`/team/${series.away.id}`">{{ series.away.name }}</router-link></td>
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
