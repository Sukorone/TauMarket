<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(picture, idx) in slide" :key="idx"> 
                <img class="slide_image" :src="picture" alt="">
            </div>
            ...
        </div>
        <div class="swiper-pagination">
        </div>

        <div class="swiper-controller">
            <tau-btn square class="swiper-button-prev" :icons="[{ name: 'arrow-swiper', filled: true }]" />
            <tau-btn square class="swiper-button-next" :icons="[{ name: 'arrow-swiper', filled: true }]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'

interface Props {
    slide: string[],
}

const props = defineProps<Props>()

onMounted(() => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });

})

</script>

<style lang="scss">
.swiper {
    &-button {

        &-prev {
            background: var(--button-swiper-bg);
            width: 56px;
            height: 56px;
        }

        &-next {
            background: var(--button-swiper-bg);
            width: 56px;
            height: 56px;
            transform: rotate(180deg)
        }
    }

    &-controller {
        display: flex;
        justify-content: flex-end;
        margin-top: 7px;
        margin-right: 30px;
        gap: 15px; 
    }
}
</style>