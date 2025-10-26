<script lang="ts" setup>

const formFeedback = ref({
    title: "",
    message: "",
    status: ""
});
const messageSent = ref(false);
const submitted = ref(false);
const success = ref(false);
const handleSubmit = (event:Event) => {
  console.log(event.target);
  event.preventDefault();
 
  const myForm = event.target;
  
  const formData = new FormData(myForm as HTMLFormElement);

  const urlSearchParams = new URLSearchParams();
  formData.forEach((value, key) => {
    urlSearchParams.append(key, value.toString());
  });
  
  fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: urlSearchParams.toString()
  }).then(() => {
    formFeedback.value.status = "success";
    formFeedback.value.title = "Thank you for your message!";
    formFeedback.value.message = "We will get back to you shortly.";
    messageSent.value = true;
    success.value = true;
    
  }).catch(error => {
    formFeedback.value.status = "error";
    formFeedback.value.title = "Oops! Something went wrong.";
    formFeedback.value.message = error.message;
    messageSent.value = true;
    success.value = false;
  });
};
</script>

<template>
  <div class="mb-6 relative">
    <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" :class="{sent: messageSent, success: success, submitted: submitted}" @submit="handleSubmit">
      <div class="form-group">
        <input type="hidden" name="form-name" value="contact">
        <label>
          <span>Name*</span>
          <input type="text" name="name" :placeholder="'Enter your name'" required>
        </label>
        <label>
          <span>Email*</span>
        <input type="email" name="email" placeholder="Enter your email" required>
      </label>
       
        <label>
          <span>Object*</span>
        <input type="text" name="budget" placeholder="What are you writing about?" >
      </label>
        <label>
          <span>Message*</span>
        <textarea name="message" placeholder=" "  required/>
      </label>
      </div>
      <div class="form-check">
        <input type="checkbox" name="privacy" required>
        <label for="privacy">I've read and accept Forgeplay <NuxtLink to="/privacy">privacy policy</NuxtLink></label>
      </div>
      <div class="text-center">
        <button class="btn" :disabled="submitted && success" @click="submitted = true" >Send Message</button>
      </div>
      
    </form>
    <div v-if="formFeedback.status" class="form-feedback p-6 text-center mt-10" :class="[formFeedback.status]">
     <h2 class="text-2xl xl:text-3xl">{{ formFeedback.title }}</h2>
     <p>{{ formFeedback.message }}</p>
    </div>
  </div>
  
</template>

<style scoped>
@reference 'assets/css/main.css';
.form-group {
  @apply flex flex-col sm:gap-2 xl:gap-8 px-4 justify-center items-center py-6 xl:py-16;
  label{
    @apply p-2 w-full max-w-md text-lg xl:text-xl font-display;
    span{
      @apply block translate-y-full p-2 transition-all duration-500 origin-top-left;
    }
    &:focus-within, &:has(input:not(:placeholder-shown)), &:has(textarea:not(:placeholder-shown)){
      span{
        @apply translate-y-2 scale-75;
      }
      
    }
    
  }
  input, textarea{
    @apply font-sans p-2 w-full text-lg xl:text-xl bg-transparent border-b rounded-none border-primary transition-colors duration-500 text-transparent placeholder:text-transparent;
    &:focus{
      outline: none;
      @apply bg-stone-50 text-stone-900 placeholder:text-stone-500;
    }
    &:focus, &:not(:placeholder-shown){
      @apply text-stone-900;
    }
    &:is(.submitted :invalid){
      
      @apply border-red-700 bg-red-200 ;
      
    }
  }
  
}
.form-check{
    @apply flex justify-center gap-2 p-10;
    input[type="checkbox"]{
      @apply w-6 h-6;
      &:is(.submitted :invalid){
      outline: auto;
      @apply outline-red-700 outline-2 bg-red-200 ;
      
    }
    }
    label{
      @apply text-sm max-w-prose text-center;
    }
  }
  .form-feedback{
    @apply bg-stone-200/50;
    &.success{
      @apply bg-green-200/50 text-green-950;
    }
    &.error{
      @apply bg-red-200/50 text-red-950;
    }
  }
</style>