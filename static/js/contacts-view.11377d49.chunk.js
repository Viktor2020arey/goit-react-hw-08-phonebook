(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{158:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3}}},181:function(t,e,n){t.exports={list:"ContactList_list__2OS-k",item:"ContactList_item__l5GrF",btn:"ContactList_btn__1BxFS"}},188:function(t,e,n){t.exports={form:"ContactForm_form__3BFkQ",label:"ContactForm_label__39u4f",input:"ContactForm_input__23mgj",btn:"ContactForm_btn__1sbLz"}},189:function(t,e,n){t.exports={label:"Filter_label__1ehEd",input:"Filter_input__2N52X"}},190:function(t,e,n){t.exports={wrapper:"ContactsView_wrapper__2MyZU"}},213:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return D}));var a={};n.r(a),n.d(a,"fetchContacts",(function(){return l})),n.d(a,"addContact",(function(){return b})),n.d(a,"deleteContact",(function(){return j}));var r={};n.r(r),n.d(r,"getContacts",(function(){return f})),n.d(r,"getLoading",(function(){return h})),n.d(r,"getError",(function(){return m})),n.d(r,"getFilter",(function(){return p})),n.d(r,"getVisibleContacts",(function(){return O}));var c=n(0),o=n(12),i=n(28),s=n.n(i),u=n(10),l=function(){return function(t){t(Object(u.fetchContactsRequest)()),s.a.get("/contacts").then((function(e){var n=e.data;return t(Object(u.fetchContactsSuccess)(n))})).catch((function(e){t(Object(u.fetchContactsError)(e)),404===e.response.status?alert("There is no such user's collection!"):500===e.response.status?alert("Oops! Server error! Please try later!"):alert("Something went wrong! Please reload the page!")}))}},b=function(t,e){return function(n){var a={name:t,number:e};n(Object(u.addContactRequest)()),s.a.post("/contacts",a).then((function(t){var e=t.data;return n(Object(u.addContactSuccess)(e))})).catch((function(t){n(Object(u.addContactError)(t)),400===t.response.status?alert("Contact creation error!"):alert("Something went wrong! Please reload the page!")}))}},j=function(t){return function(e){e(Object(u.deleteContactRequest)()),s.a.delete("/contacts/".concat(t)).then((function(){return e(Object(u.deleteContactSuccess)(t))})).catch((function(t){e(Object(u.deleteContactError)(t)),404===t.response.status?alert("There is no such user's collection!"):500===t.response.status?alert("Oops! Server error! Please try later!"):alert("Something went wrong! Please reload the page!")}))}},d=n(41),f=function(t){return t.contacts.items},h=function(t){return t.contacts.isLoading},m=function(t){return t.contacts.error},p=function(t){return t.contacts.filter},O=Object(d.a)([f,p],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),x=n(210),C=n(182),g=n.n(C),v=n(211),_=n(215),w=n(158),N=n(181),k=n.n(N),y=n(3);var F=function(){var t=Object(o.b)(),e=Object(o.c)(r.getVisibleContacts),n=Object(o.c)(r.getContacts);return Object(y.jsxs)(y.Fragment,{children:[n.length>0&&Object(y.jsx)(v.a.ul,{className:k.a.list,children:Object(y.jsx)(_.a,{children:e.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(y.jsxs)(v.a.li,{className:k.a.item,initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:w.a,children:[Object(y.jsxs)("p",{className:k.a.text,children:[r,": ",c]}),Object(y.jsx)(x.a,{className:k.a.btn,"aria-label":"delete",color:"secondary",type:"button",onClick:function(){return t(a.deleteContact(n))},children:Object(y.jsx)(g.a,{})})]},n)}))})}),!n.length&&Object(y.jsx)(_.a,{children:Object(y.jsx)(v.a.p,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:w.a,children:"Your phonebook is empty. Please add contact."})})]})},S=n(50),L=n(187),E=n(143),P=n(51),q=n(188),R=n.n(q);var V=function(){var t=Object(o.b)(),e=Object(o.c)(r.getContacts),n=Object(o.c)(r.getLoading),i=Object(c.useState)(""),s=Object(S.a)(i,2),u=s[0],l=s[1],b=Object(c.useState)(""),j=Object(S.a)(b,2),d=j[0],f=j[1],h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":l(a);break;case"number":f(a);break;default:return}},m=function(){l(""),f("")};return Object(y.jsxs)("form",{className:R.a.form,onSubmit:function(n){return n.preventDefault(),function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(u)?alert("\ud83e\udd14 ".concat(u," is already in the phonebook.")):function(t){return e.find((function(e){return e.number===t}))}(d)?alert("\ud83e\udd14 ".concat(d," is already in the phonebook.")):function(t,e){return""===t.trim()||""===e.trim()}(u,d)?alert("\ud83d\ude31 Enter the contact's name and number phone!"):(t(a.addContact(u,d)),void m())},children:[Object(y.jsxs)("label",{className:R.a.label,children:["Name",Object(y.jsx)("input",{className:R.a.input,type:"text",name:"name",value:u,onChange:h,placeholder:"Enter name"})]}),Object(y.jsxs)("label",{className:R.a.label,children:["Number",Object(y.jsx)(L.a,{placeholder:"Enter phone number",format:"(###) ###-##-##",mask:"_",pattern:"^[0-9\\s\\(\\)\\-]{15}",type:"tel",name:"number",value:d,onChange:h,className:R.a.input})]}),!n&&Object(y.jsx)(E.a,{variant:"contained",color:"secondary",size:"large",type:"submit",className:R.a.btn,children:"Add contact"}),n&&Object(y.jsx)(P.a,{})]})},z=n(189),B=n.n(z);var J=function(){var t=Object(o.b)(),e=Object(o.c)(r.getFilter),n=Object(o.c)(r.getContacts);return Object(y.jsx)(y.Fragment,{children:n.length>0&&Object(y.jsx)(_.a,{children:Object(y.jsx)("label",{className:B.a.label,children:Object(y.jsx)(v.a.input,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:w.a,className:B.a.input,type:"text",value:e,onChange:function(e){return t(u.filterContact(e.target.value))}})})})})},T=n(190),A=n.n(T);function D(){var t=Object(o.b)();return Object(c.useEffect)((function(){return t(a.fetchContacts())}),[t]),Object(y.jsxs)("div",{className:A.a.wrapper,children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)(V,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(J,{}),Object(y.jsx)(F,{})]})}}}]);
//# sourceMappingURL=contacts-view.11377d49.chunk.js.map