(this["webpackJsonpyash-totale"]=this["webpackJsonpyash-totale"]||[]).push([[13],{234:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(31),i=a(0),o=a.n(i),c=a(66),s=a(69),l=a(62),u=function(e){return o.a.createElement("a",Object.assign({},e,{target:"_blank",rel:"noopener noreferrer"}),e.children)},m=a(208),d=Object(m.a)((function(e){return{img:function(t){var a,n=t.xl,i=t.lg,o=t.md,c=t.sm,s=t.xs,l=t.ratio;return a={},Object(r.a)(a,e.breakpoints.down("xl"),{width:n,height:Math.round(n*l)}),Object(r.a)(a,e.breakpoints.down("lg"),{width:i,height:Math.round(i*l)}),Object(r.a)(a,e.breakpoints.down("md"),{width:o,height:Math.round(o*l)}),Object(r.a)(a,e.breakpoints.down("sm"),{width:c,height:Math.round(c*l)}),Object(r.a)(a,e.breakpoints.down("xs"),{width:s,height:Math.round(s*l)}),Object(r.a)(a,"&:focus",{outline:"none"}),a}}})),p=function(e){var t=e.ratio,a=void 0===t?1:t,n=e.alt,r=e.src,i=e.xs,c=void 0===i?140:i,s=e.sm,l=void 0===s?160:s,u=e.md,m=void 0===u?180:u,p=e.lg,b=void 0===p?200:p,h=e.xl,g=d({xs:c,sm:l,md:m,lg:b,xl:void 0===h?220:h,ratio:a});return o.a.createElement("img",{className:g.img,src:r,alt:n})},b=a(51),h=a(80),g=Object(m.a)((function(e){return{imgDiv:{margin:"20px 10px",overflow:"hidden",justifySelf:"flex-start"},a:{"&:focus":{outline:"none"}}}})),f=function(){var e=g();return o.a.createElement("div",{className:e.imgDiv},o.a.createElement(u,{className:e.a,tabIndex:-1,href:b.g},o.a.createElement(p,{ratio:h.c,src:b.g,alt:"Profile Picture"})))},v=a(265),x=a(20),w=a(266),j=a(278),y=Object(m.a)((function(e){return{root:{display:"flex",padding:"20px",margin:"20px 0px",position:"relative",backgroundImage:"url(".concat(b.a,")"),backgroundOrigin:"border-box",backgroundPositionY:"20%",backgroundSize:"cover"},overlay:function(e){return{backgroundColor:"#1d1c1c",position:"absolute",top:0,bottom:0,left:0,right:0,transition:"opacity 0.4s",opacity:e.hovering?.5:.8}},content:{zIndex:1,width:"100%",display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center"},info:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"70%"},text:{textAlign:"center",width:"100%",margin:"10px 0px",textOverflow:"ellipsis",color:"wheat"},heading:Object(r.a)({},e.breakpoints.down("sm"),{fontSize:"1.8rem"}),p:Object(r.a)({},e.breakpoints.down("sm"),{fontSize:"1rem"})}})),O=Object(m.a)((function(e){return{clickable:function(e){var t=e.hovering,a=e.type;return{border:"btn"===a?"2px solid wheat":"none",borderRadius:"btn"===a?"4px":"initial",cursor:"pointer",padding:"2px",textDecoration:"btn"===a?"none":"underline",transition:"background-color 0.2s",color:"inherit",backgroundColor:t?"rgb(245,222,179, 0.4)":"rgb(245,222,179, 0.2)"}}}})),k=function(e){var t=e.children,a=e.type,n=e.to,r=e.onClick,c=e.noSpaceAfter,u=Object(i.useState)(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],b=O({type:a,hovering:d}),h="link"===a?o.a.createElement(l.b,{to:n||"#/"},t):o.a.createElement("span",null,t);return o.a.createElement(o.a.Fragment,null,"\xa0",o.a.cloneElement(h,{className:b.clickable,onMouseOver:function(){return p(!0)},onMouseLeave:function(){return p(!1)},onClick:r,tabIndex:0}),c?null:"\xa0")},E=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(x.b)(),c=y({hovering:a});return o.a.createElement(w.a,{onMouseOver:function(){return n(!0)},onMouseLeave:function(){return n(!1)},className:c.root},o.a.createElement("div",{className:c.overlay}),o.a.createElement("div",{className:c.content},o.a.createElement(f,null),o.a.createElement("div",{className:c.info},o.a.createElement(j.a,{className:"".concat(c.text," ").concat(c.heading),variant:"h4"},"Hi, I'm Yash"),o.a.createElement(j.a,{className:"".concat(c.text," ").concat(c.p),variant:"h6"},"I am a high school Junior in the Bay Area with an interest in Computer Science. Most of my Web Development and Programming experience comes from creating personal projects and leading high school clubs."),o.a.createElement(j.a,{className:"".concat(c.text," ").concat(c.p),variant:"h6"},"Other than coding, I like reading, running, and learning about other topics, especially finance."),o.a.createElement(j.a,{className:"".concat(c.text," ").concat(c.p),variant:"h6"},"You can check out my",o.a.createElement(k,{noSpaceAfter:!0,type:"link",to:"/projects"},"personal projects"),",",o.a.createElement(k,{noSpaceAfter:!0,type:"link",to:"/experience"},"work experience"),", and some cool features like changing this website's",o.a.createElement(k,{type:"btn",onClick:function(){return r(Object(v.d)())}},"theme"),"and",o.a.createElement(k,{noSpaceAfter:!0,type:"link",to:"/colors"},"colors"),"."))))},S=a(282),C=a.n(S),N=a(283),T=a(296),I=a(192),A=a(48),M=a(68),R=a(323),J=a(293),P=a(250),D=a(326),H=a(324),L=a(325),G=a(352),z=Object(m.a)((function(e){var t=e.palette;return{formContainer:{minHeight:459,display:"flex",flexDirection:"column",justifyContent:"stretch",alignItems:"stretch"},loading:{display:"flex",justifyContent:"center",alignItems:"center",flexGrow:1},contact:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},rate:{marginTop:10,marginBottom:3},rating:{marginBottom:10},submit:function(e){return{margin:"10px 0px",cursor:e.errors?"not-allowed":"pointer"}},submitDisabled:{cursor:"not-allowed"},submitPaper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10},submitTitle:{textAlign:"center"},submitIcon:function(e){return{margin:"20px 0px",width:100,height:100,color:e.success?t.success.main:t.error.main}},submitExplanation:{marginBottom:10,textAlign:"center"},submitInfo:{margin:"10px 0px"},submitAnother:{marginTop:10}}})),B=Object(m.a)((function(e){return{input:{margin:"10px 0px"}}})),F=function(e){var t,a=e.name,r=e.errors,i=e.register,c=e.props,s=e.rules,l=e.inputProps,u=e.textarea,m=e.notRequired,d=B();return o.a.createElement(D.a,Object.assign({error:Boolean(r[a]),helperText:null===(t=r[a])||void 0===t?void 0:t.message,className:d.input,variant:"outlined",label:"".concat(Object(P.a)(a)).concat(m?"":"*"),fullWidth:!0,name:a},u?{multiline:!0,rows:2,rowsMax:20}:null,{inputRef:i(Object(n.a)({required:!m&&"This field is required"},s)),InputProps:Object(n.a)({},l)},c))},Y=function(){var e=Object(x.b)(),t=Object(x.c)(A.a),a=t.name,n=t.email,r=t.message,i=t.bugs,c=t.rating,s=t.loading,l=t.success,u=Object(I.b)().executeRecaptcha,m=Object(T.b)({mode:"onTouched",defaultValues:{name:a,email:n,message:r,bugs:i,rating:c}}),d=m.register,p=m.handleSubmit,b=m.errors,g=m.control,f=m.reset,v=Boolean(Object.keys(b).length),y=z({errors:v,success:l}),O=function(){var t=Object(N.a)(C.a.mark((function t(a,n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(M.d)(a)),e(Object(M.e)(!0)),t.prev=2,t.next=5,null===u||void 0===u?void 0:u("contact_form");case 5:if(t.sent){t.next=10;break}throw new Error("ReCaptcha was unable to authorize this response.");case 10:return t.next=12,fetch("https://hooks.zapier.com/hooks/catch/8641341/og4nv0l/",{method:"post",body:JSON.stringify(a)});case 12:return r=t.sent,t.next=15,r.json();case 15:"success"===t.sent.status&&e(Object(M.f)(!0));case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),e(Object(M.f)(!1));case 22:return t.prev=22,e(Object(M.e)(!1)),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[2,19,22,25]])})));return function(e,a){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:y.formContainer},s?o.a.createElement("div",{className:y.loading},o.a.createElement(R.a,null)):null===l?o.a.createElement("form",{className:y.contact,onSubmit:p(O)},o.a.createElement(F,{errors:b,name:"name",register:d}),o.a.createElement(F,{errors:b,name:"message",register:d,textarea:!0}),o.a.createElement(F,{errors:b,name:"email",register:d,rules:{pattern:{value:h.a,message:"Please enter a valid email address"}}}),o.a.createElement(F,{errors:b,name:"bugs",register:d,props:{label:"Any Bugs?"},textarea:!0,notRequired:!0}),o.a.createElement(j.a,{className:y.rate,variant:"body1"},"Rate the site?"),o.a.createElement(T.a,{name:"rating",control:g,render:function(e){var t=e.onChange,a=e.onBlur,n=e.value;return o.a.createElement(G.a,{name:"rating",value:parseInt(n),onChange:t,onBlur:a})},className:y.rating}),o.a.createElement(J.a,{className:y.submit,color:"primary",variant:"outlined",type:v?void 0:"submit"},"Submit")):o.a.createElement(w.a,{className:y.submitPaper},o.a.createElement(j.a,{className:y.submitTitle,variant:"h4"},l?"Form submission successful":"Form submission failed"),l?o.a.createElement(H.a,{className:y.submitIcon}):o.a.createElement(L.a,{className:y.submitIcon}),o.a.createElement(j.a,{variant:"body1",className:y.submitExplanation},l?"Thanks for your response! I'll try to get back to you within a few days. ":"An error occurred while submitting your response. Please try again. ","Here is what was submitted:"),["name","message","email","bugs","rating"].map((function(e,a){return t[e]&&o.a.createElement(j.a,{key:a,className:y.submitInfo,variant:"body1"},o.a.createElement("strong",null,Object(P.a)(e),": "),t[e])})),o.a.createElement(J.a,{color:"primary",variant:"contained",onClick:function(){f(t),e(Object(M.f)(null))},className:y.submitAnother},l?"Submit another response":"Try again")))},V=a(274),W=a(275),q=a(226),Q=Object(m.a)((function(e){return{home:Object(r.a)({margin:"0px 20px"},e.breakpoints.up("lg"),{width:"80%"}),projects:function(t){var a,n=t.xl,i=t.lg,o=t.md,c=t.sm,s=t.xs;return a={margin:"15px 0px",display:"grid",gap:"30px"},Object(r.a)(a,e.breakpoints.down("xl"),{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(n,"px, 1fr))")}),Object(r.a)(a,e.breakpoints.down("lg"),{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(i,"px, 1fr))")}),Object(r.a)(a,e.breakpoints.down("md"),{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(o,"px, 1fr))")}),Object(r.a)(a,e.breakpoints.down("sm"),{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(c,"px, 1fr))")}),Object(r.a)(a,e.breakpoints.down("xs"),{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(s,"px, 1fr))")}),a}}}));t.default=function(){var e=Object(q.a)((function(e){return e.breakpoints.only("xl")})),t=Object(n.a)(Object(n.a)({},V.a),{},{sm:170}),a=Q(Object(n.a)({},t));return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement("title",null,"Home - Yash Totale")),o.a.createElement("div",{className:a.home},o.a.createElement(E,null),o.a.createElement("div",null,o.a.createElement(j.a,{variant:"h4"},"Projects"),o.a.createElement("hr",null),o.a.createElement("div",{className:a.projects},W.slice(0,e?8:6).map((function(e,a){return o.a.createElement(V.b,Object.assign({},e,{url:"/projects/".concat(e.url),key:a},t))}))),o.a.createElement(j.a,{variant:"h4"},"Contact"),o.a.createElement("hr",null),o.a.createElement(Y,null))))}},265:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return s}));var n=a(50),r=a(68),i=a(48),o=a(250),c=function(){return function(e,t){e(Object(r.h)());var a=Object(i.b)(t())?"Dark":"Light";e(Object(r.g)("".concat(a," Theme set"),"success",null))}},s=function(e,t){return function(a,c){var s="primary"===e?Object(i.f)(c()):Object(i.h)(c());a(Object(r.a)(e,t)),a(Object(r.g)("".concat(Object(o.a)(e)," Color is now ").concat(Object(n.i)(t)),"success",Object(n.d)(t,s)))}},l=function(e,t){return function(a,c){a(Object(r.b)(e,t));var s="primary"===e?Object(i.e)(c()):Object(i.g)(c());a(Object(r.g)("".concat(Object(o.a)(e)," Shade is now ").concat(t),"success",Object(n.d)(s,t)))}},u=function(){return function(e,t){n.g.forEach((function(t){e(Object(r.a)(t,n.b[t])),e(Object(r.b)(t,n.c[t])),e(Object(r.g)(n.f,"success",null))}))}}},274:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(69),r=a(31),i=a(0),o=a.n(i),c=a(208),s=a(210),l=a(226),u=a(278),m=a(62),d=Object(c.a)((function(e){return{mini:{display:"flex",flexDirection:"column",alignItems:"center",justifySelf:"center"},link:function(t){var a,n=t.xl,i=t.lg,o=t.md,c=t.sm,s=t.xs;return a={position:"relative"},Object(r.a)(a,e.breakpoints.down("xl"),{width:n,height:n}),Object(r.a)(a,e.breakpoints.down("lg"),{width:i,height:i}),Object(r.a)(a,e.breakpoints.down("md"),{width:o,height:o}),Object(r.a)(a,e.breakpoints.down("sm"),{width:c,height:c}),Object(r.a)(a,e.breakpoints.down("xs"),{width:s,height:s}),a},overlay:function(e){var t=e.hovering;return{position:"absolute",borderRadius:5,top:0,right:0,left:0,bottom:0,backgroundColor:"#1d1c1c",visibility:t?"visible":"hidden",opacity:t?.7:0,transition:"visibility 0.4s, opacity 0.4s"}},name:function(t){var a=t.hovering;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:e.palette.common.white,fontWeight:900,width:"calc(100% - 20px)",maxHeight:"calc(100% - 20px)",textOverflow:"ellipsis",overflowX:"hidden",overflowY:"scroll",visibility:a?"visible":"hidden",opacity:a?1:0,transition:"visibility 0.4s, opacity 0.4s"}},img:{padding:5,border:"4px solid ".concat(e.palette.common["dark"===e.palette.type?"white":"black"]),borderRadius:"5px",width:"inherit",height:"inherit"},caption:function(t){var a,n=t.xl,i=t.lg,o=t.md,c=t.sm,s=t.xs;return a={textAlign:"center",marginTop:5,overflow:"hidden",textOverflow:"ellipsis"},Object(r.a)(a,e.breakpoints.down("xl"),{width:n}),Object(r.a)(a,e.breakpoints.down("lg"),{width:i}),Object(r.a)(a,e.breakpoints.down("md"),{width:o}),Object(r.a)(a,e.breakpoints.down("sm"),{width:c}),Object(r.a)(a,e.breakpoints.down("xs"),{width:s}),a}}})),p={xl:250,lg:200,md:180,sm:160,xs:150};t.b=function(e){var t=e.name,a=e.icons,r=e.url,c=e.xl,p=void 0===c?250:c,b=e.lg,h=void 0===b?200:b,g=e.md,f=void 0===g?180:g,v=e.sm,x=void 0===v?160:v,w=e.xs,j=void 0===w?150:w,y=Object(i.useState)(!1),O=Object(n.a)(y,2),k=O[0],E=O[1],S=Object(s.a)(),C=Object(l.a)(S.breakpoints.down("sm")),N=d({hovering:k,xl:p,lg:h,md:f,sm:x,xs:j});return o.a.createElement("div",{onMouseOver:function(){return E(!0)},onMouseLeave:function(){return E(!1)},className:N.mini},o.a.createElement(m.b,{className:N.link,to:r},o.a.createElement("div",{className:N.overlay}),o.a.createElement(u.a,{className:N.name,variant:"h4"},t),o.a.createElement("img",{className:N.img,src:"light"===S.palette.type?a[0]:a[1],alt:t})),C&&o.a.createElement(u.a,{className:N.caption,variant:"h5"},t))}},275:function(e){e.exports=JSON.parse('[{"id":"1","name":"Terminal All In One","description":["A **Visual Studio Code extension** that builds on top of the default integrated terminal with themes, scripts, commands, and keybindings","Created using TypeScript and the VS Code API","CI/CD Pipeline with Travis CI"],"tags":["TypeScript","VS Code API","JavaScript","Travis CI","Webpack","Git","Mocha","Markdown"],"start":"July 2020","icons":["https://i.ibb.co/1fwNgSy/terminal-icon.png","https://i.ibb.co/1fwNgSy/terminal-icon.png"],"link":"http://marketplace.visualstudio.com/items?itemName=yasht.terminal-all-in-one","sourcecode":"https://github.com/YashTotale/terminal-all-in-one","url":"terminal-all-in-one"},{"id":"2","name":"Time Type","description":["A **website** that allows users to test their typing speeds, perform typing challenges, and compare with others around the world","Created using React, Redux, and Material UI","Mock backend built with JSON Server and currently transitioning to Firebase"],"tags":["React","Redux","JavaScript","Material UI","Firebase","Jest","JSON Server","Git","Webpack","HTML","Sketch"],"start":"July 2020","icons":["https://i.ibb.co/RgJkHsH/Time-Type.png","https://i.ibb.co/RgJkHsH/Time-Type.png"],"sourcecode":"https://github.com/YashTotale/time-type","url":"time-type"},{"id":"3","name":"List It","description":["A **webapp** that allows users to tag, theme, and archive lists while performing CRUD operations on lists and list items","React was used for the frontend and Django REST Framework for the backend","Used SCSS for styling at first and then transitioned to Inline Styling in React","Dark Theme supported"],"tags":["React","Django","JavaScript","Python","SCSS","Git","Webpack","HTML","CSS"],"start":"March 2020","end":"June 2020","icons":["https://i.ibb.co/qCQhMMY/image.png","https://i.ibb.co/m6QmN9f/image.png"],"sourcecode":"https://github.com/rupaltotale/list-it","url":"list-it"},{"id":"4","name":"Dump","description":["A **Chrome Extension** which allows users to quickly dump text and retrieve it later","Features such as copy, rearrange, delete, and create dumps"],"tags":["JavaScript","Git","HTML","CSS"],"start":"August 2020","end":"August 2020","icons":["https://i.ibb.co/98QLCj6/icon128.png","https://i.ibb.co/98QLCj6/icon128.png"],"sourcecode":"https://github.com/YashTotale/dump","url":"dump"},{"id":"5","name":"History Game Creator","description":["A **website** that allows history teachers to create customizable and animated games for students","Teachers can create, edit, and preview games with an interface developed using React JS","Games are visualized using the Canvas API","Go is used for the backend"],"tags":["React","Redux","JavaScript","Go","Node JS","Canvas API","Express JS","Git","Webpack","HTML","CSS"],"start":"March 2020","sourcecode":"https://github.com/subatuba21/history-game-creator","icons":["https://i.ibb.co/rcz3kRx/Default-Project.png","https://i.ibb.co/rcz3kRx/Default-Project.png"],"url":"history-game-creator"},{"id":"6","name":"AV Clubs","description":["A **website** with information on every Amador Valley High School club along with school announcements","Information can be edited on a Google Sheet and the changes are automatically reflected on the website through the Google Sheets API"],"tags":["JavaScript","HTML","CSS","Node JS","Express JS","Google Sheets API","Git"],"start":"August 2020","icons":["https://i.ibb.co/nLVM4cz/Amador-Logo.png","https://i.ibb.co/nLVM4cz/Amador-Logo.png"],"link":"https://clubs.amadorweb.org/","sourcecode":"https://github.com/avwebdev/av-clubs","url":"av-clubs"}]')}}]);
//# sourceMappingURL=13.9b071420.chunk.js.map