<template>
  <div class="Vote" justify="center" style="width: 100%;">
    <b-spinner variant="primary" type="grow" label="Spinning" v-if="summit_show"></b-spinner>
    <div class="alert" v-if="alert_show">
      <br>
      <b-alert variant="danger" show>{{ alert_text }}</b-alert>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Vote',
  components: {
    // HelloWorld
  },
  data: () => ({
    player: '',
    alert_show: false,
    alert_text: '',
    summit_show: true,
  }),
  methods: {
  },
  created: function () {
    
  }
}
</script>

<style>
.Vote{
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>