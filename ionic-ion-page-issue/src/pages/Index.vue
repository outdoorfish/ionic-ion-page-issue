<template>
  <ion-page>
    <ion-content>
      <h1>Home</h1>
      <router-link to="/sibling">sibling</router-link>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
export default defineComponent({
  name: "Home",
  components: { IonPage, IonContent },
});
</script>