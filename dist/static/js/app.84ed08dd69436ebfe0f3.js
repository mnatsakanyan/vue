webpackJsonp([2],{"/TLO":function(t,a,e){"use strict";function i(t){e("xSI/")}var s=e("KJ1j"),r=e("5r9D"),o=e("VU/8"),n=i,l=o(s.a,r.a,!1,n,null,null);a.a=l.exports},"0vjO":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header",[e("nav",[e("v-app",{attrs:{id:"inspire"}},[e("v-navigation-drawer",{attrs:{floating:"",dark:""}},[e("div",{staticClass:"imgFidem"},[e("img",{attrs:{src:"http://findplaces.net/sites/default/files/787/2152/1387871748119093img.jpg",align:"center",alt:""}})]),t._v(" "),e("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.items,function(a){return e("v-list-tile",{key:a.title,attrs:{to:a.title},on:{click:function(t){}}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icon))])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[e("router-link",{attrs:{to:""}},[t._v(t._s(a.title))])],1)],1)],1)}))],1)],1)],1)]),t._v(" "),e("section",{staticClass:"routerSection"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)])},s=[],r={render:i,staticRenderFns:s};a.a=r},"4t99":function(t,a){},"5r9D":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard"},[e("section",{staticClass:"mainSection"},[e("h2",{staticStyle:{color:"aliceblue","text-align":"center"}},[t._v(" Category Table ")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),e("v-app",{attrs:{id:"inspire"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.catArray,"hide-actions":"",dark:""},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",[t._v(t._s(a.item.id))]),t._v(" "),e("td",{staticClass:"text-xs-right catImage"},[e("img",{attrs:{src:a.item.cat_image,alt:""}})]),t._v(" "),e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.cat_name))]),t._v(" "),e("td",{staticClass:"text-xs-right"},[t._v(t._s(a.item.cat_date))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-danger edit",attrs:{"aria-label":"Settings","data-target":"#delModal","data-toggle":"modal"},on:{click:function(e){t.delCat(a.item.id)}}},[e("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),t._v("\r\n\t\t\t\t\t  \r\n\t\t\t\t\t"),e("a",{staticClass:"btn btn-info edit",attrs:{"data-target":"#modalUpdate","data-toggle":"modal","aria-label":"Settings"},on:{click:function(e){t.getCatOne(a.item.id)}}},[e("i",{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])])]}}])})],1),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"myModal",role:"dialog"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"usr"}},[t._v("Category Name:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"usr"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"pwd"}},[t._v("Category Image:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],staticClass:"form-control",attrs:{type:"text",id:"pwd"},domProps:{value:t.image},on:{input:function(a){a.target.composing||(t.image=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("v-btn",{attrs:{color:"primary",dark:"","data-dismiss":"modal"},on:{click:t.newCat}},[t._v("Create\r\n\t\t\t\t\t\t\t\t\t"),e("v-icon",{attrs:{dark:"",right:""}},[t._v("check_circle")])],1),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal",id:"close"}},[t._v("Close")])],1)])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"modalUpdate",role:"dialog"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),t._l(t.onlyCat,function(a){return e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"usr"}},[t._v("Category Name:")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name_up"},domProps:{value:a.cat_name}}),t._v(" "),e("label",{attrs:{for:"pwd"}},[t._v("Category Image:")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"image_up"},domProps:{value:a.cat_image}})]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.updateCat(a.id)}}},[t._v("Save")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal",id:"close"}},[t._v("Close")])])])})],2)])])],1),t._v(" "),e("footer")])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("button",{staticClass:" btn-top btn btn-primary btn-primary pull-right",attrs:{type:"button","data-toggle":"modal","data-target":"#myModal"}},[e("span",{staticClass:"glyphicon glyphicon-plus"}),t._v("   Create Category\r\n\t\t\t")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[t._v("Create Category")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[t._v("Update Category")])])}],r={render:i,staticRenderFns:s};a.a=r},"7nbN":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"edir-prod"},[e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},t._l(t.dataProduct,function(a){return e("v-app",{attrs:{id:"inspire"}},[e("form",[e("input",{attrs:{label:"Brand",required:""},domProps:{value:a.brand}}),t._v(" "),e("v-text-field",{staticClass:"color",attrs:{label:"Color",value:a.color,required:""}}),t._v(" "),e("v-text-field",{staticClass:"made_in",attrs:{label:"Made in",value:a.made_in,required:""}}),t._v(" "),e("v-text-field",{staticClass:"quality",attrs:{label:"Quality",value:a.quality,required:""}}),t._v(" "),e("v-text-field",{staticClass:"size",attrs:{label:"Size",value:a.size,required:""}}),t._v(" "),e("v-text-field",{staticClass:"price",attrs:{number:"",label:"Price",value:a.price,required:""}}),t._v("textarea \n\t  \n\t\t"),e("v-text-field",{staticClass:"description",attrs:{label:"Description",textarea:"",value:a.description,required:""}}),t._v(" "),e("v-btn",{on:{click:function(e){t.editProduct(a.id)}}},[t._v("Save")]),t._v(" "),e("v-btn",[t._v("cancel")])],1)])}))],1)])},s=[],r={render:i,staticRenderFns:s};a.a=r},AcXX:function(t,a,e){"use strict";function i(t){e("TSGZ")}var s=e("lqBA"),r=e("geA4"),o=e("VU/8"),n=i,l=o(s.a,r.a,!1,n,null,null);a.a=l.exports},KJ1j:function(t,a,e){"use strict";var i=e("mtWM"),s=e.n(i),r={name:"dashboard",props:[],mounted:function(){},data:function(){return{catArray:[],onlyCat:[],name:"",image:"",name_up:"",image_up:"",dialog:!1,headers:[{text:"ID",value:"id"},{text:"Category Image",value:"cat_image"},{text:"Category Name",value:"cat_name"},{text:"Create Date",value:"cat_date"},{text:"Action",value:"action"}]}},created:function(){this.getCat()},methods:{getCat:function(){var t=this;s.a.get("https://fierce-springs-22762.herokuapp.com/api").then(function(a){console.log(a),t.catArray=a.data.res,console.log(t.catArray[0])})},getCatOne:function(t){var a=this;console.log(t),s.a.get("https://fierce-springs-22762.herokuapp.com/api/category/"+t).then(function(t){a.onlyCat=t.data.res,console.log(a.onlyCat)})},newCat:function(){var t=this,a={cat_name:this.name,cat_image:this.image,cat_date:new Date};s.a.post("https://fierce-springs-22762.herokuapp.com/api/create",a).then(function(a){console.log(a),!1===a.data.error&&($("#close").trigger("click"),t.getCat(),t.name="",t.image="")})},delCat:function(t){var a=this;s.a.delete("https://fierce-springs-22762.herokuapp.com/api/delete/"+t).then(function(t){console.log(t.err),!1===t.data.error&&a.getCat()})},updateCat:function(t){var a=this,e={cat_name:$("#name_up").val(),cat_image:$("#image_up").val(),cat_date:new Date};s.a.post("https://fierce-springs-22762.herokuapp.com/api/update/"+t,e).then(function(t){console.log(t),!1===t.data.error&&(a.getCat(),a.name_up="",a.image_up="")})}},computed:{},component:{}};a.a=r},M93x:function(t,a,e){"use strict";function i(t){e("jOY5")}var s=e("xJD8"),r=e("0vjO"),o=e("VU/8"),n=i,l=o(s.a,r.a,!1,n,null,null);a.a=l.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),s=e("M93x"),r=e("YaEn"),o=e("3EgV"),n=e.n(o);e.e(0).then(e.bind(null,"7zck")),i.a.use(n.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},TSGZ:function(t,a){},UKg4:function(t,a,e){"use strict";var i=e("mtWM"),s=e.n(i);a.a={name:"edir-prod",components:{},props:[],brand:"",data:function(){return{dataProduct:[]}},created:function(){this.geteditProduct()},computed:{},mounted:function(){},methods:{geteditProduct:function(){var t=this,a=this.$route.query.prodId;s.a.get("https://fierce-springs-22762.herokuapp.com/api/product/"+a).then(function(a){t.dataProduct=a.data.res,console.log(t.dataProduct)})},editProduct:function(t){var a=this,e={brand:this.brand,color:$(".color").val(),made_in:$(".made_in").val(),quality:$(".quality").val(),size:$(".size").val(),price:$(".price").val(),description:$(".description").val()};console.log(e),s.a.post("https://fierce-springs-22762.herokuapp.com/api/update/prod/"+t,e).then(function(t){console.log(e),console.log(a.dataProduct)})}}}},W9Qt:function(t,a,e){"use strict";function i(t){e("4t99")}var s=e("UKg4"),r=e("7nbN"),o=e("VU/8"),n=i,l=o(s.a,r.a,!1,n,"data-v-802e674a",null);a.a=l.exports},YaEn:function(t,a,e){"use strict";var i=e("7+uW"),s=e("/ocq"),r=e("/TLO"),o=e("AcXX"),n=e("W9Qt");i.a.use(s.a),a.a=new s.a({routes:[{path:"/",component:r.a},{path:"/Dashboard",name:"dash",component:r.a},{path:"/Product",name:"prod",component:o.a},{path:"/edit",name:"edit",component:n.a}]})},geA4:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"product"}},[e("div",{staticClass:"mainProd",attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("div",[e("v-tabs",{attrs:{dark:"",grow:""}},[e("v-toolbar",{attrs:{color:"cyan",dark:""}},[e("v-toolbar-side-icon"),t._v(" "),e("v-toolbar-title",[t._v("Page title")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("search")])],1),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("more_vert")])],1),t._v(" "),e("v-tabs-bar",{staticClass:"cyan",attrs:{slot:"extension"},slot:"extension"},[e("v-tabs-slider",{attrs:{color:"yellow"}}),t._v(" "),t._l(t.dataMenu,function(a,i){return e("v-tabs-item",{key:a.id,attrs:{href:"#tab-"+i},on:{click:function(e){t.getProduct(a.id)}}},[t._v("\r\n\t\t\t\t\t\t\t"+t._s(a.cat_name)+"\r\n\t\t\t\t\t\t")])}),t._v(" "),e("v-menu",{attrs:{"nudge-width":100,left:"",bottom:""}},[e("v-tabs-item",{attrs:{slot:"activator"},slot:"activator"},[t._v("\r\n\t\t\t\t\t\t\tMenu\r\n\t\t\t\t\t\t\t"),e("v-icon",[t._v("arrow_drop_down")])],1),t._v(" "),e("v-list",{staticClass:"grey lighten-3"})],1)],2)],1)],1)],1),t._v(" "),t._l(t.catSingle,function(a){return e("div",{staticClass:"catInfo"},[e("div",{staticClass:"leftInfo"},[e("img",{attrs:{src:a.cat_image,alt:""}})]),t._v(" "),e("div",{staticClass:"centerDiv"},[e("p",[t._v(t._s(a.cat_name))])]),t._v(" "),e("div",{staticClass:"rightInfo"},[e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-btn",{attrs:{slot:"activator",dark:""},slot:"activator"},[t._v("+")]),t._v(" "),e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("New Product")])]),t._v(" "),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Brand",required:""},model:{value:t.brend,callback:function(a){t.brend=a},expression:"brend"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Color",required:""},model:{value:t.color,callback:function(a){t.color=a},expression:"color"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Quality",required:""},model:{value:t.quality,callback:function(a){t.quality=a},expression:"quality"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-text-field",{attrs:{label:"Price",required:""},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}})],1),t._v(" "),e("v-flex",{attrs:{xs6:""}},[e("v-select",{attrs:{items:t.states,label:"Made In","single-line":"",auto:"","hide-details":""},model:{value:t.made_in,callback:function(a){t.made_in=a},expression:"made_in"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-select",{attrs:{label:"Size",required:"",items:["0-20","20-30","30-40","40+"]},model:{value:t.size,callback:function(a){t.size=a},expression:"size"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"lab",attrs:{for:"exampleFormControlSelect1"}},[t._v("Category*")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},t._l(t.dataMenu,function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.cat_name))])}))])]),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Image(URL)",required:""},model:{value:t.image,callback:function(a){t.image=a},expression:"image"}})],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Description",required:""},model:{value:t.des,callback:function(a){t.des=a},expression:"des"}})],1)],1)],1),t._v(" "),e("small",[t._v("*indicates required field")])],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(a){t.dialog=!1}}},[t._v("Close")]),t._v(" "),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.createProduct}},[t._v("Save")])],1)],1)],1)],1)],1)])}),t._v(" "),e("div",{staticClass:"prodList"},[e("v-layout",{attrs:{row:""}},t._l(t.dataProd,function(a){return e("v-flex",{key:a.id,attrs:{xs12:"",sm6:"","offset-sm3":"",lg3:"",white:""},on:{click:function(t){}}},[e("v-card",[e("v-card-media",{attrs:{src:a.image,height:"300px"}}),t._v(" "),e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[t._v("Brand")]),t._v(" "),e("span",{staticClass:"grey--text"},[t._v(t._s(a.brand))])])]),t._v(" "),e("v-card-actions",[e("router-link",{attrs:{to:{path:"/edit",query:{prodId:a.id}},append:""}},[e("v-btn",{attrs:{flat:""}},[e("v-icon",{staticClass:"ed"},[t._v("fa-edit")]),t._v("Edit\r\n\t\t\t\t\t\t\t")],1)],1),t._v(" "),e("v-btn",{attrs:{flat:"",color:"purple"}},[t._v("Images")]),t._v(" "),e("v-btn",{attrs:{color:"error"},on:{click:function(e){t.deleteProduct(a.id)}}},[t._v("Delete")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},nativeOn:{click:function(a){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),t._v(" "),e("v-slide-y-transition",[e("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("Description\r\n\t\t\t\t\t\t\t\t"+t._s(a.description)+"\r\n\t\t\t\t\t\t")])],1)],1)],1)}))],1)],2)],1)])},s=[],r={render:i,staticRenderFns:s};a.a=r},jOY5:function(t,a){},lqBA:function(t,a,e){"use strict";var i=e("mtWM"),s=e.n(i);a.a={name:"product",props:[],mounted:function(){},data:function(){return{dataMenu:[],show:!1,dataProd:[],catSingle:[],prodId:20,dialog:!1,made_in:"",catName:[],brend:"",color:"",quality:"",price:"",size:"",cat:"",image:"",des:"",states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}},created:function(){this.getCat(),this.getProduct(20)},methods:{getCat:function(){var t=this;s.a.get("https://fierce-springs-22762.herokuapp.com/api").then(function(a){console.log(a),t.dataMenu=a.data.res,console.log(t.dataMenu)})},getProduct:function(t){var a=this;this.prodId=t,s.a.get("https://fierce-springs-22762.herokuapp.com/api/product/category/"+this.prodId).then(function(t){console.log(t),a.dataProd=t.data.res}),s.a.get("https://fierce-springs-22762.herokuapp.com/api/category/"+this.prodId).then(function(t){console.log(t),a.catSingle=t.data.res,console.log(a.catSingle)})},createProduct:function(){var t=this,a={brand:this.brend,price:Number(this.price),made_in:this.made_in,quality:this.quality,size:this.size,color:this.color,description:this.des,image:this.image,category:Number($("#exampleFormControlSelect1").val())};s.a.post("https://fierce-springs-22762.herokuapp.com/api/product/create",a).then(function(a){console.log(a),!1===a.data.error&&(t.dialog=!1,t.getProduct(Number($("#exampleFormControlSelect1").val())))})},deleteProduct:function(t){var a=this;s.a.delete("https://fierce-springs-22762.herokuapp.com/api/delete/product/"+t).then(function(t){console.log(t),a.getProduct(20)})}},computed:{}}},xJD8:function(t,a,e){"use strict";var i=e("mtWM");e.n(i),e("7+uW");a.a={name:"app",data:function(){return{catArray:[],items:[{title:"Dashboard",icon:"dashboard"},{title:"Product",icon:"dialpad"},{title:"Admin",icon:"gavel"}],right:null,dialog:!1}},created:function(){},methods:{}}},"xSI/":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.84ed08dd69436ebfe0f3.js.map