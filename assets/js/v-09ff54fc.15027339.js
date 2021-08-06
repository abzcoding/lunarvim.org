(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[577],{459:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-09ff54fc",path:"/configuration/01-settings.html",title:"General Settings",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Example options",slug:"example-options",children:[]}],filePathRelative:"configuration/01-settings.md",git:{updatedTime:162818407e4,contributors:[]}}},9261:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="general-settings" tabindex="-1"><a class="header-anchor" href="#general-settings" aria-hidden="true">#</a> General Settings</h1><p>To set options use</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="example-options" tabindex="-1"><a class="header-anchor" href="#example-options" aria-hidden="true">#</a> Example options</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>backup <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- creates a backup file</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>clipboard <span class="token operator">=</span> <span class="token string">&quot;unnamedplus&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- allows neovim to access the system clipboard</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>cmdheight <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">-- more space in the neovim command line for displaying messages</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>colorcolumn <span class="token operator">=</span> <span class="token string">&quot;99999&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- fixes indentline for now</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>completeopt <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;menuone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;noselect&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>conceallevel <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">-- so that `` is visible in markdown files</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>fileencoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- the encoding written to a file</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>foldmethod <span class="token operator">=</span> <span class="token string">&quot;manual&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- folding, set to &quot;expr&quot; for treesitter based folding</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>foldexpr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- set to &quot;nvim_treesitter#foldexpr()&quot; for treesitter based folding</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>guifont <span class="token operator">=</span> <span class="token string">&quot;monospace:h17&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- the font used in graphical neovim applications</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>hidden <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- required to keep multiple buffers and open multiple buffers</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>hlsearch <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- highlight all matches on previous search pattern</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>ignorecase <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- ignore case in search patterns</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>mouse <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- allow the mouse to be used in neovim</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>pumheight <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">-- pop up menu height</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>showmode <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- we don&#39;t need to see things like -- INSERT -- anymore</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>showtabline <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">-- always show tabs</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>smartcase <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- smart case</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>smartindent <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- make indenting smarter again</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>splitbelow <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- force all horizontal splits to go below current window</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>splitright <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- force all vertical splits to go to the right of current window</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>swapfile <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- creates a swapfile</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>termguicolors <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- set term gui colors (most terminals support this)</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>timeoutlen <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">-- time to wait for a mapped sequence to complete (in milliseconds)</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- set the title of window to the value of the titlestring</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>titlestring <span class="token operator">=</span> <span class="token string">&quot;%&lt;%F%=%l/%L - nvim&quot;</span> <span class="token comment">-- what the title of the window will be set to</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>undodir <span class="token operator">=</span> CACHE_PATH <span class="token operator">..</span> <span class="token string">&quot;/undo&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- set an undo directory</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>undofile <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- enable persistent undo</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>updatetime <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">-- faster completion</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>writebackup <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- if a file is being edited by another program (or was written to file while editing with another program), it is not allowed to be edited</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>expandtab <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- convert tabs to spaces</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>shiftwidth <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">-- the number of spaces inserted for each indentation</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>tabstop <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">-- insert 2 spaces for a tab</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>cursorline <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- highlight the current line</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> <span class="token comment">-- set numbered lines</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>relativenumber <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- set relative numbered lines</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>numberwidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">-- set number column width to 2 {default 4}</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>signcolumn <span class="token operator">=</span> <span class="token string">&quot;yes&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- always show the sign column, otherwise it would shift the text each time</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>wrap <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span> <span class="token comment">-- display lines as one long line</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>spell <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>spelllang <span class="token operator">=</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>scrolloff <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">-- is one of my fav</span>\nvim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>sidescrolloff <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>',5),p={render:function(n,s){return t}}}}]);