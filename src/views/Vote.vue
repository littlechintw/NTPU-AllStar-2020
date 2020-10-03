<template>
  <div class="Vote" justify="center" style="width: 100%;">
    <div class="mt-3">

      <b-card-group v-for="ball in list_data" :key="ball">
        <b-card>
          <b-container class="bv-example-row">
            <b-row align-v="center">
              <b-col style="width: 20%;"  cols="3">
                <b-img :src="ball.img" fluid alt="Responsive image" style="width: 10em;"></b-img>
              </b-col>
              <b-col style="width: 50%;"  cols="6">
                <h2>{{ ball.title }}</h2>
                <h4>{{ ball.title_en }}</h4>
              </b-col>
              <b-col style="width: 20%;" cols="3">
                <b-button size="lg" :href="ball.url" style="color:white;">Vote!</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-card-group>

      <br>
      <p style="font-size:0.1em;color: gray">
        Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  components: {
  },
  data: () => ({
    list_data: [],
  }),
  methods: {
    
  },
  created: function () {
    this.list_data = this.GLOBAL.vote_list
  }
}
</script>

<style>
.Vote{
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>