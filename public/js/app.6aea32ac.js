(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],p=0,m=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,n=1;n<i.length;n++){var l=i[n];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},r={app:0},s=[];function n(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2f505eb0"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,a){i=r[e]=[t,a]}));t.push(i[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var i=r[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,i[1](c)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("85ec"),r=i.n(a);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),e._m(1),i("router-view"),i("hr"),e._m(2)],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",attrs:{id:"mainNav"}},[i("div",{staticClass:"container"},[i("a",{staticClass:"navbar-brand",attrs:{href:"index.html"}},[e._v("Start Bootstrap")]),i("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[e._v(" Menu "),i("i",{staticClass:"fas fa-bars"})]),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[i("ul",{staticClass:"navbar-nav ml-auto"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[e._v("Home")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"/recipes/new"}},[e._v("Make a new recipe")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"post.html"}},[e._v("Sample Post")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"contact.html"}},[e._v("Contact")])])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"masthead",staticStyle:{"background-image":"url('https://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg')"}},[i("div",{staticClass:"overlay"}),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[i("div",{staticClass:"site-heading"},[i("h1",[e._v("My cool app name")]),i("span",{staticClass:"subheading"},[e._v("A Blog Theme by Start Bootstrap")])])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[i("ul",{staticClass:"list-inline text-center"},[i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"fa-stack fa-lg"},[i("i",{staticClass:"fas fa-circle fa-stack-2x"}),i("i",{staticClass:"fab fa-twitter fa-stack-1x fa-inverse"})])])]),i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"fa-stack fa-lg"},[i("i",{staticClass:"fas fa-circle fa-stack-2x"}),i("i",{staticClass:"fab fa-facebook-f fa-stack-1x fa-inverse"})])])]),i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"fa-stack fa-lg"},[i("i",{staticClass:"fas fa-circle fa-stack-2x"}),i("i",{staticClass:"fab fa-github fa-stack-1x fa-inverse"})])])])]),i("p",{staticClass:"copyright text-muted"},[e._v("Copyright © Your Website 2020")])])])])])}],n={methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")},getUserId:function(){return localStorage.getItem("user_id")}}},o=n,l=(i("034f"),i("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null),p=c.exports,u=(i("d3b7"),i("8c4f")),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("h1",[e._v(e._s(e.message))]),i("p",[e._v("Make a new recipe")]),i("p",[e._v("Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeTitle,expression:"newRecipeTitle"}],attrs:{type:"text"},domProps:{value:e.newRecipeTitle},on:{input:function(t){t.target.composing||(e.newRecipeTitle=t.target.value)}}})]),i("p",[e._v("Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeIngredients,expression:"newRecipeIngredients"}],attrs:{type:"text"},domProps:{value:e.newRecipeIngredients},on:{input:function(t){t.target.composing||(e.newRecipeIngredients=t.target.value)}}})]),i("p",[e._v("Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeDirections,expression:"newRecipeDirections"}],attrs:{type:"text"},domProps:{value:e.newRecipeDirections},on:{input:function(t){t.target.composing||(e.newRecipeDirections=t.target.value)}}})]),i("p",[e._v("Prep Time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipePrepTime,expression:"newRecipePrepTime"}],attrs:{type:"text"},domProps:{value:e.newRecipePrepTime},on:{input:function(t){t.target.composing||(e.newRecipePrepTime=t.target.value)}}})]),i("p",[e._v("Image Url: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeImageUrl,expression:"newRecipeImageUrl"}],attrs:{type:"text"},domProps:{value:e.newRecipeImageUrl},on:{input:function(t){t.target.composing||(e.newRecipeImageUrl=t.target.value)}}})]),i("button",{on:{click:function(t){return e.addRecipe()}}},[e._v("Add Recipe")]),e._l(e.recipes,(function(t){return i("div",[i("br"),i("br"),i("br"),i("br"),i("p",[e._v("Id: "+e._s(t.id))]),i("p",[e._v("title: "+e._s(t.title))]),i("p",[e._v("ingredients: "+e._s(t.ingredients))]),i("p",[e._v("image_url: "+e._s(t.image_url))]),i("img",{attrs:{src:t.image_url}}),i("button",{on:{click:function(i){return e.showInfo(t)}}},[e._v("Show more info")]),i("hr")])})),i("dialog",{attrs:{id:"recipe-details"}},[i("form",{attrs:{method:"dialog"}},[i("h1",[e._v("Recipe info")]),i("p",[e._v("Id: "+e._s(e.currentRecipe.id))]),i("p",[e._v("Title: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.title,expression:"currentRecipe.title"}],domProps:{value:e.currentRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"title",t.target.value)}}})]),i("p",[e._v("Chef: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.chef,expression:"currentRecipe.chef"}],domProps:{value:e.currentRecipe.chef},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"chef",t.target.value)}}})]),i("p",[e._v("Ingredients: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.ingredients,expression:"currentRecipe.ingredients"}],domProps:{value:e.currentRecipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"ingredients",t.target.value)}}})]),i("p",[e._v("Directions: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.directions,expression:"currentRecipe.directions"}],domProps:{value:e.currentRecipe.directions},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"directions",t.target.value)}}})]),i("p",[e._v("Prep time: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.prep_time,expression:"currentRecipe.prep_time"}],domProps:{value:e.currentRecipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"prep_time",t.target.value)}}})]),i("p",[e._v("Image URL: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.image_url,expression:"currentRecipe.image_url"}],domProps:{value:e.currentRecipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"image_url",t.target.value)}}})]),i("button",{on:{click:function(t){return e.updateRecipe(e.currentRecipe)}}},[e._v("Update")]),i("button",[e._v("Close")]),i("button",{on:{click:function(t){return e.destroyRecipe(e.currentRecipe)}}},[e._v("Delete recipe")])])])],2)},d=[],v=(i("c975"),i("a434"),i("bc3a")),g=i.n(v),f={data:function(){return{message:"Welcome to Vue.js!",name:"brian",recipes:[],newRecipeTitle:"",newRecipeIngredients:"",newRecipeDirections:"",newRecipePrepTime:"",newRecipeImageUrl:"",currentRecipe:{}}},created:function(){this.indexRecipes()},methods:{indexRecipes:function(){var e=this;console.log("why won't you print out!!!"),console.log("recipes index..."),g.a.get("/api/recipes").then((function(t){console.log(t),e.recipes=t.data}))},addRecipe:function(){var e=this;console.log("adding recipe..."),console.log(this.newRecipeTitle);var t={title:this.newRecipeTitle,prep_time:this.newRecipePrepTime,directions:this.newRecipeDirections,ingredients:this.newRecipeIngredients,image_url:this.newRecipeImageUrl};g.a.post("/api/recipes",t).then((function(t){console.log(t.data),e.recipes.push(t.data)}))},showInfo:function(e){console.log(e),this.currentRecipe=e,document.querySelector("#recipe-details").showModal()},updateRecipe:function(e){var t=this;console.log(e);var i={title:e.title,prep_time:e.prep_time,directions:e.directions,ingredients:e.ingredients,image_url:e.image_url};g.a.patch("/api/recipes/"+e.id,i).then((function(e){console.log(e.data),t.currentRecipe=e.data}))},destroyRecipe:function(e){var t=this;console.log(e),g.a.delete("/api/recipes/"+e.id).then((function(i){console.log(i.data);var a=t.recipes.indexOf(e);t.recipes.splice(a,1),console.log(a)}))}}},h=f,_=Object(l["a"])(h,m,d,!1,null,null,null),b=_.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"test"},[i("h1",[e._v(e._s(e.message))])])},C=[],x={data:function(){return{message:"Welcome to the show!"}},created:function(){},methods:{}},R=x,y=Object(l["a"])(R,w,C,!1,null,null,null),P=y.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"signup"},[e.status?i("img",{attrs:{src:"https://http.cat/"+e.status}}):e._e(),i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Signup")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Name:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.name.length<=20?i("small",{style:"font-size: "+e.name.length+"px"},[e._v("You have "+e._s(20-e.name.length)+" characters remaining")]):e._e(),e.name.length>20?i("small",[e._v("Your username is too long, has to be a max of 20 characters")]):e._e()]),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.password.length<6?i("small",{staticClass:"text-danger"},[e._v("Your password is too short")]):e._e(),e.password.length>20?i("small",[e._v("Your password is too long")]):e._e()]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password confirmation:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}}),e.password!==e.passwordConfirmation?i("small",[e._v("Passwords don't match")]):e._e()]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},I=[],N=(i("b0c0"),{data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[],status:""}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};g.a.post("/api/users",t).then((function(t){e.$router.push("/login")})).catch((function(t){e.errors=t.response.data.errors,console.log(t.response),e.status=t.response.status}))}}}),T=N,k=Object(l["a"])(T,$,I,!1,null,null,null),S=k.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Login")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Email:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Password:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},E=[],O={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};g.a.post("/api/sessions",t).then((function(t){console.log(t.data),g.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("user_id",t.data.user_id),e.$router.push("/")})).catch((function(t){e.errors=["Invalid email or password."],e.email="",e.password=""}))}}},U=O,D=Object(l["a"])(U,j,E,!1,null,null,null),M=D.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logout"})},q=[],L={created:function(){delete g.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),localStorage.removeItem("user_id"),this.$router.push("/")}},B=L,z=Object(l["a"])(B,A,q,!1,null,null,null),W=z.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[e._l(e.recipes,(function(t){return i("div",{staticClass:"post-preview"},[i("a",{attrs:{href:"/recipes/"+t.id}},[i("h2",{staticClass:"post-title"},[e._v(" "+e._s(t.title)+" ")]),i("h3",{staticClass:"post-subtitle"},[e._v(" "+e._s(t.directions)+" ")])]),i("p",{staticClass:"post-meta"},[e._v("Posted by "),i("a",{attrs:{href:"#"}},[e._v(e._s(t.chef))]),e._v(" on "+e._s(t.created_at))]),i("hr")])})),e._m(0)],2)])])])},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"clearfix"},[i("a",{staticClass:"btn btn-primary float-right",attrs:{href:"#"}},[e._v("Older Posts →")])])}],H=i("a7c6"),J=i.n(H),V={data:function(){return{message:"Welcome to the index page!",recipes:[],searchTerm:"",msg:"hello"}},created:function(){this.indexRecipes()},methods:{indexRecipes:function(){var e=this;console.log("in recipes index"),g.a.get("/api/recipes").then((function(t){console.log(t.data),e.recipes=t.data}))}},mixins:[J.a.mixin]},G=V,K=Object(l["a"])(G,Y,F,!1,null,null,null),Q=K.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._m(0),i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Make a new recipe")]),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Title:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Ingredients:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Directions:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.directions,expression:"directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.directions},on:{input:function(t){t.target.composing||(e.directions=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Prep Time:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.prepTime,expression:"prepTime"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prepTime},on:{input:function(t){t.target.composing||(e.prepTime=t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Image Url:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.imageUrl},on:{input:function(t){t.target.composing||(e.imageUrl=t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},Z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{attrs:{name:"sentMessage",id:"contactForm",novalidate:""}},[i("div",{staticClass:"control-group"},[i("div",{staticClass:"form-group floating-label-form-group controls"},[i("label",[e._v("Name")]),i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Name",id:"name",required:"","data-validation-required-message":"Please enter your name."}}),i("p",{staticClass:"help-block text-danger"})])]),i("div",{staticClass:"control-group"},[i("div",{staticClass:"form-group floating-label-form-group controls"},[i("label",[e._v("Email Address")]),i("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address",id:"email",required:"","data-validation-required-message":"Please enter your email address."}}),i("p",{staticClass:"help-block text-danger"})])]),i("div",{staticClass:"control-group"},[i("div",{staticClass:"form-group col-xs-12 floating-label-form-group controls"},[i("label",[e._v("Phone Number")]),i("input",{staticClass:"form-control",attrs:{type:"tel",placeholder:"Phone Number",id:"phone",required:"","data-validation-required-message":"Please enter your phone number."}}),i("p",{staticClass:"help-block text-danger"})])]),i("div",{staticClass:"control-group"},[i("div",{staticClass:"form-group floating-label-form-group controls"},[i("label",[e._v("Message")]),i("textarea",{staticClass:"form-control",attrs:{rows:"5",placeholder:"Message",id:"message",required:"","data-validation-required-message":"Please enter a message."}}),i("p",{staticClass:"help-block text-danger"})])]),i("br"),i("div",{attrs:{id:"success"}}),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"sendMessageButton"}},[e._v("Send")])])}],ee={data:function(){return{title:"",ingredients:"",directions:"",prepTime:"",imageUrl:"",errors:[]}},methods:{submit:function(){var e=this,t={title:this.title,ingredients:this.ingredients,directions:this.directions,prep_time:this.prepTime,image_url:this.imageUrl};console.log(t),g.a.post("/api/recipes",t).then((function(t){e.$router.push("/recipes")})).catch((function(t){e.errors=t.response.data.errors}))}}},te=ee,ie=Object(l["a"])(te,X,Z,!1,null,null,null),ae=ie.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("h1",[e._v(e._s(e.message))]),i("h1",[e._v("title: "+e._s(e.recipe.title))]),i("h1",[e._v("ingredients: "+e._s(e.recipe.ingredients))]),i("h1",[e._v("prep_time: "+e._s(e.recipe.prep_time))]),i("img",{attrs:{src:e.recipe.image_url}}),i("p",[e._v("recipe.user_id "+e._s(e.recipe.user_id))]),i("p",[e._v("current user's id "+e._s(e.$parent.getUserId()))]),e.recipe.user_id==e.$parent.getUserId()?i("div",[i("a",{attrs:{href:"/recipes/"+e.recipe.id+"/edit"}},[e._v("Edit this item")]),i("p",[i("button",{on:{click:function(t){return e.deleteRecipe()}}},[e._v("Delete the recipe")])])]):e._e()])},se=[],ne={data:function(){return{message:"Welcome to The show page!",recipe:{}}},created:function(){this.showRecipe()},methods:{showRecipe:function(){var e=this;console.log("showing the recipe..."),console.log(this.$route),g.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){console.log(t.data),e.recipe=t.data}))},deleteRecipe:function(){var e=this;console.log("deleting the recipe..."),g.a.delete("/api/recipes/".concat(this.$route.params.id)).then((function(t){console.log(t.data),e.$router.push("/recipes")}))}}},oe=ne,le=Object(l["a"])(oe,re,se,!1,null,null,null),ce=le.exports,pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipes-new"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[i("h1",[e._v("Edit a currently existing recipe")]),e._v(" "+e._s(e.recipe)+" "),i("ul",e._l(e.errors,(function(t){return i("li",{staticClass:"text-danger"},[e._v(e._s(t))])})),0),i("div",{staticClass:"form-group"},[i("label",[e._v("Title:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Ingredients:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Directions:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.directions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Prep Time:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",[e._v("Image Url:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image_url,expression:"recipe.image_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image_url",t.target.value)}}})]),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},ue=[],me={data:function(){return{recipe:{},errors:[]}},methods:{submit:function(){var e=this,t={title:this.recipe.title,ingredients:this.recipe.ingredients,directions:this.recipe.directions,prep_time:this.recipe.prep_time,image_url:this.recipe.image_url};console.log(t),g.a.patch("/api/recipes/".concat(this.$route.params.id),t).then((function(t){e.$router.push("/recipes")})).catch((function(t){e.errors=t.response.data.errors}))},showRecipe:function(){var e=this;console.log("showing the recipe..."),console.log(this.$route),g.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){console.log(t.data),e.recipe=t.data}))}},created:function(){this.showRecipe()}},de=me,ve=Object(l["a"])(de,pe,ue,!1,null,null,null),ge=ve.exports;a["a"].use(u["a"]);var fe=[{path:"/",name:"Home",component:b},{path:"/recipes",name:"RecipesIndex",component:Q},{path:"/recipes/new",name:"RecipesNew",component:ae},{path:"/recipes/:id",name:"RecipesShow",component:ce},{path:"/recipes/:id/edit",name:"RecipesEdit",component:ge},{path:"/signup",name:"signup",component:S},{path:"/login",name:"login",component:M},{path:"/logout",name:"logout",component:W},{path:"/test",name:"Test",component:P},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],he=new u["a"]({mode:"history",base:"/",routes:fe}),_e=he;g.a.defaults.baseURL="/";var be=localStorage.getItem("jwt");be&&(g.a.defaults.headers.common["Authorization"]="Bearer "+be),a["a"].config.productionTip=!1,new a["a"]({router:_e,render:function(e){return e(p)}}).$mount("#app");var we={capitalize:{onlyFirstLetter:!1},number:{format:"0",thousandsSeparator:",",decimalSeparator:"."},bytes:{decimalDigits:2},percent:{decimalDigits:2,multiplier:100},currency:{symbol:"$",decimalDigits:2,thousandsSeparator:",",decimalSeparator:".",symbolOnLeft:!0,spaceBetweenAmountAndSymbol:!1,showPlusSign:!1},pluralize:{includeNumber:!1},ordinal:{includeNumber:!1}};a["a"].use(J.a,we)},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.6aea32ac.js.map