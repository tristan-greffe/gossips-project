<template>
  <section class="shadow-5 p-4">
    <h5 class='card-title mb-2 text-center'>Create Gossip</h5>
    <form @submit.prevent="onSubmit">
      <div class="form-outline mb-4">
        <input type="text" id="form6Example3" class="form-control" v-model="form.author" >
        <label class="form-label" for="form6Example3" style="margin-left: 0px;">Author</label>
      <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 98.4px;"></div><div class="form-notch-trailing"></div></div></div>
      <div class="form-outline mb-4">
        <textarea class="form-control" id="form6Example7" rows="4" v-model="form.content" ></textarea>
        <label class="form-label" for="form6Example7" style="margin-left: 0px;">Message</label>
      <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 131.2px;"></div><div class="form-notch-trailing"></div></div></div>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
      <button type="submit" class="btn btn-primary btn-block mb-4">Create</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'form-component',
  data() {
    return {
      form: {
        author: null,
        content: null,
        image: null,
      }
    }
  },
  methods: {
    async onSubmit() {
      await axios.post(`http://localhost:5000/gossips?author=${this.form.author}&content=${this.form.content}`)
      this.clear()
      this.$emit('fetchGossips')
    },
    clear() {
      this.form = { author: null, content: null, image: null }
    }
  }
};
</script>