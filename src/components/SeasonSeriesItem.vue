<template>
  <tr>
    <td><router-link :to="`/teams/${series.home_id}`">{{ series.home_name }}</router-link></td>
    <td class="has-text-centered">{{ series.home_score }} - {{ series.away_score }}</td>
    <td class="has-text-right"><router-link :to="`/teams/${series.away_id}`">{{ series.away_name }}</router-link></td>
  </tr>
</template>

<script>
export default {
  name: 'SeasonSeriesItem',
  props: {
    series: {
      type: Object,
      required: true,
      validator: value => value.home_id && value.away_id
    }
  }
}
</script>
