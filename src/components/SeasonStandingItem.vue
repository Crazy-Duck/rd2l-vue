<template>
  <tr>
    <th>{{ idx + 1 }}</th>
    <td><router-link :to="`/teams/${team.id}`">{{ team.name }} ({{ team.captain }})</router-link></td>
    <td>{{ team.win }}</td>
    <td>{{ team.loss }}</td>
  </tr>
</template>

<script>
export default {
  name: 'SeasonStandingItem',
  props: {
    team: {
      type: Object,
      required: true
    },
    idx: {
      type: Number,
      required: true,
      validator: value => value >= 0
    }
  }
}
</script>
