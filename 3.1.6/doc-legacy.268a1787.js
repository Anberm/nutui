System.register(["./vendor-legacy.44d419bd.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Badge 徽标</h1><h3>介绍</h3><p>出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。</p><h3>安装</h3><pre><code class="language-javascript">\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Badge } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Badge);\n\n</code></pre><h3>代码实例</h3><h3>基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;76&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;NEW&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">dot</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>最大值</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;76&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;NEW&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">dot</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>自定义徽标内容</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icons</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Check&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icons</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;link&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icons</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;download&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffffff&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>自定义位置</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">top</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;76&quot;</span> <span class="hljs-attr">top</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;NEW&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-avatar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>独立展示</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;76&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;NEW&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-badge</span>&gt;</span>\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>显示的内容</td><td>String</td><td>-</td></tr><tr><td>max</td><td>value 为数值时，最大值</td><td>Number</td><td><code>10000</code></td></tr><tr><td>z-index</td><td>徽标的 z-index 值</td><td>Number</td><td><code>10</code></td></tr><tr><td>dot</td><td>是否为小点</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>hidden</td><td>是否隐藏</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>top</td><td>上下偏移量，支持单位设置，可设置为：5px 等</td><td>Number</td><td><code>0</code></td></tr><tr><td>right</td><td>左右偏移量，支持单位设置，可设置为：5px 等</td><td>Number</td><td><code>0</code></td></tr><tr><td>color</td><td>徽标背景颜色</td><td>String</td><td><code>#fa2c19</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>徽标包裹的子元素</td></tr><tr><td>icons</td><td>徽标自定义</td></tr></tbody></table>',22)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));