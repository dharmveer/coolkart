<template>
<div>
    <div class="products" style="width:100%">
        <div class="row" style="margin-right: 0px; margin-left: 0px;width:100%;">
            <div class="cardTemplate col-lg-3" v-for="productItem in products.items" :key="productItem.itemId">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top mt-2"  v-lazy="productItem.imageUrl" alt="Card image cap" style="max-height: 700px; max-width: 127.135px;margin: auto">
                    <div class="card-body">
                        <div class="card-text brand_name">{{productItem.brand}}</div>
                        <div class="card-text brand_desc">{{productItem.description}}</div>
                        <div class="brand_price"> ${{productItem.sell_price}} <span class="price_color" v-if="productItem.price > productItem.sell_price"> ${{productItem.price}}</span> <span class="discount_color" v-if="productItem.price > productItem.sell_price"> {{productItem.discount}}% off</span></div>
                        <div class="brand_size">{{productItem.size}} | {{productItem.color}}</div>
                        <div class="d-flex justify-content-between align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        msg: String,
        products: {
            type: Object
        }
    },
    data() {
        return {
            text: '',
            img: '1001.jpg'
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
hr {
    margin-top: 0px;
    margin-bottom: 0px;
}

.card-body {
    padding-top: 0px !important;
}

.productItem {
    padding-bottom: 10px;
}

.brand_size {
    text-align: left;
    font-size: 15px;
}

.price_color {
    color: #878787;
    text-decoration: line-through;
    font-size: 14px;
}

.discount_color {
    color: #388e3c;
    font-size: 12px;
    font-weight: bold;
}

.brand_size_color {
    color: #878787;
    font-weight: bold;
}

.brand_color {
    text-align: left;
    font-size: 15px;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

.flex-container>div {
    width: 240px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin-left: 5px;
}

.productItem:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
}

.product {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin-left: 5px;
    width: 25%;
}

.product:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
}

.Hello {
    background-color: aqua;
}

.brand_name {
    text-align: left;
    color: #878787;
    font-size: 17px;
    font-weight: bold;
    text-transform: capitalize;
}

.brand_desc {
    text-align: left;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.brand_price {
    text-align: left;
    font-size: 17px;
    font-weight: 500;
    color: #212121;
}

.headerSearch {
    background-color: #2874f0;
    color: white;
    height: 75px;
}

.item-border {
    border-bottom: 1px solid #e0d8d8;
    padding-bottom: 12px;
    padding-top: 12px;
}
</style>
