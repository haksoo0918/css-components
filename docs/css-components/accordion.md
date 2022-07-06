---
tags:
  - input
  - radio
  - accordion

next:
  avatar.md
---

# Accordion

> input 태그 라디오를 활용한 아코디언

## Examples

<div class="box box-row">
  <div class="accordion">
    <input id="a1" class="radio" type="radio" name="accordion" checked>
    <label class="accordion-title first" for="a1">Aliqua pariatur qui tempor nisi ex nostrud labore elit mollit esse officia.</label>
    <div class="accordion-body">
      <div class="accordion-content">
        Laborum sit esse laborum commodo ut minim. Cupidatat irure culpa quis deserunt deserunt. Enim voluptate aliqua proident nulla labore voluptate adipisicing laborum aliquip occaecat ad sunt aute. Pariatur adipisicing ullamco aute reprehenderit in duis excepteur. Id in minim officia mollit irure dolor culpa. Commodo nisi ea laborum consectetur sit proident ut Lorem occaecat elit irure. Voluptate eiusmod in id dolor occaecat fugiat velit veniam.
      </div>
    </div>
    <!-- | -->
    <input id="a2" class="radio" type="radio" name="accordion">
    <label class="accordion-title" for="a2">Labore ut ea laborum cupidatat incididunt do proident laboris ea labore veniam cillum laboris fugiat.</label>
    <div class="accordion-body">
      <div class="accordion-content">
        Non ipsum pariatur Lorem duis ut cillum ut consequat ullamco in eu incididunt dolore culpa. Eiusmod mollit adipisicing elit incididunt pariatur duis aute ea commodo ad. Ex id ad est laborum ipsum quis voluptate Lorem sunt nisi. Labore reprehenderit commodo nisi irure cupidatat ea id irure Lorem.
      </div>
    </div>
    <!-- | -->
    <input id="a3" class="radio" type="radio" name="accordion">
    <label class="accordion-title" for="a3">Commodo non velit eu id pariatur nisi enim commodo consectetur ad.</label>
    <div class="accordion-body">
      <div class="accordion-content">
        Sit et voluptate cupidatat ullamco nisi ullamco enim labore incididunt consectetur sint officia. Laborum velit voluptate exercitation proident aliquip non. Occaecat velit sint tempor velit nostrud. Id occaecat eiusmod reprehenderit fugiat dolor. Deserunt ullamco officia anim irure eu dolor esse nostrud adipisicing. Et duis commodo in aliqua incididunt.
      </div>
    </div>
  </div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<div class="accordion">
  <input id="a1" class="radio" type="radio" name="accordion" checked>
  <label class="accordion-title first" for="a1">Aliqua pariatur qui tempor nisi ex nostrud labore elit mollit esse officia.</label>
  <div class="accordion-body">
    <div class="accordion-content">
      Laborum sit esse laborum commodo ut minim. Cupidatat irure culpa quis deserunt deserunt. Enim voluptate aliqua proident nulla labore voluptate adipisicing laborum aliquip occaecat ad sunt aute. Pariatur adipisicing ullamco aute reprehenderit in duis excepteur. Id in minim officia mollit irure dolor culpa. Commodo nisi ea laborum consectetur sit proident ut Lorem occaecat elit irure. Voluptate eiusmod in id dolor occaecat fugiat velit veniam.
    </div>
  </div>
  <!-- | -->
  <input id="a2" class="radio" type="radio" name="accordion">
  <label class="accordion-title" for="a2">Labore ut ea laborum cupidatat incididunt do proident laboris ea labore veniam cillum laboris fugiat.</label>
  <div class="accordion-body">
    <div class="accordion-content">
      Non ipsum pariatur Lorem duis ut cillum ut consequat ullamco in eu incididunt dolore culpa. Eiusmod mollit adipisicing elit incididunt pariatur duis aute ea commodo ad. Ex id ad est laborum ipsum quis voluptate Lorem sunt nisi. Labore reprehenderit commodo nisi irure cupidatat ea id irure Lorem.
    </div>
  </div>
  <!-- | -->
  <input id="a3" class="radio" type="radio" name="accordion">
  <label class="accordion-title" for="a3">Commodo non velit eu id pariatur nisi enim commodo consectetur ad.</label>
  <div class="accordion-body">
    <div class="accordion-content">
      Sit et voluptate cupidatat ullamco nisi ullamco enim labore incididunt consectetur sint officia. Laborum velit voluptate exercitation proident aliquip non. Occaecat velit sint tempor velit nostrud. Id occaecat eiusmod reprehenderit fugiat dolor. Deserunt ullamco officia anim irure eu dolor esse nostrud adipisicing. Et duis commodo in aliqua incididunt.
    </div>
  </div>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.accordion {
  $border-color: #ccc;
  $border-radius: 4px;

  border: 1px solid $border-color;
  border-radius: $border-radius;

  &-title {
    position: relative;
    display: block;
    padding: 1rem;
    padding-right: 30px;
    cursor: pointer;

    &:after {
      content: '+';
      position: absolute;
      margin: auto 0;
      width: 12px;
      height: 21px;
      top: 0;
      right: 16px;
      bottom: 0;
      font-weight: normal;
      text-align: center;
      line-height: 21px;
    }
    &:not(.first) {
      border-top: 1px solid $border-color;
    }
  }
  &-body {
    height: 0;
    /* max-height: 0; */
    overflow: hidden;
    /* transition: max-height 0.3s linear; */
  }
  &-content {
    box-sizing: border-box;
    padding: 1rem;
    border-top: 1px solid $border-color;
    background-color: #8882;
  }

  .radio {
    display: none;

    &:checked {
      + .accordion-title {
        font-weight: bold;

        &:after {
          content: '-';
        }

        + .accordion-body {
          height: auto;
          /* max-height: 500px; */
          /* overflow-y: auto; */
        }
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

::: tip reference
[CSS Accordion Slider Generator](https://accordionslider.com/)
:::

<style lang="scss" scoped>
.accordion {
  $border-color: #ccc;
  $border-radius: 4px;

  border: 1px solid $border-color;
  border-radius: $border-radius;

  &-title {
    position: relative;
    display: block;
    padding: 1rem;
    padding-right: 30px;
    cursor: pointer;

    &:after {
      content: '+';
      position: absolute;
      margin: auto 0;
      width: 12px;
      height: 21px;
      top: 0;
      right: 16px;
      bottom: 0;
      font-weight: normal;
      text-align: center;
      line-height: 21px;
    }
    &:not(.first) {
      border-top: 1px solid $border-color;
    }
  }
  &-body {
    height: 0;
    /* max-height: 0; */
    overflow: hidden;
    /* transition: max-height 0.3s linear; */
  }
  &-content {
    box-sizing: border-box;
    padding: 1rem;
    border-top: 1px solid $border-color;
    background-color: #8882;
  }

  .radio {
    display: none;

    &:checked {
      + .accordion-title {
        font-weight: bold;

        &:after {
          content: '-';
        }

        + .accordion-body {
          height: auto;
          /* max-height: 500px; */
          /* overflow-y: auto; */
        }
      }
    }
  }
}
</style>