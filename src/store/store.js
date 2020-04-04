import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products:[],
        brand:{},
        notshow: true,
        isLoading: false,
        isClearAll: false,
        isError:false,
        isErrorNetwork:false,
        isMenuShow:false,
        categoryShow:"",
        familiesCategories : // 20191218144810
        // https://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com/api/v1/categories
        
        {
            "segments": [
              {
                "id": "53000000",
                "name": "Apparel and Luggage and Personal Care Products",
                "families": [
                  {
                    "id": "53100000",
                    "name": "Clothing",
                    "classes": [
                      {
                        "id": "53101500",
                        "name": "Slacks and trousers and shorts",
                        "commodities": [
                          {
                            "id": "53101501",
                            "name": "Boys slacks or trousers or shorts"
                          },
                          {
                            "id": "53101502",
                            "name": "Mens slacks or trousers or shorts"
                          },
                          {
                            "id": "53101503",
                            "name": "Girls slacks or trousers or shorts"
                          },
                          {
                            "id": "53101504",
                            "name": "Womens slacks or trousers or shorts"
                          },
                          {
                            "id": "53101505",
                            "name": "Infants slacks or trousers or shorts"
                          }
                        ]
                      },
                      {
                        "id": "53101600",
                        "name": "Shirts and blouses",
                        "commodities": [
                          {
                            "id": "53101601",
                            "name": "Boys shirts"
                          },
                          {
                            "id": "53101602",
                            "name": "Mens shirts"
                          },
                          {
                            "id": "53101603",
                            "name": "Girls shirts or blouses"
                          },
                          {
                            "id": "53101604",
                            "name": "Womens shirts or blouses"
                          },
                          {
                            "id": "53101605",
                            "name": "Infants shirts or blouses"
                          }
                        ]
                      },
                      {
                        "id": "53101700",
                        "name": "Sweaters",
                        "commodities": [
                          {
                            "id": "53101701",
                            "name": "Boys sweaters"
                          },
                          {
                            "id": "53101702",
                            "name": "Mens sweaters"
                          },
                          {
                            "id": "53101703",
                            "name": "Girls sweaters"
                          },
                          {
                            "id": "53101704",
                            "name": "Womens sweaters"
                          },
                          {
                            "id": "53101705",
                            "name": "Infants sweaters"
                          }
                        ]
                      },
                      {
                        "id": "53101800",
                        "name": "Coats and jackets",
                        "commodities": [
                          {
                            "id": "53101801",
                            "name": "Boys coats or jackets"
                          },
                          {
                            "id": "53101802",
                            "name": "Mens coats or jackets"
                          },
                          {
                            "id": "53101803",
                            "name": "Girls coats or jackets"
                          },
                          {
                            "id": "53101804",
                            "name": "Womens coats or jackets"
                          },
                          {
                            "id": "53101805",
                            "name": "Infants coats or jackets"
                          },
                          {
                            "id": "53101806",
                            "name": "Poncho"
                          }
                        ]
                      },
                      {
                        "id": "53101900",
                        "name": "Suits",
                        "commodities": [
                          {
                            "id": "53101901",
                            "name": "Boys suits"
                          },
                          {
                            "id": "53101902",
                            "name": "Mens suits"
                          },
                          {
                            "id": "53101903",
                            "name": "Girls suits"
                          },
                          {
                            "id": "53101904",
                            "name": "Womens suits"
                          },
                          {
                            "id": "53101905",
                            "name": "Infants suits"
                          }
                        ]
                      },
                      {
                        "id": "53102000",
                        "name": "Dresses and skirts and saris and kimonos",
                        "commodities": [
                          {
                            "id": "53102001",
                            "name": "Girls dresses or skirts or saris or kimonos"
                          },
                          {
                            "id": "53102002",
                            "name": "Womens dresses or skirts or saris or kimonos"
                          },
                          {
                            "id": "53102003",
                            "name": "Infants dresses or skirts or saris or kimonos"
                          }
                        ]
                      },
                      {
                        "id": "53102100",
                        "name": "Overalls and coveralls",
                        "commodities": [
                          {
                            "id": "53102101",
                            "name": "Boys overalls or coveralls"
                          },
                          {
                            "id": "53102102",
                            "name": "Mens overalls or coveralls"
                          },
                          {
                            "id": "53102103",
                            "name": "Girls overalls or coveralls"
                          },
                          {
                            "id": "53102104",
                            "name": "Womens overalls or coveralls"
                          },
                          {
                            "id": "53102105",
                            "name": "Infants overalls or coveralls"
                          }
                        ]
                      },
                      {
                        "id": "53102200",
                        "name": "Folkloric clothing",
                        "commodities": [
                          {
                            "id": "53102201",
                            "name": "Boys folkloric clothing"
                          },
                          {
                            "id": "53102202",
                            "name": "Mens folkloric clothing"
                          },
                          {
                            "id": "53102203",
                            "name": "Girls folkloric clothing"
                          },
                          {
                            "id": "53102204",
                            "name": "Womens folkloric clothing"
                          },
                          {
                            "id": "53102205",
                            "name": "Infants folkloric clothing"
                          }
                        ]
                      },
                      {
                        "id": "53102300",
                        "name": "Undergarments",
                        "commodities": [
                          {
                            "id": "53102301",
                            "name": "Undershirts"
                          },
                          {
                            "id": "53102302",
                            "name": "Slips"
                          },
                          {
                            "id": "53102303",
                            "name": "Underpants"
                          },
                          {
                            "id": "53102304",
                            "name": "Brassieres"
                          },
                          {
                            "id": "53102305",
                            "name": "Infant diapers"
                          },
                          {
                            "id": "53102306",
                            "name": "Adult diapers"
                          },
                          {
                            "id": "53102307",
                            "name": "Body shaping garments"
                          },
                          {
                            "id": "53102308",
                            "name": "Diaper liners"
                          },
                          {
                            "id": "53102309",
                            "name": "Breast form"
                          },
                          {
                            "id": "53102310",
                            "name": "Breast form cover"
                          }
                        ]
                      },
                      {
                        "id": "53102400",
                        "name": "Hosiery",
                        "commodities": [
                          {
                            "id": "53102401",
                            "name": "Stockings"
                          },
                          {
                            "id": "53102402",
                            "name": "Socks"
                          },
                          {
                            "id": "53102403",
                            "name": "Panty hose"
                          },
                          {
                            "id": "53102404",
                            "name": "Tights"
                          }
                        ]
                      },
                      {
                        "id": "53102500",
                        "name": "Clothing accessories",
                        "commodities": [
                          {
                            "id": "53102501",
                            "name": "Belts or suspenders"
                          },
                          {
                            "id": "53102502",
                            "name": "Ties or scarves or mufflers"
                          },
                          {
                            "id": "53102503",
                            "name": "Hats"
                          },
                          {
                            "id": "53102504",
                            "name": "Gloves or mittens"
                          },
                          {
                            "id": "53102505",
                            "name": "Umbrellas"
                          },
                          {
                            "id": "53102506",
                            "name": "Sweat bands"
                          },
                          {
                            "id": "53102507",
                            "name": "Clothing hangers"
                          },
                          {
                            "id": "53102508",
                            "name": "Armbands"
                          },
                          {
                            "id": "53102509",
                            "name": "Garters"
                          },
                          {
                            "id": "53102510",
                            "name": "Tassles"
                          },
                          {
                            "id": "53102511",
                            "name": "Bandannas"
                          },
                          {
                            "id": "53102512",
                            "name": "Handkerchiefs"
                          },
                          {
                            "id": "53102513",
                            "name": "Headbands"
                          },
                          {
                            "id": "53102514",
                            "name": "Pocket protectors"
                          },
                          {
                            "id": "53102515",
                            "name": "Button covers"
                          },
                          {
                            "id": "53102516",
                            "name": "Caps"
                          },
                          {
                            "id": "53102517",
                            "name": "Tie holders"
                          },
                          {
                            "id": "53102518",
                            "name": "Chevrons"
                          },
                          {
                            "id": "53102519",
                            "name": "Gorgets"
                          },
                          {
                            "id": "53102520",
                            "name": "Shoulder boards or epaulettes"
                          },
                          {
                            "id": "53102521",
                            "name": "Bib"
                          }
                        ]
                      },
                      {
                        "id": "53102600",
                        "name": "Nightwear",
                        "commodities": [
                          {
                            "id": "53102601",
                            "name": "Boys pajamas or nightshirts or robes"
                          },
                          {
                            "id": "53102602",
                            "name": "Mens pajamas or nightshirts or robes"
                          },
                          {
                            "id": "53102603",
                            "name": "Girls pajamas or nightshirts or robes"
                          },
                          {
                            "id": "53102604",
                            "name": "Womens pajamas or nightshirts or robes"
                          },
                          {
                            "id": "53102605",
                            "name": "Infants pajamas or nightshirts or robes"
                          },
                          {
                            "id": "53102606",
                            "name": "Bath robes"
                          }
                        ]
                      },
                      {
                        "id": "53102700",
                        "name": "Uniforms",
                        "commodities": [
                          {
                            "id": "53102701",
                            "name": "Military uniforms"
                          },
                          {
                            "id": "53102702",
                            "name": "Customs uniforms"
                          },
                          {
                            "id": "53102703",
                            "name": "Police uniforms"
                          },
                          {
                            "id": "53102704",
                            "name": "Institutional food preparation or service attire"
                          },
                          {
                            "id": "53102705",
                            "name": "School uniforms"
                          },
                          {
                            "id": "53102706",
                            "name": "Security uniforms"
                          },
                          {
                            "id": "53102707",
                            "name": "Doctors coat"
                          },
                          {
                            "id": "53102708",
                            "name": "Nurses uniforms"
                          },
                          {
                            "id": "53102709",
                            "name": "Ambulance officers uniforms"
                          },
                          {
                            "id": "53102710",
                            "name": "Corporate uniforms"
                          },
                          {
                            "id": "53102711",
                            "name": "Salon smocks"
                          },
                          {
                            "id": "53102712",
                            "name": "Paramedic uniforms"
                          },
                          {
                            "id": "53102713",
                            "name": "Ushers uniforms"
                          },
                          {
                            "id": "53102714",
                            "name": "Judicial robe"
                          },
                          {
                            "id": "53102715",
                            "name": "Prison officer uniform"
                          },
                          {
                            "id": "53102716",
                            "name": "Prisoner uniform"
                          },
                          {
                            "id": "53102717",
                            "name": "Sport uniform"
                          }
                        ]
                      },
                      {
                        "id": "53102800",
                        "name": "Swimwear",
                        "commodities": [
                          {
                            "id": "53102801",
                            "name": "Mens swimwear"
                          },
                          {
                            "id": "53102802",
                            "name": "Womens swimwear"
                          },
                          {
                            "id": "53102803",
                            "name": "Boys swimwear"
                          },
                          {
                            "id": "53102804",
                            "name": "Girls swimwear"
                          },
                          {
                            "id": "53102805",
                            "name": "Infants swimwear"
                          }
                        ]
                      },
                      {
                        "id": "53102900",
                        "name": "Athletic wear",
                        "commodities": [
                          {
                            "id": "53102901",
                            "name": "Womens athletic wear"
                          },
                          {
                            "id": "53102902",
                            "name": "Mens athletic wear"
                          },
                          {
                            "id": "53102903",
                            "name": "Boys athletic wear"
                          },
                          {
                            "id": "53102904",
                            "name": "Girls athletic wear"
                          }
                        ]
                      },
                      {
                        "id": "53103000",
                        "name": "Tshirts",
                        "commodities": [
                          {
                            "id": "53103001",
                            "name": "Mens tshirts"
                          },
                          {
                            "id": "53103002",
                            "name": "Tshirt for expectant mothers"
                          },
                          {
                            "id": "53103003",
                            "name": "Ladies tshirt"
                          }
                        ]
                      },
                      {
                        "id": "53103100",
                        "name": "Waistcoats",
                        "commodities": [
                          {
                            "id": "53103101",
                            "name": "Mens waistcoats"
                          },
                          {
                            "id": "53103102",
                            "name": "Ladies vest"
                          }
                        ]
                      },
                      {
                        "id": "53103200",
                        "name": "Disposable clothes",
                        "commodities": [
                          {
                            "id": "53103201",
                            "name": "Disposable work coat"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "53110000",
                    "name": "Footwear",
                    "classes": [
                      {
                        "id": "53111500",
                        "name": "Boots",
                        "commodities": [
                          {
                            "id": "53111501",
                            "name": "Mens boots"
                          },
                          {
                            "id": "53111502",
                            "name": "Womens boots"
                          },
                          {
                            "id": "53111503",
                            "name": "Boys boots"
                          },
                          {
                            "id": "53111504",
                            "name": "Girls boots"
                          },
                          {
                            "id": "53111505",
                            "name": "Infants boots"
                          }
                        ]
                      },
                      {
                        "id": "53111600",
                        "name": "Shoes",
                        "commodities": [
                          {
                            "id": "53111601",
                            "name": "Mens shoes"
                          },
                          {
                            "id": "53111602",
                            "name": "Womens shoes"
                          },
                          {
                            "id": "53111603",
                            "name": "Boys shoes"
                          },
                          {
                            "id": "53111604",
                            "name": "Girls shoes"
                          },
                          {
                            "id": "53111605",
                            "name": "Infants shoes"
                          }
                        ]
                      },
                      {
                        "id": "53111700",
                        "name": "Slippers",
                        "commodities": [
                          {
                            "id": "53111701",
                            "name": "Mens slippers"
                          },
                          {
                            "id": "53111702",
                            "name": "Womens slippers"
                          },
                          {
                            "id": "53111703",
                            "name": "Boys slippers"
                          },
                          {
                            "id": "53111704",
                            "name": "Girls slippers"
                          },
                          {
                            "id": "53111705",
                            "name": "Infants slippers"
                          }
                        ]
                      },
                      {
                        "id": "53111800",
                        "name": "Sandals",
                        "commodities": [
                          {
                            "id": "53111801",
                            "name": "Mens sandals"
                          },
                          {
                            "id": "53111802",
                            "name": "Womens sandals"
                          },
                          {
                            "id": "53111803",
                            "name": "Boys sandals"
                          },
                          {
                            "id": "53111804",
                            "name": "Girls sandals"
                          },
                          {
                            "id": "53111805",
                            "name": "Infants sandals"
                          }
                        ]
                      },
                      {
                        "id": "53111900",
                        "name": "Athletic footwear",
                        "commodities": [
                          {
                            "id": "53111901",
                            "name": "Mens athletic footwear"
                          },
                          {
                            "id": "53111902",
                            "name": "Womens athletic footwear"
                          },
                          {
                            "id": "53111903",
                            "name": "Boys athletic footwear"
                          },
                          {
                            "id": "53111904",
                            "name": "Girls athletic footwear"
                          },
                          {
                            "id": "53111905",
                            "name": "Infants athletic footwear"
                          }
                        ]
                      },
                      {
                        "id": "53112000",
                        "name": "Shoe accessories",
                        "commodities": [
                          {
                            "id": "53112001",
                            "name": "Shoehorns"
                          },
                          {
                            "id": "53112002",
                            "name": "Shoelaces"
                          },
                          {
                            "id": "53112003",
                            "name": "Heel pads"
                          },
                          {
                            "id": "53112004",
                            "name": "Shoe stretcher"
                          },
                          {
                            "id": "53112005",
                            "name": "Foot measuring device"
                          },
                          {
                            "id": "53112006",
                            "name": "Shoe heelpiece machine"
                          }
                        ]
                      },
                      {
                        "id": "53112100",
                        "name": "Overshoes",
                        "commodities": [
                          {
                            "id": "53112101",
                            "name": "Mens overshoes"
                          },
                          {
                            "id": "53112102",
                            "name": "Womens overshoes"
                          },
                          {
                            "id": "53112103",
                            "name": "Boys overshoes"
                          },
                          {
                            "id": "53112104",
                            "name": "Girls overshoes"
                          },
                          {
                            "id": "53112105",
                            "name": "Infants overshoes"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "53120000",
                    "name": "Luggage and handbags and packs and cases",
                    "classes": [
                      {
                        "id": "53121500",
                        "name": "Luggage",
                        "commodities": [
                          {
                            "id": "53121501",
                            "name": "Garment bags"
                          },
                          {
                            "id": "53121502",
                            "name": "Luggage sets"
                          },
                          {
                            "id": "53121503",
                            "name": "Individual luggage pieces"
                          }
                        ]
                      },
                      {
                        "id": "53121600",
                        "name": "Purses and handbags and bags",
                        "commodities": [
                          {
                            "id": "53121601",
                            "name": "Handbags or purses"
                          },
                          {
                            "id": "53121602",
                            "name": "Duffel bags"
                          },
                          {
                            "id": "53121603",
                            "name": "Backpacks"
                          },
                          {
                            "id": "53121605",
                            "name": "Coin purses"
                          },
                          {
                            "id": "53121606",
                            "name": "Lipstick cases"
                          },
                          {
                            "id": "53121607",
                            "name": "Cigar case"
                          },
                          {
                            "id": "53121608",
                            "name": "Shopping bags"
                          }
                        ]
                      },
                      {
                        "id": "53121700",
                        "name": "Business cases",
                        "commodities": [
                          {
                            "id": "53121701",
                            "name": "Briefcases"
                          },
                          {
                            "id": "53121702",
                            "name": "Attaches"
                          },
                          {
                            "id": "53121704",
                            "name": "Portfolios"
                          },
                          {
                            "id": "53121705",
                            "name": "Equipment cases"
                          },
                          {
                            "id": "53121706",
                            "name": "Computer bags"
                          }
                        ]
                      },
                      {
                        "id": "53121800",
                        "name": "Travel kits and accessories",
                        "commodities": [
                          {
                            "id": "53121801",
                            "name": "Travel kits"
                          },
                          {
                            "id": "53121802",
                            "name": "Travel carts"
                          },
                          {
                            "id": "53121803",
                            "name": "Garment brushes"
                          },
                          {
                            "id": "53121804",
                            "name": "Makeup or manicure cases"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "53130000",
                    "name": "Personal care products",
                    "classes": [
                      {
                        "id": "53131500",
                        "name": "Dental",
                        "commodities": [
                          {
                            "id": "53131501",
                            "name": "Mouthwash"
                          },
                          {
                            "id": "53131502",
                            "name": "Toothpaste"
                          },
                          {
                            "id": "53131503",
                            "name": "Toothbrushes"
                          },
                          {
                            "id": "53131504",
                            "name": "Dental floss"
                          },
                          {
                            "id": "53131505",
                            "name": "Infant soother or pacifier or dummy"
                          },
                          {
                            "id": "53131506",
                            "name": "Dental kits"
                          },
                          {
                            "id": "53131507",
                            "name": "Toothpicks"
                          },
                          {
                            "id": "53131508",
                            "name": "Denture cleaning tablets"
                          },
                          {
                            "id": "53131509",
                            "name": "Mouth fresheners"
                          },
                          {
                            "id": "53131510",
                            "name": "Denture adhesive"
                          }
                        ]
                      },
                      {
                        "id": "53131600",
                        "name": "Bath and body",
                        "commodities": [
                          {
                            "id": "53131601",
                            "name": "Shower caps"
                          },
                          {
                            "id": "53131602",
                            "name": "Hair care supplies"
                          },
                          {
                            "id": "53131603",
                            "name": "Razors"
                          },
                          {
                            "id": "53131604",
                            "name": "Hair combs or brushes"
                          },
                          {
                            "id": "53131605",
                            "name": "Vanity kits"
                          },
                          {
                            "id": "53131606",
                            "name": "Deodorants"
                          },
                          {
                            "id": "53131607",
                            "name": "Hand or body lotion or oil"
                          },
                          {
                            "id": "53131608",
                            "name": "Soaps"
                          },
                          {
                            "id": "53131609",
                            "name": "Sun protection products"
                          },
                          {
                            "id": "53131610",
                            "name": "Eye care supplies"
                          },
                          {
                            "id": "53131611",
                            "name": "Shaving creams"
                          },
                          {
                            "id": "53131612",
                            "name": "Bath gels"
                          },
                          {
                            "id": "53131613",
                            "name": "Facial care products"
                          },
                          {
                            "id": "53131614",
                            "name": "Foot care products"
                          },
                          {
                            "id": "53131615",
                            "name": "Feminine hygiene products"
                          },
                          {
                            "id": "53131616",
                            "name": "Para pharmaceutical creams or lotions"
                          },
                          {
                            "id": "53131617",
                            "name": "Manicure implements"
                          },
                          {
                            "id": "53131618",
                            "name": "Pedicure implements"
                          },
                          {
                            "id": "53131619",
                            "name": "Cosmetics"
                          },
                          {
                            "id": "53131620",
                            "name": "Perfumes or colognes or fragrances"
                          },
                          {
                            "id": "53131621",
                            "name": "Nail clippers"
                          },
                          {
                            "id": "53131622",
                            "name": "Condoms"
                          },
                          {
                            "id": "53131623",
                            "name": "Hair removal or depilatory products"
                          },
                          {
                            "id": "53131624",
                            "name": "Disposable personal wipes"
                          },
                          {
                            "id": "53131625",
                            "name": "Hair or beard nets"
                          },
                          {
                            "id": "53131626",
                            "name": "Hand sanitizer"
                          },
                          {
                            "id": "53131627",
                            "name": "Hand cleaner"
                          },
                          {
                            "id": "53131628",
                            "name": "Shampoos"
                          },
                          {
                            "id": "53131629",
                            "name": "Makeup kits"
                          },
                          {
                            "id": "53131630",
                            "name": "Lip balm"
                          },
                          {
                            "id": "53131631",
                            "name": "Tattoos"
                          },
                          {
                            "id": "53131632",
                            "name": "Hot rollers"
                          },
                          {
                            "id": "53131633",
                            "name": "Barrettes"
                          },
                          {
                            "id": "53131634",
                            "name": "Chemical protection products"
                          },
                          {
                            "id": "53131635",
                            "name": "Shaving brushes"
                          },
                          {
                            "id": "53131636",
                            "name": "Rose water"
                          },
                          {
                            "id": "53131637",
                            "name": "Nursing pads"
                          },
                          {
                            "id": "53131638",
                            "name": "Nail polish"
                          },
                          {
                            "id": "53131639",
                            "name": "Urinary incontinence pad"
                          },
                          {
                            "id": "53131640",
                            "name": "Nail polish remover"
                          },
                          {
                            "id": "53131641",
                            "name": "Petroleum jelly"
                          },
                          {
                            "id": "53131642",
                            "name": "Barber and salon hair cutting gown or cape"
                          },
                          {
                            "id": "53131643",
                            "name": "Electric hair clipper"
                          },
                          {
                            "id": "53131644",
                            "name": "Aromatherapy essential oil"
                          },
                          {
                            "id": "53131645",
                            "name": "Ear piercing instrument or gun"
                          },
                          {
                            "id": "53131646",
                            "name": "Blackhead remover"
                          },
                          {
                            "id": "53131647",
                            "name": "Infant hygiene and personal care set"
                          },
                          {
                            "id": "53131648",
                            "name": "Insect repellant"
                          },
                          {
                            "id": "53131649",
                            "name": "Bath and body powder"
                          },
                          {
                            "id": "53131650",
                            "name": "Facial sauna"
                          },
                          {
                            "id": "53131651",
                            "name": "Personal hygiene kit"
                          }
                        ]
                      },
                      {
                        "id": "53131700",
                        "name": "Therapeutic massage equipment",
                        "commodities": [
                          {
                            "id": "53131701",
                            "name": "Hand held massaging unit"
                          },
                          {
                            "id": "53131702",
                            "name": "Massage machine"
                          }
                        ]
                      },
                      {
                        "id": "53131800",
                        "name": "Tattoo equipment and accessories and materials",
                        "commodities": [
                          {
                            "id": "53131801",
                            "name": "Tattoo ink"
                          },
                          {
                            "id": "53131802",
                            "name": "Tattoo needle"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "53140000",
                    "name": "Sewing supplies and accessories",
                    "classes": [
                      {
                        "id": "53141500",
                        "name": "Sewing fasteners",
                        "commodities": [
                          {
                            "id": "53141501",
                            "name": "Straight pins"
                          },
                          {
                            "id": "53141502",
                            "name": "Safety pins"
                          },
                          {
                            "id": "53141503",
                            "name": "Zippers"
                          },
                          {
                            "id": "53141504",
                            "name": "Buckles"
                          },
                          {
                            "id": "53141505",
                            "name": "Buttons"
                          },
                          {
                            "id": "53141506",
                            "name": "Snaps"
                          },
                          {
                            "id": "53141507",
                            "name": "Clasps"
                          },
                          {
                            "id": "53141508",
                            "name": "Garment rivet"
                          }
                        ]
                      },
                      {
                        "id": "53141600",
                        "name": "Miscellaneous sewing supplies",
                        "commodities": [
                          {
                            "id": "53141601",
                            "name": "Pin cushions"
                          },
                          {
                            "id": "53141602",
                            "name": "Sewing kits"
                          },
                          {
                            "id": "53141603",
                            "name": "Thimbles"
                          },
                          {
                            "id": "53141604",
                            "name": "Sewing patterns"
                          },
                          {
                            "id": "53141605",
                            "name": "Sewing needles"
                          },
                          {
                            "id": "53141606",
                            "name": "Bobbins or bobbin holders"
                          },
                          {
                            "id": "53141607",
                            "name": "Seam gauge"
                          },
                          {
                            "id": "53141608",
                            "name": "Bodkin"
                          },
                          {
                            "id": "53141609",
                            "name": "Loop turner"
                          },
                          {
                            "id": "53141610",
                            "name": "Fabric or tailors chalk holders"
                          },
                          {
                            "id": "53141611",
                            "name": "Fabric markers or fabric pencils or fabric chalk"
                          },
                          {
                            "id": "53141612",
                            "name": "Serrated pattern tracing wheel"
                          },
                          {
                            "id": "53141614",
                            "name": "Tapestry needles"
                          },
                          {
                            "id": "53141615",
                            "name": "Weaving needles"
                          },
                          {
                            "id": "53141616",
                            "name": "Looper looms"
                          },
                          {
                            "id": "53141617",
                            "name": "Cotton jersey loops"
                          },
                          {
                            "id": "53141618",
                            "name": "Needlepoint canvas"
                          },
                          {
                            "id": "53141619",
                            "name": "Magnet wands"
                          },
                          {
                            "id": "53141620",
                            "name": "Seam ripper"
                          },
                          {
                            "id": "53141621",
                            "name": "Needle threader"
                          },
                          {
                            "id": "53141622",
                            "name": "Dressmakers ruler"
                          },
                          {
                            "id": "53141623",
                            "name": "Liquid thread lock or reinforcer"
                          },
                          {
                            "id": "53141624",
                            "name": "Cross stitch fabric or needles"
                          },
                          {
                            "id": "53141625",
                            "name": "Cross stitch designs"
                          },
                          {
                            "id": "53141626",
                            "name": "Embroidery hoops"
                          },
                          {
                            "id": "53141627",
                            "name": "Crochet hooks"
                          },
                          {
                            "id": "53141628",
                            "name": "Quilters basting tools"
                          },
                          {
                            "id": "53141629",
                            "name": "Quilters pins"
                          },
                          {
                            "id": "53141630",
                            "name": "Pattern cutting mats or boards"
                          },
                          {
                            "id": "53141631",
                            "name": "Pattern notcher"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
},
mutations: {
     SET_PRODUCT: (state, data) => {
         state.products = data
       },
       SET_CATEGORIES_SHOW: (state, data) => {
        state.categoryShow = data
      },
       SET_CATEGORIES: (state, data) => {
        state.products = data
      },
       SET_BRAND: (state, data) => {
        state.brand = data
      },

      SET_MENU_SHOW: (state, action) => {
        state.isMenuShow = action 
      },

      SET_DATA (state, {notshow}) {
        state.notshow = notshow;
      },

      IS_LOADING: (state , action) => {
        state.isLoading = action
      },
      
      IS_ERROR: (state , action) => {
        state.isError = action
      },
      IS_CLEAR_ALL: (state , action) => {
        state.isClearAll = action
      },
},
actions: {
     GET_PRODUCT: async ({ commit }, payload) => {
       try{
         const { data } = await axios.get(`${'https://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com/api/v1/' +payload}`);
     // alert(payload)
         if (data.items.length == 0) {
          commit('IS_LOADING', true)
         }else{
          commit('SET_BRAND', data)
          commit('IS_LOADING', false)
         }
        }catch (err) {
          // if error commit search failed and clear the search input
          commit('IS_LOADING', false)
        }
      },

      GET_PRODUCT_BYCATOGRY: async ({ commit }, payload) => {
        try{
          const { data } = await axios.get(payload);
          //alert(payload)
          if (data.items.length == 0) {
           commit('IS_LOADING', true)
          }else{
           commit('SET_BRAND', data)
           commit('IS_LOADING', false)
          }
         }catch (err) {
           // if error commit search failed and clear the search input
           commit('IS_LOADING', false)
         }
       },

      GET_CATEGORIES: async ({ commit }) => {
        try{
          const { data } = await axios.get(`${'https://koolkart-ahold-delhaize-team.inmbzp8022.in.dst.ibm.com/api/v1/categories'}`);
       // alert(JSON.stringify(data.segments))
           commit('SET_CATEGORIES', data.segments)
         }catch (err) {
           // if error commit search failed and clear the search input
           commit('IS_LOADING', false)
         }
       },
      SET_BRAND: async ({ commit, }, {data}) => {
        return commit('SET_BRAND', data)
        
     },
       SET_DATA_AVAIL({commit}, {notshow}) {
        // alert(notshow)
      return commit('SET_DATA', {notshow})
    }
}
})