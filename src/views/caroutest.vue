<template>
    <CCarousel>
        <CCarouselItem>
            <img src="../assets/images/mark-oflynn.jpeg" class="block w-20" alt="Step 1">
        </CCarouselItem>
        <CCarouselItem>
            <img src="../assets/images/domingo-alvarez.jpeg" class="block w-20" alt="Step 2">
        </CCarouselItem>
    </CCarousel>
</template>
<script>
import {CCarousel, CCarouselItem} from "@coreui/vue";

export default {
  components: {
    CCarousel,
    CCarouselItem,
  },
};
</script>
