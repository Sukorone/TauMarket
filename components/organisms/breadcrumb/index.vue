<template>
    <div class="breadcrumbs">
        <MoleculesBreadcrumb :items="breadcrumbList" />
    </div>
</template>

<script setup>
const route = useRoute()

const breadcrumbList = computed(() => {
    let paths = []
    const routePath = route.path.split('/').filter(p => p)

    routePath.reduce((prev, curr) => {
        const fullPath = `${prev}/${curr}`
        paths.push({
            path: fullPath,
            label: route.query[curr] || curr
        })
        return fullPath
    }, '')

    return paths
})
</script>

<style scoped lang="scss">
.breadcrumbs {
    display: flex;
    align-items: center;
}
</style>