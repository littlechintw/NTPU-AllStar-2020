<template>
  <div class="Logout">
    <b-card class="text-center">
      <div class="" align="center" v-if="verify_show">
        <h2>登出ㄌ (￣y▽￣)╭ </h2>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  data: () => ({
    verify_show: true,
  }),
  created: function () {
  }
}
</script>

<style>
.Rules{
  margin-left : 3pt;
	margin-right: 6pt;
}
</style>