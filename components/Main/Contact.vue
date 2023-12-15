<script setup>
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import InlineMessage from 'primevue/inlinemessage';
  import Button from 'primevue/button';
  import { ref, reactive, computed } from 'vue';

  const contact = reactive({ name: '', email: '', message: '' });

  const onSubmit = (values) => {
    console.log('V', contact, contact.name);
    resetForm();

    if (values.value && values.value.length > 0) {
      //toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
      //resetForm();
    }
    return false;
  };

  const resetForm = () => {
    contact.name = '';
    contact.email = '';
    contact.message = '';
  };
</script>

<template>
  <div id="contact">
    <div>
      <h1>Let's Connect</h1>
      <div id="contact-message">
        <p>I'm always on the lookout for new opportunities so please send me a message and let's talk.</p>
        <p>I will try my best to get back to you as soon as possible.</p>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="form-field">
        <label for="name" class="p-sr-only">Name</label>
        <InputText id="name" placeholder="Name" v-model="contact.name" />
      </div>
      <div class="form-field">
        <label for="email" class="p-sr-only">Email</label>
        <InputText id="email" placeholder="Email" v-model="contact.email" />
      </div>
      <div class="form-field">
        <label for="form-message-field" class="p-sr-only">Message</label>
        <Textarea id="form-message-field" rows="5" cols="30" placeholder="Message"  v-model="contact.message" />
      </div>
      <Button type="submit" label="Submit" rounded />
    </form>
  </div>
</template>

<style scoped>
#contact {
  display: flex;
  gap: 80px;
}

#contact-message {
  line-height: 36px;
  font-size: 25px;
}

.form-field {
  margin-bottom: 50px;
}

#form-message-field {
  width: 900px;
  height: 400px;
  resize: none;
}
</style>
