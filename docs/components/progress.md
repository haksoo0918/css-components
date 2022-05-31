# Progress

> 진행 정도 표시

## Examples

<div class="box box-row">
  <progress class="progress"></progress>
  <!-- | -->
  <progress class="progress" value="30" max="100">30%</progress>
  <hr>
  <!-- custom -->
  <div class="progress progress-custom">
    <div class="progress-bar" style="width: 75%">75%</div>
  </div>
  <div class="progress progress-custom">
    <div class="progress-bar progress-bar-striped" style="width: 50%"></div>
  </div>
  <div class="progress progress-custom">
    <div class="progress-bar progress-bar-striped animated" style="width: 80%"></div>
  </div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- 기본 progress tag -->
<!-- value, max 가 없을때 -->
<progress class="progress"></progress>
<!-- value, max 값이 있을때 -->
<progress class="progress" value="30" max="100">30%</progress>

<!-- custom -->
<div class="progress progress-custom">
  <div class="progress-bar" style="width: 75%">75%</div>
</div>
<!-- 무늬 추가 -->
<div class="progress progress-custom">
  <div class="progress-bar progress-bar-striped" style="width: 50%"></div>
</div>
<!-- 애니메이션 추가 -->
<div class="progress progress-custom">
  <div class="progress-bar progress-bar-striped animated" style="width: 50%"></div>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
@keyframes loading {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -45px 0; // 실제 무늬 간격
  }
}

.progress {
  $bg: #8883;
  $color: #7fff00;
  $height: 1rem;

  display: block;
  width: auto;
  height: $height;
  border: none;
  border-radius: 4px;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: $bg;
  }
  &::-webkit-progress-value {
  }

  &-custom {
    background-color: $bg;
  }
  &-bar {
    height: $height;
    color: #fff;
    background-color: $color;
    text-align: center;
    font-size: 0.8em;
    line-height: $height;

    &-striped {
      background-image: repeating-linear-gradient(45deg, #0003 0 16px, #0000 16px 32px);

      &.animated {
        background-size: calc(100% + 45px) $height;
        animation: loading 1s linear infinite;
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
@keyframes loading {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -45px 0; // 실제 무늬 간격
  }
}

.progress {
  $bg: #8883;
  $color: #7fff00;
  $height: 1rem;

  display: block;
  width: auto;
  height: $height;
  border: none;
  border-radius: 4px;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: $bg;
  }
  &-bar,
  &::-webkit-progress-value {
    background-color: var(--c-brand);
  }

  &-custom {
    background-color: $bg;
  }
  &-bar {
    height: $height;
    text-align: center;
    font-size: 0.8em;
    color: var(--c-bg);
    line-height: $height;

    &-striped {
      background-image: repeating-linear-gradient(45deg, #0003 0 16px, #0000 16px 32px);

      &.animated {
        background-size: calc(100% + 45px) $height;
        animation: loading 1s linear infinite;
      }
    }
  }
}
</style>