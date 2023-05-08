<template>
  <VForm v-slot="{ meta, resetForm }">
    <div>
      <label for="username">姓名</label>
      <VField id="username" name="name" type="text" label="姓名" rules="required|min:2" />
      <ErrorMessage name="name" class="error" />
    </div>

    <div>
      <label for="email">信箱</label>
      <VField id="email" name="account" type="email" label="信箱" rules="required|email" />
      <ErrorMessage name="account" class="error" />
    </div>
    <div>
      <label for="phone">電話</label>
      <VField
        name="phone"
        type="text"
        id="phone"
        label="電話"
        rules="required|phoneStartingWith09|max:10"
      />
      <ErrorMessage name="phone" class="error" />
    </div>
    <div>
      <label for="textarea">備註</label>
      <VField id="textarea" name="description" as="textarea" label="備註" rules="max:10" />
      <ErrorMessage name="description" class="error" />
    </div>
    <div>
      <label for="delivery">寄送方式</label>
      <VField name="delivery" id="delivery" as="select" rules="required" label="寄送方式">
        <option disabled value="">請選擇</option>
        <option value="inStory">貨到付款</option>
        <option value="creditCard">信用卡付款</option>
        <option value="post">郵寄</option>
      </VField>
      <ErrorMessage name="delivery" class="error" />
    </div>
    <div>
      <button class="btn btn-primary" @click="resetForm()" :disabled="!meta.valid">提交</button>
    </div>
  </VForm>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
