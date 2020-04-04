<template>
<div class="products" style="width:100%">
     {{categoryShow}} sadasd sadasd asd sadasd
    <div class="row" style="margin-right: 0px; margin-left: 0px;width:100%;">
        <div class="text-left row category_menu" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" align-v="top" style="background-color:white;padding: 0;" v-for="category in categoryitem" :key="category.id">
          
            <div class="row" style="margin-top:100px;" v-for="families in category.families" :key="families.id" v-show="families.name == categoryShow">
                <div class ="col-lg-3" v-for="classes in families.classes" :key="classes.id">
                    {{classes.name}}
                    <div v-for="(commodities,index) in classes.commodities" :key="commodities.id">
                       <div> {{index}} {{commodities.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import store from '../store/store.js'
export default {
    props: {
        msg: String,
        categoryitem: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    computed: {
        categoryShow() {
            return store.state.categoryShow
        }
    },
    methods: {
        url(a) {
            const url = require(`../assets/${a}.jpg`)
            return url
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
