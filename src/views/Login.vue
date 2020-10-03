<template>
  <div class="Rules">
    <div class="verify" v-if="verify_show">
      <b-overlay rounded="sm" :show="true">
        <b-card class="text-center">
          <div class="" align="left">
            <h2>登入</h2>
            <b-alert show>將連線至學生資訊系統進行驗證，請使用學生資訊系統帳號密碼</b-alert>
            <b-form @submit="onSubmit">
              <b-form-group id="input-group-1" label="學號" label-for="input-1">
                <b-form-input id="input-1" v-model="form.stu_id" type="number" required placeholder=""></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="密碼" label-for="input-2">
                <b-form-input id="input-2" v-model="form.pwd" type="password" required placeholder=""></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="agree">同意系統驗證</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button type="submit" v-if="summit_show" style="color:white;background-color: #B09131;">登入</b-button>
              <b-spinner type="grow" label="Spinning" v-if="!summit_show" style="background-color: #DAAA49;"></b-spinner>
            </b-form>
            <div class="alert" v-if="alert_show">
              <br>
              <b-alert variant="danger" show>{{ alert_text }}</b-alert>
            </div>
          </div>
        </b-card><br>

        <b-card class="text-center">
          <a>登入發生問題？</a><br>
          <a>寄信至 </a>
          <a href="mailto:ntpu-su-21th-it@googlegroups.com">ntpu-su-21th-it@googlegroups.com</a>
          <a> 尋求幫助吧</a><br><br>
          <a href="https://hackmd.io/@littlechin/2020allstar_policy" target="_blank">隱私權條款</a>
        </b-card>

        <template v-slot:overlay>
          <div class="text-center">
            <p id="cancel-label">已停止使用</p>
          </div>
        </template>
      </b-overlay>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    verify_show: true,
    form: {
      stu_id: '',
      pwd: '',
      checked: []
    },
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
.Rules{
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>