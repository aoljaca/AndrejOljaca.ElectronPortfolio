<template>
    <div class="specific" ref="printMe">
      <vue-qrcode value="Andrej Oljaca" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
      <vue-qrcode value="https://www.coindesk.com/price/cardano" />
      <a class="twitter-timeline" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div style="padding: 10px; background: #f5da55">
        <button v-on:click="print">Screenshot</button>
      </div>
      <img :src="output">
      <button><a :href="output" download>download</a></button>
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
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.png";
      link.href = this.output.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    }
  },
  // mounted() {
  //   this.print()
  //   alert("hey")
  // }
}
</script>