# Avatar

> 사용자 계정 썸네일

## Examples

<div class="box">
  <div class="avatar">
    <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="">
  </div>

  <div class="avatar avatar-circle">
    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="">
  </div>

  <div class="avatar">
    <div class="text">박</div>
  </div>

  <div class="avatar avatar-circle">
    <div class="text">Y</div>
  </div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- 이미지 -->
<div class="avatar">
  <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="">
</div>

<!-- 이미지 & 원형 -->
<div class="avatar avatar-circle">
  <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="">
</div>

<!-- 텍스트 -->
<div class="avatar">
  <div class="text">박</div>
</div>

<!-- 텍스트 & 원형 -->
<div class="avatar avatar-circle">
  <div class="text">Y</div>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.avatar {
  $size: 40px;
  $border-radius: 10px;
  $bg-color: #8886;

  width: $size;
  height: $size;
  border-radius: $border-radius;
  background-color: $bg-color;
  overflow: hidden;

  &-circle {
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    width: 100%;
    height: 100%;
    line-height: $size;
    text-align: center;
    font-size: 20px;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.avatar {
  $size: 40px;
  $border-radius: 10px;
  $bg-color: #8886;

  width: $size;
  height: $size;
  border-radius: $border-radius;
  background-color: $bg-color;
  overflow: hidden;

  &-circle {
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    width: 100%;
    height: 100%;
    line-height: $size;
    text-align: center;
    font-size: 20px;
  }
}
</style>
