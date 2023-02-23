<template>
  <main class='my-5'>
    <div class='container'>
      <h2 class='mb-5 text-center'><strong>Gossips</strong></h2>
      <div class="row">
        <div class="col-md-9 mb-4">
          <section class='text-center'>
            <div class='row'>
              <div class='col-lg-4 col-md-6 mb-4' v-for="gossip in gossips">
                <Gossip :gossip="gossip"/>
              </div>              
            </div>
          </section>
        </div>
        <div class="col-md-3 mb-4">
          <Form />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

import Form from '../components/Form.vue'
import Gossip from '../components/Gossip.vue'

export default {
  name: 'home-page',
  components: {
    Form,
    Gossip
  },
  data() {
    return {
      gossips: []
    }
  },
  methods: {
    async fetchGossips() {
      const res = await axios.get('http://localhost:5000/gossips')
      this.gossips = res.data
    },
  },
  async mounted() {
    await this.fetchGossips()
  }
};
</script>