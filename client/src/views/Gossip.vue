<template>
    <main class="mt-5">
      <div class="container">
        <section>
          <div class="row">
            <div class="col-md-6 gx-5 mb-4">
              <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
                <img :src="gossip.image" class="img-fluid" />
                <a href="">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
            </div>
            <div class="col-md-6 gx-5 mb-4">
              <h4><strong>{{ gossip.author }}</strong></h4>
              <p class="text-muted">{{ gossip.content }}</p>
            </div>
          </div>
        </section>

      </div>
    </main>
</template>

<script>
import axios from 'axios'

const gossipId = window.location.pathname.replace('/gossips/','')

export default {
  name: 'gossip-page',
  data() {
    return {
      gossip: []
    }
  },
  methods: {
    async fetchGossips() {
      const res = await axios.get('http://localhost:5000/gossips')
      res.data.forEach((gossip) => {
        if (gossip._id === gossipId) {
          this.gossip = gossip;
        }
      })
    }
  },
  async mounted() {
    await this.fetchGossips()
  }
};
</script>