<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
onMounted(() => {
    const documentHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    };
    window.addEventListener(`resize`, documentHeight);
    documentHeight();
});
</script>

<style lang="scss">
.default {
}
</style>
