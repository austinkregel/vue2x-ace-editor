(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["split"],{"31d0":function(t,e,n){"use strict";var o=n("91fa"),i=n.n(o);i.a},"91fa":function(t,e,n){},dd6b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"split"},[n("vue-split-editor",{ref:"editor",attrs:{lang:"python",theme:"eclipse",height:"330px",splits:2,orientation:"below",options:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,tabSize:2},content:t.content},on:{init:t.editorInit,onChange:t.editorChange}})],1)},i=[],a=(n("28a5"),n("ac6a"),n("cadf"),n("551c"),n("097d"),{name:"split-editor",data:function(){return{content:["hello","world"],retContent:[]}},methods:{editorInit:function(){},editorChange:function(t){this.$refs.editor.setCompleteData([{name:"test",value:"test",caption:"test",meta:"test",type:"local",score:1e3}]),console.log(t),this.retContent=t.value}},watch:{retContent:function(t,e){var n=this;t.forEach(function(t,o){t!==e[o]&&console.log(n.$refs.editor.split.getEditor(o))})}}}),s=a,l=(n("31d0"),n("2877")),r=Object(l["a"])(s,o,i,!1,null,"3e4eb0d4",null);r.options.__file="SplitEditor.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=split.af27724e.js.map