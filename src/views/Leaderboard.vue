<template>
  <div class="Vote" justify="center" style="width: 100%;">
    <b-spinner type="grow" label="Spinning" v-if="summit_show" style="background-color: #DAAA49;"></b-spinner>
    <div class="alert" v-if="alert_show">
      <br>
      <b-alert variant="danger" show>{{ alert_text }}</b-alert>
    </div>

    <div v-if="!summit_show">
      <b-card style="background-color: #b7634b;" v-if="!summit_show">
        <h3 style="color: #ffffff;">快速跳轉至...</h3>
        <b-list-group v-for="ball in json_list" :key="ball">
          <b-list-group-item :href="'#' + ball.title">{{ ball.title }}</b-list-group-item>
        </b-list-group>
      </b-card><br>

      <b-card-group v-for="ball in json_list" :key="ball" :id='ball.title'>
        <b-card>
          <h2>{{ ball.title }}</h2>

          <b-row align-v="center">
            <b-col lg="9" class="my-1" align-v="center">
            </b-col>

            <b-col lg="3" class="my-1" align-v="center">
              <b-form-group
                label-for="filterInput"
                class="mb-0"
              >
                <b-input-group size="sm">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    id="filterInput"
                    placeholder="輸入以搜尋"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">清除</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-table striped hover 
            :items="ball.player" 
            :fields="fields" 
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            :current-page="currentPage"
            @filtered="onFiltered">
            <template v-slot:cell(votes)="data">
              <h5><b-badge>{{ data.item.votes }} 票</b-badge></h5>
            </template>
          </b-table>

          <b-row align-v="center">
            <b-col lg="9" class="my-1" align-v="center">
            </b-col>

            <b-col lg="3" class="my-1" align-v="center">
              <b-form-group
                label="顯示資料筆數"
                label-cols-sm="6"
                label-cols-md="4"
                label-cols-lg=""
                label-align-sm="right"
                label-size=""
                label-for="perPageSelect"
                class="mb-0"
              >
                <b-form-select
                  v-model="perPage"
                  id="perPageSelect"
                  size="sm"
                  :options="pageOptions"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card><br>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  components: {
    
  },
  data: () => ({
    alert_show: false,
    alert_text: '',
    summit_show: true,
    perPage: 5,
    pageOptions: [5, 10, 15, 20, 50, 100],
    filter: null,
    filterOn: [],
    totalRows: 1,
    currentPage: 1,
    fields: [
      {
        key: 'index',
        label: '排名',
        sortable: true
      },
      {
        key: 'name',
        label: '姓名',
        sortable: true
      },
      {
        key: 'place',
        label: '位置',
        sortable: true
      },
      {
        key: 'votes',
        label: '得票數',
        sortable: true,
      }
    ],
    json_list: [],
  }),
  mounted() {
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created: function () {
    this.alert_show = false
    this.summit_show = false
    this.info_show = true
    this.json_list = this.GLOBAL.leader_board_data
  }
}
</script>

<style>
.Vote{
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>