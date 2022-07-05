# Table

> 테이블

## Examples

<div class="box box-row">
  <table class="table">
    <caption>기본 테이블</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Second</th>
        <th scope="col">Last</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>cell First-1</td>
        <td>cell Second-1</td>
        <td>cell Last-1</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>cell First-2</td>
        <td>cell Second-2</td>
        <td>cell Last-2</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>cell First-3</td>
        <td>cell Second-3</td>
        <td>cell Last-3</td>
      </tr>
    </tbody>
  </table>
  <!-- | -->
  <table class="table table-bordered table-striped">
    <caption>bordered + striped</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Second</th>
        <th scope="col">Last</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>cell First-1</td>
        <td>cell Second-1</td>
        <td>cell Last-1</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>cell First-2</td>
        <td>cell Second-2</td>
        <td>cell Last-2</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>cell First-3</td>
        <td>cell Second-3</td>
        <td>cell Last-3</td>
      </tr>
    </tbody>
  </table>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html{35}
<!-- 기본 table -->
<table class="table">
  <caption>기본 테이블</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>cell First-1</td>
      <td>cell Second-1</td>
      <td>cell Last-1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>cell First-2</td>
      <td>cell Second-2</td>
      <td>cell Last-2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>cell First-3</td>
      <td>cell Second-3</td>
      <td>cell Last-3</td>
    </tr>
  </tbody>
</table>

<!-- bordered + striped -->
<table class="table table-bordered table-striped">
  <!-- 생략 -->
</table>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
.table {
  $border-width: 1px;
  $border-color: #ccc;

  width: auto;
  border-collapse: collapse;
  caption-side: bottom;

  caption {
    margin-top: 0.5rem;
  }

  td,
  th {
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: $border-width solid $border-color;
  }

  &-bordered {
    td,
    th {
      border: $border-width solid $border-color;
    }
  }

  &-striped {
    tbody {
      tr:nth-child(even) {
        background-color: #8883;
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>

<style lang="scss" scoped>
.table {
  $border-width: 1px;
  $border-color: #ccc;

  width: auto;
  border-collapse: collapse;
  caption-side: bottom;

  caption {
    margin-top: 0.5rem;
  }

  td,
  th {
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: $border-width solid $border-color;
  }

  &-bordered {
    td,
    th {
      border: $border-width solid $border-color;
    }
  }
  &-striped {
    tbody {
      tr:nth-child(even) {
        background-color: #8883;
      }
    }
  }

  // reset reset
  display: table;

  tr {
    border: unset;

    &:nth-child(2n) {
      background-color: unset;
    }
  }
}
</style>