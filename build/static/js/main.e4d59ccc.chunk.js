(this.webpackJsonporderapp=this.webpackJsonporderapp||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),o=a(7),m=(a(37),a(1)),s=a(8),i=a(9),u=a(11),d=a(10),h=new(function(){function e(){Object(s.a)(this,e),this.authenticated=!1}return Object(i.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),E=(a(38),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={clientorder:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://qwikchop.herokuapp.com/api/admin/dashboard/orders").then((function(e){return e.json()})).then((function(t){e.setState({clientorder:t}),console.log(e.state.clientorder)}))}},{key:"render",value:function(){return console.log("https://qwikchop.herokuapp.com"),l.a.createElement("div",{className:"dashboard"},l.a.createElement("header",null,l.a.createElement("div",{className:"nav-container"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("h1",null,"ADMIN "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/orders"},"Orders")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Meals")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"menu-update"},"Update menu")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"login-admin"},l.a.createElement("div",null,l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-door-closed",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"}),l.a.createElement("path",{d:"M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"}))))),l.a.createElement("li",null))))),l.a.createElement("div",{className:"main"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"FIRSTNAME"),l.a.createElement("th",null,"SURNAME"),l.a.createElement("th",null,"PHONE"),l.a.createElement("th",null,"LOCATION"),l.a.createElement("th",null,"ADDRESS"),l.a.createElement("th",null,"MEAL"),l.a.createElement("th",null,"PRICE (GH\u20b5)"))),l.a.createElement("tbody",null,this.state.clientorder.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null),l.a.createElement("td",null,e.firstname),l.a.createElement("td",null,e.surname),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.location),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.meal),l.a.createElement("td",null,e.price))}))),l.a.createElement("tfoot",null))))}}]),a}(l.a.Component)),p=a(31),v=a(14),f=(a(44),a(15)),b=a.n(f),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).changeHandler=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.submitHandler=function(t){t.preventDefault(),console.log(e.state);var a={firstname:e.state.firstname,surname:e.state.surname,location:e.state.location,phone:e.state.phone,address:e.state.address,meal:e.state.orders[0].meal,price:e.state.orders[0].price};console.log(a),alert("Your order: "+a.meal+" will be delivered to you soon. Kindly pay on delivery."),b.a.post("https://qwikchop.herokuapp.com/api/admin/dashboard/orders",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.state={foodavailable:[],orders:[],total:0,firstname:"",surname:"",phone:"",location:"",address:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://qwikchop.herokuapp.com/api/meals").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({foodavailable:t}),console.log(e.state.foodavailable)}))}},{key:"addHandler",value:function(e,t){var a={meal:e,price:t};this.setState({orders:[].concat(Object(p.a)(this.state.orders),[a]),total:this.state.total+t}),console.log(this.state.orders)}},{key:"getSum",value:function(e){}},{key:"render",value:function(){var e=this;return console.log(this.state.foodavailable),l.a.createElement("div",null,l.a.createElement("header",{className:"home-header"},l.a.createElement("div",{className:"home-nav-container"},l.a.createElement("div",{className:"home-logo"},l.a.createElement("h1",null,"QwikChop ")),l.a.createElement("div",{className:"home-navbar"},l.a.createElement("ul",{className:"home-nav-ul"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/LoginAdmin"},"Admin")))))),l.a.createElement("main",{className:"home-main"},l.a.createElement("div",{className:"home-menu-catergory"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h4",null,"Menu")),l.a.createElement("th",null,"ITEM"),l.a.createElement("th",null,"PRICE (GH\u20b5)"),l.a.createElement("th",null,"ORDER"))),l.a.createElement("tbody",null,this.state.foodavailable.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,l.a.createElement("strong",null,t.title)),l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.price),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.addHandler(t.description,t.price)}},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-plus-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})))))})))),l.a.createElement("div",{className:"home-menu"}),l.a.createElement("div",{className:"home-cart"},l.a.createElement("div",{className:"order-title"},"Your Order",l.a.createElement("i",null,l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-cart4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})))),l.a.createElement("table",{className:"table-table_summary"},l.a.createElement("tbody",null,this.state.orders.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement("a",{href:"#0"},l.a.createElement("i",{className:"pull-left"},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-dash-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))))),l.a.createElement("td",null,e.meal),l.a.createElement("td",null,l.a.createElement("strong",null,e.price)))})),l.a.createElement("tr",{className:"total"},l.a.createElement("td",null),l.a.createElement("td",null,"Total"),l.a.createElement("td",null,"GH\u20b5",this.state.total),l.a.createElement("td",null,l.a.createElement("button",null," Order"))))),l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("h4",null," Delivery Details"),l.a.createElement("input",{placeholder:"First name",name:"firstname",value:this.state.firstname,onChange:this.changeHandler}),l.a.createElement("input",{placeholder:"Surname",name:"surname",value:this.state.surname,onChange:this.changeHandler}),l.a.createElement("input",{type:"text",maxlength:"10",placeholder:"Phone",name:"phone",value:this.state.phone,onChange:this.changeHandler}),l.a.createElement("input",{placeholder:"Location",name:"location",value:this.state.location,onChange:this.changeHandler}),l.a.createElement("input",{placeholder:"Address",name:"address",value:this.state.address,onChange:this.changeHandler}),l.a.createElement("input",{type:"submit",value:" Order"})))))}}]),a}(n.Component),w=(a(62),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),console.log(n.state);var t=n.state;t.title,t.description,t.price;b.a.post("https://qwikchop.herokuapp.com/api/meals",n.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.state={title:"",description:"",price:""},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"addmeal-main"},l.a.createElement("div",{className:"card-addmeal"},l.a.createElement("h1",null,"ADD MEAL "),l.a.createElement("form",{onSubmit:this.submitHandler},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Starter/Break/Lunch/Desert",name:"title",value:this.state.title,onChange:this.changeHandler})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Description",name:"description",value:this.state.description,onChange:this.changeHandler})),l.a.createElement("div",null,l.a.createElement("input",{type:"number",min:"1",placeholder:"Price (GH\u20b5)",name:"price",value:this.state.price,onChange:this.changeHandler})),l.a.createElement("input",{type:"submit",value:"ADD TO MENU"}))))}}]),a}(n.Component)),N=(a(63),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"login-admin-main"},l.a.createElement("form",{action:"javascript: void(0);",id:"login-form",className:"login-form",autoComplete:"off",role:"main"},l.a.createElement("h1",null,"ADMINISTRATOR"),l.a.createElement("h1",{className:"a11y-hidden"},"Admin"),l.a.createElement("div",null,l.a.createElement("label",{className:"label-email"},l.a.createElement("input",{type:"text",className:"text",name:"text",placeholder:"Username",required:!0}),l.a.createElement("span",{className:"required"},"Username"))),l.a.createElement("input",{type:"checkbox",name:"show-password",className:"show-password a11y-hidden",id:"show-password"}),l.a.createElement("label",{className:"label-show-password",for:"show-password"},l.a.createElement("span",null,"Show Password")),l.a.createElement("div",null,l.a.createElement("label",{className:"label-password"},l.a.createElement("input",{type:"text",className:"text",name:"password",placeholder:"Password",required:!0}),l.a.createElement("span",{className:"required"},"Password"))),l.a.createElement("input",{type:"submit",value:"Log In",onClick:function(){h.login((function(){e.props.history.push("/admin-dashboard")}))}}),l.a.createElement("div",{className:"email"},l.a.createElement("a",{href:"#"},"Forgot password?")),l.a.createElement("figure",{"aria-hidden":"true"},l.a.createElement("div",{className:"person-body"}),l.a.createElement("div",{className:"neck skin"}),l.a.createElement("div",{className:"head skin"},l.a.createElement("div",{className:"eyes"}),l.a.createElement("div",{className:"mouth"})),l.a.createElement("div",{className:"hair"}),l.a.createElement("div",{className:"ears"}),l.a.createElement("div",{className:"shirt-1"}),l.a.createElement("div",{className:"shirt-2"}))))}}]),a}(n.Component));var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{exact:!0,path:"/login-admin",component:N}),l.a.createElement(m.a,{exact:!0,path:"/admin-dashboard",component:E}),l.a.createElement(m.a,{exact:!0,path:"/orders",component:E}),l.a.createElement(m.a,{exact:!0,path:"/menu-update",component:w})))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e4d59ccc.chunk.js.map