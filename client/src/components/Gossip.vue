<template>
  <div class='card'>
    <div class='bg-image hover-overlay ripple' data-mdb-ripple-color='light'>
      <img :src="gossip.image" style="width: 100%"/>
      <a href=''>
        <div class='mask' :style="{ 'background-color': 'rgba(251, 251, 251, 0.15)' }"></div>
      </a>
    </div>
    <div class='card-body'>
      <h5 class='card-title'>{{ gossip.author }}</h5>
      <p class='card-text'>{{ gossip.content }}</p>
      <a :href="domainName + 'gossips/'+ gossip._id" class='btn btn-primary'>Read</a>
    </div>
  </div>
</template>

<script>
  const domainName = window.location.href

  export default {
    name: 'gossip-component',
    props: {
      gossip: Object,
    },
    data() {
      return {
        domainName: domainName,
      }
    }
  };
</script>