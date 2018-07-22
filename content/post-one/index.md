---
title: "Post Number One made with Gatsby."
description: "How to Optimize a Hugo Blog in 2018"
date: "17-07-18"
category: ""
intro: "DA BLOG INTRO"
snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem delectus quae dicta saepe temporibus corporis reiciendis dolores sed alias labore, numquam molestias deserunt aspernatur eum iusto amet optio perspiciatis!."
tags:
    - css3
    - javascript
---

<section class="l-row">
  <div class="l-row">
    <div class="l-row l-col l-col__5-8@l l-col__6-10@xxl">
      <p class="copy">Everything in one place. Selling your products in many places should be every bit as simple as selling in one. With Shopify’s ecommerce software, you get one unified platform to run your business with ease.</p>
    </div>
    <aside class="l-row l-col l-col__3-8@l l-col__4-10@xxl l-box o-toc">
      <p class="a-toc__header">Table of Contents</p>
      <svg class="icon icon--48 icon--collapse">
        <use xlink:href="#icon-toc" />
      </svg>
      <ol class="box__content m-toc__content">
        <a href="#header1" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">01&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header2" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">02&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
        <a href="#header3" class="link link--toc">
          <li class="a-toc__item">
            <span class="a-toc__number">03&thinsp;</span>
            <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
          </li>
        </a>
      </ol>
    </aside>
  </div>
  <div class="l-row u-mb-28 u-mt-28">
    <span class="copy copy--xs a-read-fullscreen">Ahora lee en pantalla completa</span>
  </div>
  <div class="l-row l-row--center l-col__6-10@xxl">
      <h2 class="h2" id="header1">Hey there
          <a href="#header1" class="h2__anchor">
              <svg class="icon icon--anchor">
                <use xlink:href="#icon-anchor" />
              </svg>
          </a>
      </h2>
  </div>
{{< highlight js >}}

(function() {
  const menuBtn = document.querySelector(".a-menu**btn");
  const siteNav = document.querySelector(".o-site**nav");

  const svgLines = document.querySelectorAll(".fl");
  const showNow = document.querySelectorAll(".showNow");
  const showBtn = document.querySelector(".show-btn");

  let svgLinesArr = [...svgLines];
  let showNowArr = [...showNow];

  menuBtn.addEventListener("click", openNav);
  showBtn.addEventListener("animationend", animateSvgLines);
  showBtn.addEventListener("webkitAnimationEnd", animateSvgLines);

  // ********************************************************

  function openNav() {
    siteNav.classList.toggle("is-visible");
    console.log("sup");
  }

  function animateSvgLines() {
    svgLinesArr.map((line) => {
      line.classList.remove(`fl`);
      setTimeout(() => {
        line.classList.add(`fl`);
      }, 2000);
    });

    showNowArr.map((item) => {
      setTimeout(() => {
        item.classList.remove(`showNow`);
      }, 2000);

      setTimeout(() => {
        item.classList.add(`showNow`);
      }, 2300);
    });
  }
})();

{{< / highlight >}}

  <div class="l-row l-row--center l-col__6-10@xxl">
    <p class="copy">If you tried A/B testing earlier, understand the importance of optimization</p>
    <p class="copy">And want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end.</p>
    <p class="copy">Understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end.</p>
    <h2 class="h2" id="header2">Is this ok? I sure hope so, otherwise i'm screwed
        <a href="#header2" class="h2__anchor">
            <svg class="icon icon--anchor">
                <use xlink:href="#icon-anchor" />
            </svg>
        </a>
    </h2>
    <p class="copy">If you tried A/B testing earlier, understand the importance of optimization</p>    
    <h2 class="h2" id="header3">Probably this works
        <a href="#header3" class="h2__anchor">
            <svg class="icon icon--anchor">
                <use xlink:href="#icon-anchor" />
            </svg>
        </a>
    </h2>
    <p class="copy">If you tried A/B testing earlier, understand the importance of optimization</p>
    <h3 class="h3">I am stil ltrying to find the best result</h3>
    <p class="copy">And want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end.</p>
    <p class="copy">Understand the importance of optimization, and want to increase your website conversion, continue reading till the end. If you tried A/B testing earlier, understand the importance of optimization, and want to increase your website conversion, continue reading till the end.</p>
  </div>

</section>
<aside class="l-row o-reading">
  <div class="a-reading__toc-trigger">
    <p class="a-toc__header a-toc__header--reading">Table of Contents</p><!--
  --><svg class="icon icon--48 icon--toc-read">
      <use xlink:href="#icon-toc" />
    </svg>
    <ol class="m-reading__toc">
      <a href="#header1" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">01&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header2" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">02&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
      <a href="#header3" class="link link--toc">
        <li class="a-toc__item">
          <span class="a-toc__number">03&thinsp;</span>
          <span class="a-toc__title">Making Jekyll faster by using Hugo every time</span>
        </li>
      </a>
    </ol>
  </div>
  <div class="a-reading__share-trigger">
    <svg class="icon icon--48">
      <use xlink:href="#icon-share" />
    </svg>
    <div class="m-reading__share-icons">
      <svg class="icon icon--48 icon--facebook">
        <use xlink:href="#icon-facebook" />
      </svg>
      <svg class="icon icon--48 icon--twitter">
        <use xlink:href="#icon-twitter" />
      </svg>
      <svg class="icon icon--48 icon--linkedin">
        <use xlink:href="#icon-linkedin" />
      </svg>
      <svg class="icon icon--48 icon--gplus">
        <use xlink:href="#icon-gplus" />
      </svg>
    </div>
  </div>
  <div class="a-reading__go-up">
    <a href="#page-top">
      <svg class="icon icon--48">
        <use xlink:href="#icon-up" />
      </svg>
    </a>
  </div>
</aside>
