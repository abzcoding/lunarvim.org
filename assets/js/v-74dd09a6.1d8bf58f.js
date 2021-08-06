(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[190],{9251:(a,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>e});const e={key:"v-74dd09a6",path:"/languages/",title:"Overview",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"LSP",slug:"lsp",children:[]},{level:2,title:"Formatting",slug:"formatting",children:[]},{level:2,title:"Linting",slug:"linting",children:[]}],filePathRelative:"languages/README.md",git:{updatedTime:1628190595e3,contributors:[]}}},4837:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>i});var e=s(6252);const t=(0,e.uE)('<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>LunarVim strives to have basic LSP, linting, formatting and syntax support for all major languages.</p><p>If your language is not supported please do the following:</p><ul><li><p>Check if LSP support is available in the lspconfig <a href="">repo</a></p></li><li><p>Check if your linter or formatter is available in the null-ls <a href="">repo</a></p></li><li><p>Check if your syntax is supported in the treesitter <a href="">repo</a></p></li></ul><p>If there is support for your language please file an issue with the LunarVim repo</p><p>If there is not file a ticket with one of the above repos</p><h2 id="lsp" tabindex="-1"><a class="header-anchor" href="#lsp" aria-hidden="true">#</a> LSP</h2><p>To install a supported language server:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:LspInstall <span class="token code-snippet code keyword">`&lt;your_language_server&gt;`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting" aria-hidden="true">#</a> Formatting</h2>',10),l=(0,e.Uk)("Formatting is handled by Null-ls it is off by default. Not all formatters are supported. For a list of supported formatters and linters "),p={href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md#available-sources",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("look here"),r=(0,e.uE)('<p>If you want to enable formatting for javascript for example, add the following to your config.lua</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>If the name of your formatter or linter includes a hyphen <code>-</code>, replace it with an underscore <code>_</code>. Dashes are not valid identifiers in lua.</p><p>To enable format on save, add the following to your <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>format_on_save <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="linting" tabindex="-1"><a class="header-anchor" href="#linting" aria-hidden="true">#</a> Linting</h2><p>Linting is also handled by Null-ls. To set a linter for your language:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;eslint_d&quot;</span><span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',8),i={render:function(a,n){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[l,(0,e.Wm)("a",p,[o,(0,e.Wm)(s)])]),r],64)}}}}]);