<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defalut-href="/sibling" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>another</h1>
      <button @click="router.replace('/')">home</button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
export default defineComponent({
  name: "Sibling",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>