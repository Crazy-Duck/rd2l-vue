<template>
  <tr>
    <td>{{ idx + 1 }}</td>
    <td><router-link :to="`/player/${player.id}`">{{ player.steamname }}</router-link></td>
    <td class="medal">
      <img :src="`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${player.rank % 10}.png`">
      <img :src="`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${Math.floor(player.rank / 10)}.png`">
    </td>
  </tr>
</template>

<style scoped>
  .medal {
    padding-top: 0;
    padding-bottom: 0;
  }
  img {
    position: absolute;
    height: 2em;
  }
</style>

<script>
export default {
  name: 'PlayerListItem',
  props: {
    player: {
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
