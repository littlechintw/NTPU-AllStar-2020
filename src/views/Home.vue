<template>
  <div class="home">
    
    <b-img src="https://i.imgur.com/HMprkjN.jpg" fluid alt="Responsive image"></b-img><br><br>
    <p style="font-size:2em;line-height: 1em;">北大明星賽</p>
    <p style="font-size:2em;line-height: 1em;">All Star Game</p>
    <hr class="my-4"><br>
    <p style="font-size:1.4em;line-height: 1em;">｜正式投票時間｜</p>
    <p style="font-size:1.4em;line-height: 1em;">2020/09/28 - 2020/10/02</p><br>
    <b-button href="#rule" size="lg" style="color:white;background-color: #EFB03F;">查看規則</b-button>
    <br><br>
    <b-button href="/vote" size="lg" style="color:white;background-color: #a47d51;">前往投票</b-button>
    <br><br>
    <b-button href="https://github.com/littlechintw/NTPU-AllStar-2020" size="lg" style="color:white;background-color: #000000;">Open Source!</b-button>
    <br><br>

    <b-card class="text-center" id="rule">
      <div class="" align="left">
        <h2 align="center">投票相關規則</h2>
        <b-list-group>
          <b-list-group-item>1. 各球類與位置有不同票數，請留意系統指示</b-list-group-item>
          <b-list-group-item>2. 投票完成後將無法變更，請確認投票正確</b-list-group-item>
          <b-list-group-item>3. 帳號登入僅限一個工作狀態，當發現使用其他裝置連接將自動登出</b-list-group-item>
        </b-list-group>
      </div>
    </b-card><br>
    <b-card class="text-center">
      <a>發生問題？</a><br>
      <a>寄信至 </a>
      <a href="mailto:ntpu-su-21th-it@googlegroups.com">ntpu-su-21th-it@googlegroups.com</a><br><br>
      <a href="https://hackmd.io/@littlechin/2020allstar_policy" target="_blank">隱私權條款</a><br><br>
      <a href="https://github.com/littlechintw/NTPU-AllStar-2020" target="_blank">Open Source!</a>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.home {
  margin-left : 6pt;
	margin-right: 6pt;
}
</style>