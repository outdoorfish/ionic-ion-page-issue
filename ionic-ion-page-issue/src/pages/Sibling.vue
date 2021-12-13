<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-buttons slot="end">
          <router-link to="/another">another</router-link>
        </ion-buttons>
        <button @click="router.replace('/sibling/1')">replace child1</button>
        <button @click="router.replace('/sibling/2')">replace child2</button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
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
  IonRouterOutlet,
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
    IonRouterOutlet,
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