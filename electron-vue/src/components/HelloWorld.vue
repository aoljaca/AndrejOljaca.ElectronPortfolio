<template>
    <div class="specific" ref="printMe">
      <vue-qrcode value="Andrej Oljaca" />
      <img src="../assets/qr-code-tezos.png" alt="">
      <img src="../assets/qr-code-burst.png" alt="">
      <img src="../assets/qr-code-cardano.png" alt="">
      <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
      <vue-qrcode value="https://www.coindesk.com/price/cardano" />
      <a class="twitter-timeline" target="_blank" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <a class="twitter-timeline" target="_blank" href="https://twitter.com/BBCAfrica?ref_src=twsrc%5Etfw">Tweets by BBCAfrica</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div style="padding: 10px; background: #f5da55">
        <button v-on:click="print">Screenshot</button>
      </div>
      <div class="flex-1">
        <a target="_blank" href="https://www.linkedin.com/in/andrej-oljaca-21a59113b/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></a>
        <a href="https://github.com/aoljaca" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></a>

      </div>
      <div class="flex-2">
        <a href="../assets/Andrej's Resume.pdf" download>Resume</a>
        <a href="">Email me</a>
      </div>
      
    </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      output: null
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return 
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
      alert(this.output)
      var a = document.createElement('a');
      a.href = this.output;
      a.setAttribute('download',"download");
      a.click();
    }
  },
  // mounted() {
  //   this.print()
  //   alert("hey")
  // }
}
</script>

<style scoped>
  .flex-1 a, .flex-2 a {
    text-decoration: none;
    color: black !important;
  }
  .flex-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .flex-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-2 a {
    background-color: turquoise;
    margin: 7px;
  }
  img, vue-qrcode {
    width: 70px;
    height: 70px;
  }
</style>