<template>
  <ion-page>
    <ion-content>
      <h2>child2</h2>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
export default defineComponent({
  name: "Child2",
  components: { IonPage, IonContent },
});
</script>