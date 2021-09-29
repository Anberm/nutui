import{e as s,o as a,G as n}from"./vendor.9cc7b6f2.js";const t={class:"markdown-body"},l=[n('<h1>Swipe 滑动手势</h1><h3>介绍</h3><p>常用于单元格左滑删除等手势操作</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Swipe } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Swipe } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Swipe);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;左滑删除&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>\n</code></pre><h3>禁止滑动</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;禁止滑动&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>\n</code></pre><h3>左右滑动</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>选择<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;左滑右滑都可以哦&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>\n</code></pre><h3>异步控制</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;refSwipe&quot;</span> @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;异步打开关闭&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:link</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changSwitch&quot;</span> <span class="hljs-attr">active-text</span>=<span class="hljs-string">&quot;开&quot;</span> <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">&quot;关&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>\n</code></pre><pre><code class="language-typescript">    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n        <span class="hljs-keyword">const</span> refSwipe = ref&lt;HTMLElement&gt;();\n        <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">false</span>);\n        <span class="hljs-keyword">const</span> changSwitch = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> {\n            <span class="hljs-keyword">if</span> (value) {\n                refSwipe.value?.open(<span class="hljs-string">&#39;left&#39;</span>);\n            } <span class="hljs-keyword">else</span> {\n                refSwipe.value?.close();\n            }\n        };\n         <span class="hljs-keyword">const</span> open = <span class="hljs-function">(<span class="hljs-params">obj: <span class="hljs-built_in">any</span></span>) =&gt;</span> {\n            <span class="hljs-built_in">console</span>.log(obj);\n            checked.value = <span class="hljs-literal">true</span>;\n        };\n        <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {\n            checked.value = <span class="hljs-literal">false</span>;\n        };\n        <span class="hljs-keyword">return</span> { checked, changSwitch, refSwipe, open, close };\n    }\n</code></pre><h3>自定义</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>选择<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;商品描述&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:link</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-inputnumber</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>收藏<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>\n</code></pre><pre><code class="language-typescript">    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n        <span class="hljs-keyword">const</span> <span class="hljs-built_in">number</span> = ref(<span class="hljs-number">0</span>);\n        <span class="hljs-keyword">return</span> { <span class="hljs-built_in">number</span> };\n    }\n</code></pre><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用滑动</td><td>String</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>打开时触发</td><td>{type:‘left or right’}</td></tr><tr><td>close</td><td>关闭时触发</td><td>{type:‘left or right’}</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>左侧滑动内容</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>right</td><td>右侧滑动内容</td></tr></tbody></table><h3>方法</h3><p>通过 ref 可以获取到 Swipe 实例并调用实例方法。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>打开单元格侧边栏</td><td>left or right</td></tr><tr><td>close</td><td>收起单元格侧边栏</td><td></td></tr></tbody></table>',27)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};