<template>
  <div>
    <vue-qrcode value="Andrej Oljaca" />
    <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
    <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
    <vue-qrcode value="https://www.coindesk.com/price/cardano" />
    <a class="twitter-timeline" href="https://twitter.com/BBCAfrica?ref_src=twsrc%5Etfw">Tweets by BBCAfrica</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <a class="twitter-timeline" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'

export default {
  components: {
    VueQrcode,
  },
}
</script>