import{_ as n,e as s}from"./app.54188b32.js";const a={},p=s(`<h1 id="variables-scss" tabindex="-1"><a class="header-anchor" href="#variables-scss" aria-hidden="true">#</a> _variables.scss</h1><blockquote><p>SASS \uBCC0\uC218 \uD65C\uC6A9</p></blockquote><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \uC0C9\uC0C1</span>
<span class="token comment">// ======================</span>
<span class="token property"><span class="token variable">$white</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token comment">//</span>
<span class="token property"><span class="token variable">$brand-color</span></span><span class="token punctuation">:</span> #7fff00<span class="token punctuation">;</span> <span class="token comment">// or primary</span>
<span class="token property"><span class="token variable">$point-color</span></span><span class="token punctuation">:</span> #f20<span class="token punctuation">;</span> <span class="token comment">// or secondary</span>
<span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$link-color</span></span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$body-bg-color</span></span><span class="token punctuation">:</span> <span class="token variable">$white</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>

<span class="token comment">// \uAE00\uAF34</span>
<span class="token comment">// ref: https://getbootstrap.com/docs/5.2/content/reboot/#native-font-stack</span>
<span class="token comment">// ======================</span>
<span class="token property"><span class="token variable">$font-base</span></span><span class="token punctuation">:</span> system-ui<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI&quot;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Noto Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Liberation Sans&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">&quot;Apple Color Emoji&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI Emoji&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI Symbol&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Noto Color Emoji&quot;</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token comment">// Noto Sans KR \uC744 \uC6F9\uD3F0\uD2B8\uB85C \uC0AC\uC6A9\uC2DC</span>
<span class="token property"><span class="token variable">$font-noto</span></span><span class="token punctuation">:</span> <span class="token string">&#39;Noto Sans KR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Noto Sans&#39;</span><span class="token punctuation">,</span> <span class="token variable">$font-base</span><span class="token punctuation">;</span>

<span class="token comment">// \uAE38\uC774</span>
<span class="token comment">// ======================</span>
<span class="token property"><span class="token variable">$header-height</span></span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$footer-height</span></span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span> <span class="token comment">// 4px</span>

<span class="token comment">// Breakpoints</span>
<span class="token comment">// ref: https://getbootstrap.com/docs/5.2/layout/breakpoints/</span>
<span class="token comment">// ======================</span>
<span class="token property"><span class="token variable">$breakpoints</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">xs</span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span>
  <span class="token property">sm</span><span class="token punctuation">:</span> 576px<span class="token punctuation">,</span>
  <span class="token property">md</span><span class="token punctuation">:</span> 768px<span class="token punctuation">,</span>
  <span class="token property">lg</span><span class="token punctuation">:</span> 992px<span class="token punctuation">,</span>
  <span class="token property">xl</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">,</span>
  <span class="token property">xxl</span><span class="token punctuation">:</span> 1400px
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,3);function t(e,o){return p}var l=n(a,[["render",t],["__file","variables.html.vue"]]);export{l as default};
