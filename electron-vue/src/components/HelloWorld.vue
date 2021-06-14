<template>
    <div class="specific">
      <vue-qrcode value="Andrej Oljaca" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
      <vue-qrcode value="https://www.coindesk.com/price/cardano" />
      <a class="twitter-timeline" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div ref="printMe" style="padding: 10px; background: #f5da55">
        <button v-on:click="print">Screenshot</button>
      </div>
    <!-- OUTPUT -->
      <img :src="output">
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
    }
  },
  // mounted() {
  //   this.print()
  //   alert("hey")
  // }
}
</script>