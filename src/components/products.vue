<template>
  <div>
  <div v-for="(item, $index) in list" :key="$index">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
          data() {
            return {
                nbskip: 1,
                list: [],
            }
        },
        methods: {
            //Infinite scrool
            infiniteHandler($state) {
                //axios
                console.log("test")
                
                this.axios.get('shopify/install?shop=ansezz.myshopify.com', {skip: this.nbskip})
                .then(res => {
                  console.log(res.data)
                    if (res.data.items.length) {
                        //Adding 10 items
                        this.nbskip += 10;
                        this.list.push(...res.data.items);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }).catch(e => {
                    console.log('createForm', e)
                    this.loading = false
                })
            },
            //Showing image
            show_image(image){
				let imageName = image
				let path = "storage/images/"
				return path + imageName
			},

        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
