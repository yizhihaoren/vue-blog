webpackJsonp([3],{"+w2v":function(t,e){},R6sS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ZYmg"),a={data:function(){return{blogId:null,title:"",description:"",content:"",atIndex:!1}},created:function(){var t=this;this.blogId=this.$route.params.blogId,n.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content,t.atIndex=e.data.atIndex})},methods:{onEdit:function(){var t=this;n.a.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"`/detail/${res.data.id}`"})})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit"}},[i("h1",[t._v("编辑文章")]),t._v(" "),i("h3",[t._v("文章标题")]),t._v(" "),i("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),i("p",{staticClass:"msg"}),t._v(" "),i("h3",[t._v("内容简介")]),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),i("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),i("h3",[t._v("文章内容")]),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),i("p",{staticClass:"msg"},[t._v("限300个字")]),t._v(" "),i("p",[i("label",[t._v("是否展示到首页")]),t._v(" "),i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ccc"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),i("el-button",{on:{click:t.onEdit}},[t._v("确定")])],1)},staticRenderFns:[]};var o=i("VU/8")(a,s,!1,function(t){i("+w2v")},null,null);e.default=o.exports}});
//# sourceMappingURL=3.9eeff8cbd45deaec0fb7.js.map