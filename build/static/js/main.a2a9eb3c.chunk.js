(this.webpackJsonpreduxsamp=this.webpackJsonpreduxsamp||[]).push([[0],{129:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s);a(93),a(72),a(94);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(25),c=a(19),i=a(74),u=a(50),m={username:"",isLogin:!1};var d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,p=Object(c.e)(Object(c.c)({sampReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if("CREATE"!=t.type){if("LOGIN"==t.type){var a={};return"password"==t.payload.credentials.password.toLowerCase()&&(a=Object(u.a)(Object(u.a)({},e),{},{username:t.payload.credentials.username,isLogin:!0})),a}return e}}}),{},d(Object(c.a)(i.a))),g=a(80),h=a(22),E=a(35),f=a(36),b=a(41),v=a(40),O=a(32),w=a.n(O),y=a(51),C=a(75),j=a.n(C),L=a(166),k=a(167),x=a(160),S=a(161),R=a(162),_=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).loginSubmit=function(e){e.preventDefault(),n.props.loginAction(n.state.username)},n.messageOnChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(h.a)({},t,a))},n.state={username:"",password:""},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,null,r.a.createElement(S.a,null,r.a.createElement(R.a,null,r.a.createElement(L.a,{id:"txt",name:"username",value:this.state.username,onChange:this.messageOnChange,label:"user name"})),r.a.createElement(R.a,null,r.a.createElement(L.a,{type:"password",id:"pwd",name:"password",autoComplete:"current-password",value:this.state.password,onChange:this.messageOnChange,label:"password"})),r.a.createElement(R.a,null,r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:function(){return e.props.loginAction({username:e.state.username,password:e.state.password})}},"Login"))))}}]),a}(n.Component),B=Object(l.b)((function(e){return{username:e.username}}),(function(e){return{loginAction:function(t){return e(function(e){return function(){var t=Object(y.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("credentials:-",e),a({type:"LOGIN",payload:{credentials:e}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(_),D=a(52),M=(a(132),j.a.connect("https://chat-room-api.herokuapp.com/")),A=Object(D.b)(),F=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).messageSubmitted=function(e){e.preventDefault();var t=n.state.message,a=n.props.username;M.emit("message",{username:a,message:t}),n.setState({message:""}),console.log("clicked")},n.messageOnChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(h.a)({},t,a))},n.renderChat=function(){return n.props.isLogin?n.state.chatList.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{style:{backgroundColor:n.props.username==e.username?"#99c6a3":"#c1cef1",borderRadius:"5px",fontFamily:"Finger Paint"}},r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("i",{style:{paddingLeft:"5px"}},e.username)),": ",r.a.createElement("span",null,e.message)),r.a.createElement("div",{style:{paddingBottom:"2px"}}))})):null},n.getChat=function(){M.on("message",(function(e){var t=e.username,a=e.message;n.setState({chatList:[{username:t,message:a}].concat(Object(g.a)(n.state.chatList))}),console.log(n.state.chatList)}))},n.renderButton=function(){return n.props.isLogin?r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:n.messageSubmitted},"Send"):r.a.createElement(k.a,{variant:"contained",disabled:!0},"Send")},n.state={message:"",username:"",chatList:[]},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.getChat()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(S.a,null,r.a.createElement(R.a,{md:4},r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement("h3",{style:{fontFamily:"Finger Paint"}},"Chat Room",r.a.createElement("span",{style:{color:"#1cc822"}},"."),r.a.createElement("span",{style:{color:"orange"}},"."),r.a.createElement("span",{style:{color:"red"}},"."))),r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement(B,null)),r.a.createElement("br",null),r.a.createElement(S.a,null,r.a.createElement(R.a,null,r.a.createElement(L.a,{type:"text",multiline:!0,rowsMax:10,id:"txt",name:"message",value:this.state.message,onChange:this.messageOnChange,label:"Message",fullWidth:!0,variant:"outlined",style:{width:"226px"}})),r.a.createElement(R.a,null,this.renderButton()))),r.a.createElement(R.a,{md:4},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,Object.assign({},A,{style:{maxHeight:"600px",overflow:"auto"}}),r.a.createElement("div",{style:{wordWrap:"break-word"}},this.renderChat()))))))}}]),a}(n.Component),I=Object(l.b)((function(e){return{username:e.sampReducer.username,isLogin:e.sampReducer.isLogin}}))(F);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:p},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},88:function(e,t,a){e.exports=a(133)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.a2a9eb3c.chunk.js.map