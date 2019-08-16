<template>
  <div class="my-container">
    <form>
      <v-text-field
        v-model="name"
        v-validate="'required|max:10'"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.has('email') ? '이메일 입력': ''"
        label="E-mail"
        data-vv-name="email"
      ></v-text-field>
      <v-select
        v-model="select"
        v-validate="'required'"
        :items="items"
        :error-messages="errors.collect('select')"
        label="Select"
        data-vv-name="select"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        v-validate="'required'"
        :error-messages="errors.collect('checkbox')"
        value="1"
        label="Option"
        data-vv-name="checkbox"
        type="checkbox"
      ></v-checkbox>

      <v-btn class="mt30" @click="validateBeforeSubmit">submit</v-btn>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    errorMessages: {
      custom: {
        name: {
          required: () => "이름은 필수 입니다.",
          max: "The name field may not be greater than 10 characters"
          // custom messages
        },
        select: {
          required: "aaaaa"
        }
      }
    }
  }),
  mounted() {
    this.$validator.localize(this.errorMessages)
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$showSnackbar("Form is valid!");
        } else {
          this.$showSnackbar("Form is not valid! Please check the fields.");
        }
      });
    }
  }
};
</script>
