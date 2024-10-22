<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from "@vueuse/core";

const searchContainerRef = ref(null);
const searchOpen = ref(false);
const isIconActive = ref(false);
const isInputActive = ref(false);
const searchQuery = ref('');

const toggleSearch = () => {
    if (!searchOpen.value) {
        openSearch();
    } else {
        closeSearch();
    }
};

onClickOutside(searchContainerRef, () => {
    if (searchOpen.value && !searchQuery.value) {
        toggleSearch();
    }
});

const openSearch = () => {
    searchOpen.value = true;
    isIconActive.value = true;
    setTimeout(() => {
        isInputActive.value = true;
    }, 300);
};

const closeSearch = () => {
    searchOpen.value = false;
    isInputActive.value = false;
    setTimeout(() => {
        isIconActive.value = false;
    }, 1);
};
</script>


<template>
    <div class="search">
        <div class="search-container" ref="searchContainerRef">
            <div class="search-icon" :class="{ 'active': isIconActive }" @click="toggleSearch">
                <TauIcon class="search" name="search" filled />
            </div>
            <TauInput class="search-input" :class="{ 'active': isInputActive }" placeholder="Поиск текста"
                v-model="searchQuery" v-show="searchOpen" @focus="openSearch" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.search {
    display: flex;
    justify-content: center;

    &-container {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;

    }

    &-icon {
        padding: 8px 10px;
        transition: transform 0.3s;
        cursor: pointer;
        position: absolute;
        top: 42px;
        left: 49%;
        border-radius: 12px;

        &:not(.active):hover {
            background: var(--search-background-color);
        }
    }

    &-icon.active {
        transform: translateX(270px);
        transition: all 1s;
    }

    &-input {
        outline: none;
        width: 0;
        height: 56px;
        border: 0.5px solid var(--search-background-color);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        padding: 0;
        transition: width 0.5s ease, padding 0.5s ease;
        opacity: 0;
    }

    &-input.active {
        font-size: 16px;
        line-height: 20px;
        color: var(--primary-text-color);
        padding: 10px;
        width: 600px;
        opacity: 1;
        border: 0.5px solid #a33b3b34;
        background: var(--search-background-color);
    }

    &-box {
        transition: transform 1s, opacity 1s;
        cursor: pointer;

    }
}
</style>