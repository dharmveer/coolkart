<template>
<div class="hello">
    <b-container fluid class="bv-example-row">
        <b-row class="text-center headerSearch" align-v="center">
            <b-col class="brandNmae" @click="getAllproducts">{{brandName}}</b-col>
            <b-col cols="5" style="postion:relative">
                <b-form-input v-model="searchtext" placeholder="Search Product" v-on:keyup.enter="productresult" v-on:keyup="productsearch">
                </b-form-input>
                <img src="../assets/searchicon.png" class="search-icon" alt="Responsive image" id="toggle-btn" @click="productsearch" />
                <img src="../assets/voice.png" class="search-voice-icon" alt="Responsive image" id="toggle-btn" @click="toggleModal" />
            </b-col>
            <b-col cols="5" class="text-left">

                <div style="width: 159px;padding: 10px;" @mouseleave="showlang=false">
                    <img src="../assets/lagguage.png" alt="Responsive image" class="lang-icon" id="toggle-btn" @mouseover="showlang=true" /> <span style="font-size: 17px;" @mouseover="showlang=true">{{showlanguageshow}}</span>
                    <div id='translControllan' v-if="showlang">
                        <form class="form-radio" @mouseover="showlang=true" @mouseleave="showlang=false">
                            <div class="radio" v-for="langu in languageopt" :key="langu">
                                <input type="radio" name="optradio" v-model="selectedlang" :value="langu.value" v-on:change="showlanguage"> <span>{{langu.lanval}}</span>
                            </div>
                        </form>
                        <!-- <select class="form-control" id="sel1" v-model="selectedlang">
                        <option v-for="langu in languageopt" :key="langu"  :value="langu.value">{{langu.lanval}}</option>
                    </select> -->
                    </div>
                </div>

            </b-col>
        </b-row>
        <div v-on:mouseleave="mouseleave">
            <b-row class="row " align-v="center" style="background-color:white;padding-left: 210px;" v-for="category in categoryitem" :key="category.id">
                <b-col style="padding: 20px;cursor: pointer;" class="category_menu_header" v-on:click="getAllproducts" v-on:mouseleave="mouseleave" v-on:mouseover="mouseleave">
                    All
                </b-col>
                <b-col v-for="families in category.families" :key="families.id" v-on:mouseover="mouseover(families.short_name)" style="padding: 20px;cursor: pointer;" class="category_menu_header">
                    {{families.short_name}}
                </b-col>
            </b-row>
            <div class="products" style="width:100%">
                <div class="row" style="margin-right: 0px; margin-left: 0px;width:100%;">
                    <div class="text-left row category_menu" align-v="top" style="background-color:white;padding: 0;" v-for="category in categoryitem" :key="category.id">
                        <div class=" row_cat" v-for="families in category.families" :key="families.id" v-show="families.short_name == categoryShow">

                            <div class="" v-for="classes in families.classes" :key="classes.id">
                                <div>
                                    <div style="font-weight:bold;cursor: pointer;" v-on:click="selectcategory(classes.url)" class="hovercolorchange"> {{classes.short_name}}</div>
                                    <div v-for="commoditis in classes.commodities" :key="commoditis.id">
                                        <div v-on:click="selectcategory(commoditis.url)" class="hovercolorchange" :v-model="categoryvalue">{{commoditis.short_name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-row class="text-center not-found border-top" align-v="center" v-show="isLoading">
            <b-col class="text-center">
                <p>You searched for <span class="not-found-span">{{searchfornotfound}}</span></p>
                <div>
                    <div class="title is-4 has-text-centered not-found-div"> We couldn't find any matches! </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="text-left row" align-v="center">
            <!-- <p v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">Clothing</p> -->
        </b-row>

        <div id="gist"></div>
        <b-row class="text-left border-top" align-v="top" style="background-color: white;background-color:white;" v-show="!isLoading">
            <b-col style="background-color:white;padding: 0;" class="border-right">
                <div style=" ">

                    <b-row class="border-bottom" style="padding:15px;font-size: 17px;font-weight: bold;width: 268px;">
                        <b-col lg="6">
                            <span>FILTERS</span>
                        </b-col>
                        <b-col lg="6">
                            <span v-on:click="greet" v-show="isClearAll" style="color:#007bff">CLEAR ALL</span>
                        </b-col>
                    </b-row>

                    <div class="label_brand border-bottom">
                        <div class="col-form-label">BRANDS</div>

                        <div class="custom-control custom-checkbox" v-for="(option, index)  in productitem.brands" :key="option">
                            <input type="checkbox" class="custom-control-input" :id="index" v-model="selectedbrand" @change="commoncheck(option)" :value="option">
                            <label class="custom-control-label" :for="index"> {{option}}</label>
                        </div>
                    </div>
                    <b-form-group class="label_brand border-bottom">
                        <div class="col-form-label">COLORS</div>
                        <div class="custom-control custom-checkbox" v-for="(color, index)  in productitem.colors" :key="color">
                            <input type="checkbox" class="custom-control-input" :id="'color'+index" v-model="selectedcolor" @change="commoncheck(color)" :value="color">
                            <label class="custom-control-label" :for="'color'+index"> {{color}}</label>
                        </div>
                    </b-form-group>

                    <b-form-group class="label_brand border-bottom">
                        <div class="col-form-label">SIZE</div>
                        <div class="custom-control custom-checkbox" v-for="(size, index)  in productitem.sizes" :key="size">
                            <input type="checkbox" class="custom-control-input" :id="'size'+index" v-model="selectedsize" @change="commoncheck(size)" :value="size">
                            <label class="custom-control-label" :for="'size'+index"> {{size}}</label>
                        </div>
                        <div></div>
                    </b-form-group>

                </div>
            </b-col>
            <b-col cols="10" style="heigh:200px">
                <b-row class="text-left total-item" align-v="center">
                    <b-col class="text-left">
                        <span style="font-size: 18px;font-weight: bold;">Showing</span><span style="font-size: 18px;color: gray;"> - {{productitem.total}} Products {{searchfor}}</span>
                    </b-col>
                    <b-col cols="4" class="text-right" v-show="!isLoading">
                        <div>
                            <span class="col-form-select">Sort by</span>
                            <b-form-select v-model="selectedsort" :options="sortoptions" @input="commoncheck(sortoptions)" style="width:300px;margin-left: 13px;font-weight: bold;">
                                <span>Sort</span>
                            </b-form-select>
                        </div>
                    </b-col>
                </b-row>
                <ProductItem :products="productitem"/>
            </b-col>
        </b-row>
    </b-container>

    <div>

        <!-- model -->
        <b-modal ref="my-modal" hide-footer :title=" isError ? 'Error' : 'Listening...Speak Now!'">
            <div class="text-center" v-show="isError">
                Please Check your microphone
            </div>
            <div style="position:relative;height:241px;" v-show="!isError">
                <svg class="mic" xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 744.09448819 1052.3622047">
                    <path fill="#fff" d="M302.857 365.934h80v100.714h-80z" />
                    <circle cx="-343" cy="-357.34" transform="scale(-1)" r="40" fill="#fff" />
                    <circle cx="343" cy="469.219" r="40" fill="#fff" />
                    <path d="M328.57 728.076a71.43 75.714 0 0 1-35.713 65.57 71.43 75.714 0 0 1-71.428 0 71.43 75.714 0 0 1-35.716-65.57h71.43zM271.43 643.79a31.43 45.714 0 0 1-15.716 39.59 31.43 45.714 0 0 1-31.428 0 31.43 45.714 0 0 1-15.715-39.59H240z" fill="none" />
                    <path d="M419.43 457.79a75.714 77.143 0 0 1-37.86 66.808 75.714 77.143 0 0 1-75.713 0A75.714 77.143 0 0 1 268 457.79" fill="none" stroke="#fff" stroke-width="12.5" />
                    <path d="M345.893 534.648v67.143" fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-width="18.75" />
                    <path fill="#fff" stroke="#fff" stroke-width="12.5" d="M306.57 604.076h77.144v14.286H306.57z" />
                </svg>

                <svg class="grey-circle" xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 744.09448819 1052.3622047">
                    <ellipse cx="382.857" cy="506.648" rx="251.429" ry="257.143" fill="#DBDBDB" fill-rule="evenodd" />
                    <path d="M131.168 497.96c0-2.88.646-12.757 1.17-17.9 5.124-50.215 24.146-97.027 55.31-136.118 2.4-3.008 2.725-3.348 3.206-3.348.405 0 .493.055.358.223l-2.745 3.438c-22.186 27.78-38.343 59.726-47.64 94.2-3.676 13.625-6.297 28.016-7.675 42.14-.6 6.135-1.086 13.534-1.09 16.547-.002 1.874-.085 2.202-.556 2.202-.303 0-.338-.145-.338-1.384z" opacity=".305" />
                </svg>

                <svg class="green-circle" xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 744.09448819 1052.3622047">
                    <ellipse cx="382.857" cy="506.648" rx="251.429" ry="257.143" fill="#2ecc71" fill-rule="evenodd" />
                    <path d="M131.168 497.96c0-2.88.646-12.757 1.17-17.9 5.124-50.215 24.146-97.027 55.31-136.118 2.4-3.008 2.725-3.348 3.206-3.348.405 0 .493.055.358.223l-2.745 3.438c-22.186 27.78-38.343 59.726-47.64 94.2-3.676 13.625-6.297 28.016-7.675 42.14-.6 6.135-1.086 13.534-1.09 16.547-.002 1.874-.085 2.202-.556 2.202-.303 0-.338-.145-.338-1.384z" opacity=".305" />
                </svg>
            </div>
        </b-modal>
    </div>

    <!-- model end -->
</div>
</template>

<script src='bundle/bundle.js'></script>
<script>
import axios from "axios";
import ProductItem from './Product';
//import Menu from './Menu'
import store from '../store/store.js'
//import postscribe from 'postscribe'

//import 'bootstrap/dist/css/bootstrap.css'

//const hello = require('./assets/jsapi');
//const translate = require('google-translate-api');

export default {
    props: {
        msg: String
    },
    components: {
        ProductItem
    },
    computed: {
        productitem() {
            return store.state.brand
        },

        categoryitem() {
            return store.state.products
        },
        notshow() {
            return store.state.notshow
        },
        isLoading() {
            return store.state.isLoading
        },
        isError() {
            return store.state.isError
        },
        isClearAll() {
            return store.state.isClearAll
        },
        isErrorNetwork() {
            return store.state.isErrorNetwork
        },
        families() {
            return store.state.families
        },
        isMenuShow() {
            return store.state.isMenuShow
        },
        categoryShow() {
            return store.state.categoryShow
        }
    },
    mounted: function () {

        //postscribe('#gist', '<script src="https://gist.github.com/gautemo/d6b309c2bafe8f611f239b82f4f5501f.js"><\/script>')

        //alert(google)

        //     google.load("elements", "1", {
        //     packages: "transliteration"
        //   });

        // this.checkboxToggle() //method1 will execute at pageload
        //  Vue.loadScript("https://www.google.com/jsapi")
        //     .then((data) => {
        //       // Script is loaded, do something
        //       alert(data.loader.ServiceBase);
        //     })
        //     .catch(() => {
        //       // Failed to fetch script
        //       alert('fail')
        //     });

        //alert(postscribe)
    },
    data() {
        return {
            //textBrand: 'http://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com/api/v1/products?brand=',
            //textBrand: 'http://9.122.240.59:8080/api/v1',
            textBrand: 'https://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com/api/v1/products?brand=',
            brandName: "koolkart",
            showlang: false,
            showlanguageshow:"English",
            categoryvalue: '',
            languageopt: [{
                    "lanval": "English",
                    "value": 'en'
                },
                {
                    "lanval": "\u0939\u093F\u0902\u0926\u0940",
                    "value": 'hi'
                },
                {
                    "lanval": "\u0C95\u0ca8\u0ccd\u0ca8\u0ca1",
                    "value": 'kn'
                },
                {
                    "lanval": "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02",
                    "value": 'ml'
                },
                {
                    "lanval": "\u092E\u0930\u093E\u0920\u0940",
                    "value": 'mr'
                },
                {
                    "lanval": "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
                    "value": 'ta'
                },
                {
                    "lanval": "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",
                    "value": 'te'
                },
                {
                    "lanval": "\u09AC\u09BE\u0982\u09B2\u09BE",
                    "value": 'bn'
                }
            ],
            urlQuery: '',
            item: [],
            selectedlang: "en",
            selectedbrand: [], // Must be an array reference!
            selectedcolor: [], // Must be an array reference!
            selectedsize: [], // Must be an array reference!
            options: [],
            selecteddrop: [],
            sizes: [],
            selectedsort: null,
            searchfor: "",
            searchfornotfound: "",
            isconverter: true,
            countword: 1,
            sortoptions: [{
                    value: null,
                    text: 'Please select an option'
                },
                {
                    value: 'l2h',
                    text: 'Price: Low to High'
                },
                {
                    value: 'h2l',
                    text: 'Price: High to Low'
                }
            ],
            searchtext: ''
        }
    },
    methods: {
        setLanguage() {

        },
        showlangchange() {
            if (this.showlang) {
                this.showlang = false
            } else {
                this.showlang = true
            }
        },
        mouseover(name) {
            store.commit('SET_CATEGORIES_SHOW', name)
            store.commit('SET_MENU_SHOW', true)
        },
        mouseleave() {
            store.commit('SET_CATEGORIES_SHOW', '')
            store.commit('SET_MENU_SHOW', false)
        },
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },

        onLoad() {

        },

        testLanguage() {
            // alert('welcome')

        },

        showlanguage(){
            const found = this.languageopt.find(element => element.value == this.selectedlang);
            this.showlanguageshow =found.lanval
          // alert("languageopt")
          // array1.find(element => element > 10);
        },

        toggleModal() {
            this.$refs['my-modal'].show()
            const recognition = new window.webkitSpeechRecognition;
            recognition.onresult = async (event) => {
                this.searchtext = event.results[0][0].transcript;
                let newurl = this.formquery();
                if (this.selectedlang !== "en") {
                    //start lan
                    let url = "https://www.google.com/inputtools/request?text=" + this.searchtext + "&ime=transliteration_en_" + this.selectedlang + "&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&uv&cb=_callbacks_._0k50nc"
                    // const { data } = await axios.get(url);
                    var finaltext = ""
                    await axios.get(url)
                        .then(function (responseText) {
                            var raw = responseText.data;
                            let startIndex = raw.lastIndexOf('(');
                            let lastIndex = raw.lastIndexOf(')');
                            let finalString = raw.substring(startIndex + 1, lastIndex);

                            let formattedJson = JSON.parse(finalString);
                            let textArray = formattedJson[1][0][1];
                            finaltext = textArray[0]
                        })
                    //end lan
                    this.searchtext = finaltext;
                    if (this.searchtext.trim() != "") {
                        this.selectedbrand = [];
                        this.selectedcolor = [];
                        this.selectedsize = [];
                        this.searchfor = " for " + '"' + finaltext + '"';
                        this.searchfornotfound = this.searchtext;
                        let newurl = this.formquery();
                        // let payload = 'products?q=' + finaltext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;
                        var payload = '';
                        if (this.categoryvalue !== '') {
                            payload = this.categoryvalue + '?q=' + finaltext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;
                        } else {
                            payload = 'products?q=' + finaltext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;
                        }
                        store.dispatch('GET_PRODUCT', payload)
                    } else {
                        this.searchfornotfound = "";
                        this.searchfor = "";
                    }
                } else {
                    if (this.searchtext.trim() != "") {
                        this.selectedbrand = [];
                        this.selectedcolor = [];
                        this.selectedsize = [];
                        this.searchfor = " for " + '"' + this.searchtext + '"';
                        this.searchfornotfound = this.searchtext;
                        let newurl = this.formquery();
                        //  let payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                        var payload = '';
                        if (this.categoryvalue !== '') {
                            payload = this.categoryvalue + '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                        } else {
                            payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                        }
                        store.dispatch('GET_PRODUCT', payload)
                    } else {
                        this.searchfornotfound = "";
                        this.searchfor = "";
                    }

                }

                store.commit('IS_ERROR', false);
            }
            recognition.onend = () => {
                this.$refs['my-modal'].hide()
            }
            recognition.onerror = () => {
                store.commit('IS_ERROR', true);
            }
            recognition.start();
        },

        popToast() {
            const vNodes = this.$createElement('div', {}, [
                'Flashy ',
                this.$createElement('strong', {}, 'toast'),
                ' message'
            ])
            this.$bvToast.toast(vNodes, {
                toastClass: 'my-toast',
                noCloseButton: true
            })
        },
        async productresult() {
            if (this.selectedlang !== "en") {

                var finaltext = ""
                let url = "https://www.google.com/inputtools/request?text=" + this.searchtext + "&ime=transliteration_en_" + this.selectedlang + "&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&uv&cb=_callbacks_._0k50nc"
                //    alert(url)
                // this.textdata = "";
                await axios.get(url)
                    .then(function (responseText) {

                        // console.log(textdata)
                        // var raw = '/*API*/_callbacks_._0k50nc(["SUCCESS",[["sateesh",["सतीश","सतीष","सतिश","सतिष","सातीश"],[],{"candidate_type":[0,0,0,0,0]}]]])';
                        var raw = responseText.data;
                        let startIndex = raw.lastIndexOf('(');
                        let lastIndex = raw.lastIndexOf(')');
                        let finalString = raw.substring(startIndex + 1, lastIndex);

                        let formattedJson = JSON.parse(finalString);
                        let textArray = formattedJson[1][0][1];
                        finaltext = textArray[0]

                        //alert(textArray[0])

                    })

                this.searchtext = finaltext;

                if (this.searchtext.trim() != "") {
                    this.selectedbrand = [];
                    this.selectedcolor = [];
                    this.selectedsize = [];
                    this.searchfor = " for " + '"' + finaltext + '"';
                    this.searchfornotfound = this.searchtext;
                    let newurl = this.formquery();
                    let payload = 'products?q=' + finaltext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;

                    // alert(payload)
                    store.dispatch('GET_PRODUCT', payload)
                } else {
                    this.searchfornotfound = "";
                    this.searchfor = "";
                }

                //this.productsearch();

            } else {
                if (this.searchtext.trim() != "") {
                    this.selectedbrand = [];
                    this.selectedcolor = [];
                    this.selectedsize = [];
                    this.searchfor = " for " + '"' + this.searchtext + '"';
                    this.searchfornotfound = this.searchtext;
                    let newurl = this.formquery();
                    let payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                    // var payload = '';
                    // if (this.categoryvalue !== '') {
                    //     payload = this.categoryvalue + '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                    // } else {
                    //     payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
                    // }
                    store.dispatch('GET_PRODUCT', payload)
                } else {
                    this.searchfornotfound = "";
                    this.searchfor = "";
                }
            }
            //alert(payload);
        },
        async productsearch() {
            // str.indexOf(' ') !== -1;

            // alert(this.searchtext);
            // if (this.searchtext.trim() != "") {
            //     this.selectedbrand = [];
            //     this.selectedcolor = [];
            //     this.selectedsize = [];
            //     this.searchfor = " for " + '"' + this.searchtext + '"';
            //     this.searchfornotfound = this.searchtext;
            //     let newurl = this.formquery();
            //     let payload = '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            //     store.dispatch('GET_PRODUCT', payload)
            // } else {
            //     this.searchfornotfound = "";
            //     this.searchfor = "";
            // }
            // alert(payload);

            //  Vue.$cookies.set('theme','default');
            // //alert(this.searchtext.indexOf(' ') !== -1)
            // // alert(this.searchtext);
            // alert($cookies.get(theme))

            if (this.searchtext.charAt(this.searchtext.length - 1) == " ") {
                var finaltext = ""
                var conver;
                //this.isconverter = false
                let url = "https://www.google.com/inputtools/request?text=" + this.searchtext + "&ime=transliteration_en_" + this.selectedlang + "&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&uv&cb=_callbacks_._0k50nc"
                //    alert(url)
                // this.textdata = "";
                await axios.get(url)
                    .then(function (responseText) {

                        // console.log(textdata)
                        // var raw = '/*API*/_callbacks_._0k50nc(["SUCCESS",[["sateesh",["सतीश","सतीष","सतिश","सतिष","सातीश"],[],{"candidate_type":[0,0,0,0,0]}]]])';
                        var raw = responseText.data;
                        let startIndex = raw.lastIndexOf('(');
                        let lastIndex = raw.lastIndexOf(')');
                        let finalString = raw.substring(startIndex + 1, lastIndex);

                        let formattedJson = JSON.parse(finalString);
                        let textArray = formattedJson[1][0][1];
                        finaltext = textArray[0]
                        //alert(textArray[0])
                    })
                this.searchtext = finaltext;
            }

        },
        greet() {
            store.commit('IS_CLEAR_ALL', false);
            this.selectedbrand = [];
            this.selectedcolor = [];
            this.selectedsize = [];
           let newurl = this.formquery();
            //let payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            var payload = '';
            if (this.categoryvalue !== '') {
                payload = this.categoryvalue + '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            } else {
                payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            }
            store.dispatch('GET_PRODUCT', payload)
            // alert('clear all');
        },

        dropselect: function () {
            let newurl = this.formquery();
            //let payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            var payload = '';
            if (this.categoryvalue !== '') {
                payload = this.categoryvalue + '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            } else {
                payload = 'products?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            }
            store.dispatch('GET_PRODUCT', payload)
        },

        selectcategory: function (selectcategory) {
            this.greet();
            // let newurl = this.formquery();
            this.searchfornotfound = "";
            this.searchfor = "";
            this.searchtext = "";
            let newurl = this.formquery();
            this.categoryvalue = selectcategory;
            let payload = selectcategory + '?q=' + this.searchtext + '&sortItem=' + this.selectedsort + newurl;
            //let payload = 'https://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com' +selectcategory ;
            store.dispatch('GET_PRODUCT', payload)
            store.commit('SET_CATEGORIES_SHOW', '')
            // alert(payload);
        },

        commoncheck: function () {
            let newurl = this.formquery();
            var payload = '';
            if (this.categoryvalue !== '') {
                payload = this.categoryvalue + '?q=' + this.searchtext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;
            } else {
                payload = 'products?q=' + this.searchtext + '&langCode=' + this.selectedlang + '&sortItem=' + this.selectedsort + newurl;
            }
            store.dispatch('GET_PRODUCT', payload)
        },

        getAllproducts: function () {
           // this.greet();
           store.commit('IS_CLEAR_ALL', false);
            this.selectedbrand = [];
            this.selectedcolor = [];
            this.selectedsize = [];
            this.categoryvalue = '';
            this.searchfornotfound = "";
            this.searchfor = "";
            this.searchtext = "";
            let payload = 'products';
            store.dispatch('GET_PRODUCT', payload)
            store.dispatch('GET_CATEGORIES')
        },

        // languageset : function(value){
        //     this.selectedlang = value
        //     alert(value);
        // },

        formquery: function () {
            let lturl = ''
            if (this.selectedbrand.length != 0 || this.selectedsize.length != 0 || this.selectedcolor.length != 0) {
                store.commit('IS_CLEAR_ALL', true);
            } else {
                // this.selectedbrand = [];
                store.commit('IS_CLEAR_ALL', false);
            }
            if (this.selectedbrand.length > 0) {
                for (var j = 0; j < this.selectedbrand.length; j++) {
                    lturl = lturl + '&brand=' + this.selectedbrand[j]
                }
            }

            if (this.selectedsize.length > 0) {
                for (var i = 0; i < this.selectedsize.length; i++) {

                    lturl = lturl + '&size=' + this.selectedsize[i]
                }
            }

            if (this.selectedcolor.length > 0) {
                for (var k = 0; k < this.selectedcolor.length; k++) {

                    lturl = lturl + '&color=' + this.selectedcolor[k]
                }
            }

            return lturl;
        },
    },
    created() {
        let payload = 'products';
        store.dispatch('GET_PRODUCT', payload)
        store.dispatch('GET_CATEGORIES')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.category_menu_header {
    font-weight: bold;
    max-width: 153px;
}

.form-radio {
    position: absolute;
    z-index: 99999;
    width: 100px;
    background-color: #2874f0;
    width: 169px;
    padding-left: 10px;
    border-radius: 10px;
    top: 46px;
    padding-top: 4px;
}

.close {
    display: none;
}

.my-toast {
    background-color: #955;
    color: #fff;
    position: absolute;
    top: 100px;
    left: 100px;
}

.category_menu_header:hover {
    color: #007bff
}

.hovercolorchange:hover {
    color: #007bff;
    cursor: pointer;
}

i {
    border: solid #aeabab;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}

.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.row_cat {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
    /* margin-left: 224px; */
    width: 1320px;
    padding: 10px 10px 17px 18px;
    /* right: 100px; */
    left: 100px;
    top: -45px;
    position: absolute;
    column-gap: 40px;
    font-size: 14px;
    background-color: white;
    column-rule: 1px solid black;
    max-height: 475px;
    box-shadow: 0px 6px 4px 3px gray;
}

.form-control {
    padding: 0.375rem 1.7rem !important;
}

.search-icon {
    width: 22px;
    position: absolute;
    left: 20px;
    top: 10px;
}

.search-voice-icon {
    width: 16px;
    position: absolute;
    right: 26px;
    top: 8px;
}

.lang-icon {
    width: 21px;
}

.total-item {
    height: 69px;
    padding-left: 15px;
    padding-right: 15px;
}

.not-found {
    background-color: white;
    font-size: 17px;
    font-weight: bold;
    padding-top: 80px;
    padding-bottom: 140px;
}

.category_menu {
    background-color: white;
    padding: 0px;
    position: absolute;
    z-index: 999;
    top: 184px;
}

.not-found-span {
    color: #3466E8;
    font-weight: 500;
}

.not-found-div {
    font-family: initial;
    color: gray;
    font-size: 32px;
}

.border-top {
    border-top: 1px solid gray;
}

.border-right {
    border-right: 1px solid gray;
}

.border-bottom {
    border-bottom: 1px solid gray;
}

.form-group {
    margin-bottom: 0px !important;
}

.label_brand {
    padding-left: 15px;
    padding-bottom: 15PX;
}

.col-form-label {
    font-size: 15px;
    font-weight: bold;
}

.col-form-select {
    font-size: 15px;
    font-weight: 400;
}

#__BVID__8__BV_label_ {
    font-size: 75px !important;
    font-weight: bold !important;
}

legend {
    font-size: 15px !important;
    font-weight: bold !important;
}

.Hello {
    background-color: aqua;
}

.brandNmae {
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
}

.brand_name {
    text-align: left;
    color: #878787;
    font-size: 20px;
    font-weight: bold;
}

.brand_desc {
    text-align: left;
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

@keyframes listen {
    0% {
        transform: scale(.5);
    }

    25% {
        transform: scale(.25);
    }

    35% {
        transform: scale(.10);
    }

    65% {
        transform: scale(.35);
    }

    80% {
        transform: scale(.5);
    }

    100% {
        transform: scale(.25);
    }

}

.mic {
    position: absolute;
    margin: 0px;
    top: -455px;
    left: -172px;
    -webkit-transform: scale(.2);
    -moz-transform: scale(.2);
    -ms-transform: scale(.2);
    -o-transform: scale(.2);
    transform: scale(.2);
    z-index: 11;
    shape-rendering: auto;
}

.shadow {
    -moz-filter: drop-shadow(8px 8px 8px #888888);
    -webkit-filter: drop-shadow(8px 8px 8px #888888);
    -ms-filter: drop-shadow(8px 8px 8px #888888);
    -o-filter: drop-shadow(8px 8px 8px #888888);
    filter: drop-shadow(8px 8px 8px #888888);
}

.grey-circle {
    position: absolute;
    margin: 0px;
    top: -463px;
    left: -178px;
    pointer-events: none;
    -webkit-animation-name: listen;
    -webkit-animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-name: listen;
    -moz-animation-duration: 4s;
    -moz-animation-iteration-count: infinite;
    -ms-animation-name: listen;
    -ms-animation-duration: 4s;
    -ms-animation-iteration-count: infinite;
    -o-animation-name: listen;
    -o-animation-duration: 4s;
    -o-animation-iteration-count: infinite;
    animation-name: listen;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}

.green-circle {
    position: absolute;
    margin: 0px;
    top: -463px;
    left: -178px;
    z-index: 10;
    transform: scale(.25);
}

.checkbox-lg .custom-control-label::before,
.checkbox-lg .custom-control-label::after {
    top: .8rem;
    width: 1.55rem;
    height: 1.55rem;
}

.checkbox-lg .custom-control-label {
    padding-top: 13px;
    padding-left: 6px;
}

.checkbox-xl .custom-control-label::before,
.checkbox-xl .custom-control-label::after {
    top: 1.2rem;
    width: 1.85rem;
    height: 1.85rem;
}

.checkbox-xl .custom-control-label {
    padding-top: 23px;
    padding-left: 10px;
}

.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
}

.container:hover input~.checkmark {
    background-color: #ccc;
}

.container input:checked~.checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked~.checkmark:after {
    display: block;
}
.close{
    display: none !important;
}
button.close{
    display: none !important;
}
</style>
<style >
button.close{
    display: none !important;
}
</style>
