(this["webpackJsonpts-social-network"]=this["webpackJsonpts-social-network"]||[]).push([[3],{289:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__BFrC2",dialogsItems:"Dialogs_dialogsItems__3xNO4",active:"Dialogs_active__LOKy_",messages:"Dialogs_messages__1Krod",message:"Dialogs_message__ga7pV"}},291:function(e,s,a){"use strict";a.r(s);var t=a(8),i=a(124),n=a(0),c=(a(1),a(289)),o=a.n(c),d=a(14);var r=function(e){return Object(n.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(n.jsx)(d.b,{to:"/dialogs/"+e.id,children:e.name})})};var j=function(e){return Object(n.jsx)("div",{className:o.a.message,children:e.message})},l=a(125),g=a(126),u=a(40),b=a(39);var m=Object(b.a)(100),O=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{component:u.b,name:"newMessageBody",placeholder:"Enter your message",validate:[b.b,m]})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Send"})})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(r,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(n.jsx)(j,{message:e.message,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:o.a.dialogs,children:[Object(n.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(n.jsxs)("div",{className:o.a.messages,children:[Object(n.jsx)("div",{children:t}),Object(n.jsx)("div",{children:Object(n.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})]})},x=a(12),v=a(3),f=a(68),_=a(11),p=function(e){return{isAuth:e.auth.isAuth}};s.default=Object(t.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){return Object(x.b)(p)((function(s){var a=s.isAuth,t=Object(f.a)(s,["isAuth"]);return a?Object(n.jsx)(e,Object(v.a)({},t)):Object(n.jsx)(_.a,{to:"/login"})}))}))(h)}}]);
//# sourceMappingURL=3.a59b99b6.chunk.js.map