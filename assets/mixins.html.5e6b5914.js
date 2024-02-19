import{_ as t,r as c,o,c as l,a as n,b as e,F as r,e as a,d as s}from"./app.54188b32.js";const i={},u=a(`<h1 id="mixins-scss" tabindex="-1"><a class="header-anchor" href="#mixins-scss" aria-hidden="true">#</a> _mixins.scss</h1><blockquote><p>\uD65C\uC6A9 \uAC00\uB2A5\uD55C mixins</p></blockquote><h2 id="clearfix" tabindex="-1"><a class="header-anchor" href="#clearfix" aria-hidden="true">#</a> clearfix</h2><p>floating \uD574\uC81C</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">clearfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> clearfix<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,5),k=s("\uCC38\uC870: "),b={href:"https://getbootstrap.com/docs/5.2/helpers/clearfix/",target:"_blank",rel:"noopener noreferrer"},d=s("bootstrap - clearfix"),m=a(`<h2 id="stretched-link" tabindex="-1"><a class="header-anchor" href="#stretched-link" aria-hidden="true">#</a> stretched link</h2><p>\uD655\uC7A5 \uB9C1\uD06C</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">stretched-link</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token comment">// box-sizing: border-box;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.stretched-link </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> stretched-link<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,3),h=s("\uCC38\uC870: "),x={href:"https://getbootstrap.com/docs/5.2/helpers/stretched-link/",target:"_blank",rel:"noopener noreferrer"},f=s("bootstrap - stretched link"),_=a(`<h2 id="text-clamp" tabindex="-1"><a class="header-anchor" href="#text-clamp" aria-hidden="true">#</a> text-clamp</h2><p>\uBB38\uC790 \uB118\uAE40 \uC81C\uD55C(\uD55C\uC904)</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ellipsis </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="line-clamp" tabindex="-1"><a class="header-anchor" href="#line-clamp" aria-hidden="true">#</a> line-clamp</h2><p>\uC5EC\uB7EC\uC904 \uBB38\uC7A5 \uC81C\uD55C</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">line-clamp</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$num</span></span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">// text-overflow: ellipsis;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,6);function y(g,v){const p=c("ExternalLinkIcon");return o(),l(r,null,[u,n("p",null,[k,n("a",b,[d,e(p)])]),m,n("p",null,[h,n("a",x,[f,e(p)])]),_],64)}var N=t(i,[["render",y],["__file","mixins.html.vue"]]);export{N as default};
