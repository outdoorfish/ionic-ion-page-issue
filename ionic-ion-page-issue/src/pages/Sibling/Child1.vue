<template>
  <ion-page>
    <ion-content>
      <h2>child1</h2>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
export default defineComponent({
  name: "Child1",
  components: { IonPage, IonContent },
});
</script>