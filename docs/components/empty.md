# Empty

> 목록이나 내용이 보여질 부분에 보여질 데이타가 없는 경우

## Examples

<div class="box box-row">
  <div class="list"></div>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- :empty 활용 -->
<div class="list"></div>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.list {
  &:empty {
    &::before {
      content: 'No Data.';
      display: block;
      margin: 3rem auto;
      text-align: center;
      font-weight: bold;
      opacity: 0.6;
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.list {
  &:empty {
    &::before {
      content: 'No Data.';
      display: block;
      margin: 3rem auto;
      text-align: center;
      font-weight: bold;
      opacity: 0.6;
    }
  }
}
</style>