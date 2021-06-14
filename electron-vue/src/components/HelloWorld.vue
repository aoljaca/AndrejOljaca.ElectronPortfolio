<template>
  <div>
    <vue-qrcode value="Andrej Oljaca" />
    <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
    <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
    <vue-qrcode value="https://www.coindesk.com/price/cardano" />
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