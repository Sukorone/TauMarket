<template>
    <div class="catalog_container">
        <div class="catalog_hero">
            <div class="catalog_breadcrumbs">
                <OrganismsBreadcrumb />
            </div>
            <div class="catalog_filterchip">
                <TemplatesFilterChip :chips="chips"/>
            </div>
            <OrganismsCardlist :data="products" toggleCart />
            <OrganismsPagination :totalPages="11"/>
        </div>
        <div class="catalog_prefooter">
            <OrganismsPrefooter text="dasdadsaadaadsa" title="test" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product'
import type { IFilterChip } from '~/types/filterchip';

const products = ref<IProduct[]>([
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
    {
        title: 'test',
        price: '0.01',
        photo: 'img/cardphoto.png'
    },
])

const chips = ref<IFilterChip[]>([
    {
        title: 'test',
        active: true,
    },
    {
        title: 'test10',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'iphone 100 pro max plus ultra',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },
    {
        title: 'dsadsada',
        active: true,
    },    
])

</script>

<style lang="scss">
.catalog {
    &_container {
        width: 60%;
        margin: 60px auto;
    }

    &_breadcrumbs {
        padding: 15px 0px;
    }

    &_filterchip {
        padding: 15px 0px;
    }

    &_prefooter {
        padding: 60px 0 0 0;
    }
}
</style>
