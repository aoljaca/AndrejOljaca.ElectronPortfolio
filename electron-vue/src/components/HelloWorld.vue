<template>
    <div class="specific">
      <vue-qrcode value="Andrej Oljaca" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
      <vue-qrcode value="https://www.coindesk.com/price/cardano" />
      <a class="twitter-timeline" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <button v-on:click="greet" type="button" class="btn btn-default">Take a Screenshot!</button>
    </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image';
export default {
  components: {
    VueQrcode,
  },
  methods: {
    greet: function () {
      html2canvas(document.querySelector('.specific'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
      });
    }
  }
}
</script>