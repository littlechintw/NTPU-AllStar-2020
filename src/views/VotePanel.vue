<template>
  <div class="Vote" justify="center" style="width: 100%;">
    <b-spinner type="grow" label="Spinning" v-if="summit_show" style="background-color: #DAAA49;"></b-spinner>
    <div class="alert" v-if="alert_show">
      <br>
      <b-alert variant="danger" show>{{ alert_text }}</b-alert>
    </div>
    <div v-if="!summit_show">
      <h1>{{ vote_title }}</h1><br>
    </div>

    <b-card style="background-color: #b7634b;" v-if="!summit_show">
      <h3 style="color: #ffffff;">快速跳轉至...</h3>
      <b-list-group v-for="place in json_list" :key="place">
        <b-list-group-item :href="'#' + place.subtitle">{{ place.subtitle }}</b-list-group-item>
      </b-list-group>
    </b-card><br>

    <b-card-group v-for="place in json_list" :key="place">
      <div :id='place.subtitle'>
        <b-card style="background-color: #f8ddba;">
          <h2>{{ place.subtitle }}</h2>
          <p>-----</p>
          <b-alert variant="info" show v-if="info_show">此項目可投票數剩餘 {{ place.vote_num }} 票</b-alert>
          <b-card-text>

            <b-card-group deck>
              <b-card v-for="data in place.player" :key="data" :title="data.title" :img-src="data.image" img-alt="Image" img-top tag="article" style="min-width: 25%;background-color: #fcf3e7;" class="mb-2">
                <template v-slot:header>
                  <h5 class="mb-0">目前擁有 {{ data.votes }} 票</h5>
                </template>
                <b-card-text>
                  {{ data.text }}
                </b-card-text>
                <div v-if="data.open">
                  <b-dropdown :text="data.btn_text" variant="primary">
                    <b-dropdown-text style="background-color:orange;">確定投票？投票完即無法修改👇</b-dropdown-text>
                    <b-dropdown-item :href="data.vote_url" style="color:white;">確定！</b-dropdown-item>
                  </b-dropdown>
                </div>
                <div v-if="!data.open">
                  <b-button variant="primary" style="color:white;" disabled>
                    {{ data.btn_text }} 
                  </b-button>
                </div>
              </b-card>
            </b-card-group>

          </b-card-text>
        </b-card><br>
      </div>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  components: {
    
  },
  data: () => ({
    ball: '',
    vote_title: '',
    json_list: [],
    alert_show: false,
    alert_text: '',
    summit_show: true,
    info_show: false,
  }),
  methods: {
  },
  created: function () {
    this.ball = this.$route.params.id
    this.alert_text = ''
    this.alert_show = false
    this.summit_show = false
    this.info_show = false
    if(this.ball == 1){
      this.json_list = this.GLOBAL.Basketball_data['json_list']
      this.vote_title = this.GLOBAL.Basketball_data['title']
    }
    else if(this.ball == 2){
      this.json_list = this.GLOBAL.Volleyball_data['json_list']
      this.vote_title = this.GLOBAL.Volleyball_data['title']
    }
    else if(this.ball == 3){
      this.json_list = this.GLOBAL.Badminton_data['json_list']
      this.vote_title = this.GLOBAL.Badminton_data['title']
    }
    else if(this.ball == 5){
      this.json_list = this.GLOBAL.Softball_data['json_list']
      this.vote_title = this.GLOBAL.Softball_data['title']
    }
  }
}
</script>

<style>
.Vote{
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>