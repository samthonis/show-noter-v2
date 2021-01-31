(this["webpackJsonpshow-noter-v2"]=this["webpackJsonpshow-noter-v2"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),a=n.n(s),c=n(8),r=n.n(c),o=n(3),h=n(4),l=n(2),u=n(6),j=n(5),d=1,b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={timestamp:"",url:"",linktext:"",id:""},i.handleTimestampChange=i.handleTimestampChange.bind(Object(l.a)(i)),i.handleLinkTextChange=i.handleLinkTextChange.bind(Object(l.a)(i)),i.handleURLChange=i.handleURLChange.bind(Object(l.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"handleTimestampChange",value:function(t){this.setState({timestamp:t.target.value})}},{key:"handleURLChange",value:function(t){this.setState({url:t.target.value})}},{key:"handleLinkTextChange",value:function(t){this.setState({linktext:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState({id:"".concat(d)}),this.props.submit({timestamp:this.state.timestamp,url:this.state.url,linktext:this.state.linktext,id:this.state.id}),this.setState({timestamp:"",url:"",linktext:""}),d++}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{id:"entryFields",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{children:"Timestamp :"}),Object(i.jsx)("input",{value:this.state.timestamp,onChange:this.handleTimestampChange,type:"text",name:"timestamp",required:!0})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{children:"URL :"}),Object(i.jsx)("input",{value:this.state.url,onChange:this.handleURLChange,type:"text",name:"url"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{children:"Link text :"}),Object(i.jsx)("input",{value:this.state.linktext,onChange:this.handleLinkTextChange,type:"text",name:"linktext"})]})]}),Object(i.jsx)("button",{onClick:this.handleSubmit,children:"Add Note"})]})})}}]),n}(s.Component),m=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).removeNote=i.removeNote.bind(Object(l.a)(i)),i.handleClick=i.handleClick.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"removeNote",value:function(t){this.props.onRemove(t)}},{key:"handleClick",value:function(t){this.removeNote(t.target.value),console.log("target value: "+t.target.value)}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"HTML Lines"}),Object(i.jsx)("ol",{children:this.props.showNotes.map((function(e,n){return Object(i.jsxs)("li",{children:['<li><a class="jump-point button underline" href="#'.concat(e.timestamp,'">').concat(e.timestamp,'</a> - <a href="').concat(e.url,'">').concat(e.linktext,"</a></li>"),Object(i.jsx)("button",{value:e.id,onClick:t.handleClick,children:"x"})]},n)}))})]})}}]),n}(s.Component),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"HTML Output"}),this.props.showNotes.map((function(t,e){return Object(i.jsx)("span",{children:'<li><a class="jump-point button underline" href="#'.concat(t.timestamp,'">').concat(t.timestamp,'</a> - <a href="').concat(t.url,'">').concat(t.linktext,"</a></li>")},e)}))]})}}]),n}(s.Component),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Formatted Preview"}),Object(i.jsx)("ul",{children:this.props.showNotes.map((function(t,e){return Object(i.jsxs)("li",{children:[t.timestamp," \u2013 ",Object(i.jsx)("a",{href:t.url,target:"blank",children:t.linktext})]},e)}))})]})}}]),n}(s.Component),v=(n(14),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={showNotes:[]},i.submit=i.submit.bind(Object(l.a)(i)),i.removeNote=i.removeNote.bind(Object(l.a)(i)),i}return Object(h.a)(n,[{key:"submit",value:function(t){this.setState({showNotes:[{timestamp:""}]});var e=t.timestamp;4===e.length?e="0"+e:3===e.length&&(e="00"+e),t.timestamp=e,this.setState({showNotes:this.state.showNotes.concat(t)})}},{key:"removeNote",value:function(t){console.log("you tried to remove current id: "+t);var e=this.state.showNotes;console.log(e),e=e.filter((function(e){return e.id!==t})),console.log(e),this.setState({showNotes:e})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{children:Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{children:"SHOW"}),"NOTER *beta"]})}),Object(i.jsx)("div",{id:"inputSection",children:Object(i.jsx)(b,{submit:this.submit})}),Object(i.jsx)("div",{id:"htmlOutputLines",children:Object(i.jsx)(m,{onRemove:this.removeNote,showNotes:this.state.showNotes})}),Object(i.jsx)("div",{id:"htmlOutput",children:Object(i.jsx)(O,{showNotes:this.state.showNotes})}),Object(i.jsx)("div",{id:"formattedOutput",children:Object(i.jsx)(p,{showNotes:this.state.showNotes})}),Object(i.jsx)("footer",{children:"made by sam"})]})}}]),n}(a.a.Component));r.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bda22e91.chunk.js.map