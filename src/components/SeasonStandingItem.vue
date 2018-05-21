<template>
  <tr>
    <th>{{ idx + 1 }}</th>
    <td><router-link :to="`/team/${team.id}`">{{ team.name }}</router-link></td>
    <td>{{ team.wins }}</td>
    <td>{{ team.loss }}</td>
    <td>{{ team.ties }}</td>
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
