<template>
    <div class="specific" ref="printMe">
      <!-- <vue-qrcode value="Andrej Oljaca" width="70"/> -->
      <div ref="prices">
        <div ref="holder">

        </div>
      </div>
      <!-- <div class="flex-3">
        <img src="../assets/qr-code-tezos.png" alt="">
        <img src="../assets/qr-code-burst.png" alt="">
        <img src="../assets/qr-code-cardano.png" alt="">
        <img src="../assets/qr-code-name.png" alt="">
      </div> -->
      <!-- <vue-qrcode value="https://coinmarketcap.com/currencies/tezos/" />
      <vue-qrcode value="https://coinmarketcap.com/currencies/burst/" />
      <vue-qrcode value="https://www.coindesk.com/price/cardano" /> -->
      <div class="flex-4">
        <a class="twitter-timeline" target="_blank" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by Ethereum</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <a class="twitter-timeline" target="_blank" href="https://twitter.com/BBCAfrica?ref_src=twsrc%5Etfw">Tweets by BBCAfrica</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <div style="padding: 10px; background: #f5da55" class="screenshot">
          <button v-on:click="print">Screenshot</button>
      </div>
      <div class="flex-1">
        <a target="_blank" href="https://www.linkedin.com/in/andrej-oljaca-21a59113b/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" size="2x"/></a>
        <a href="https://github.com/aoljaca" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" size="2x"/></a>
      </div>
      <div class="flex-2">
        <a href="./resume.pdf" download="resume.pdf">Resume</a>
        <a href="mailto: andrej_oljaca@outlook.com">Email me</a>
      </div>
      <!-- <img :src="output"> -->
    </div>
</template>
<script>
// import VueQrcode from 'vue-qrcode'
export default {
  components: {
    // VueQrcode,
  },
  data() {
    return {
      output: null
    }
  },
  methods: {
    async print() {
      // const el = this.$refs.printMe;
      const el = document.body;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
      var a = document.createElement('a');
      a.href = this.output;
      a.setAttribute('download',"download.jpg");
      a.click();
    }
  },
  // mounted() {
  //   let foo = document.createElement('script');
  //   foo.setAttribute("src", "./LivePrice.js");
  //   this.$refs.holder.appendChild(foo);
  //   this.$refs.holder.insertAdjacentElement('afterend', foo);
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
  img, .edit {
    width: 70px;
    height: 70px;
  }
  .flex-3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  .flex-4 {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
  .flex-4 a {
    margin-bottom: 5px;
  }
  .screenshot {
    margin-bottom: 50px;
  }
  .prices {
    margin-bottom: 600px;
  }
</style>

