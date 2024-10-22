<template>
    <footer class="footer_container">
        <ul class="footer__list">
            <li class="footer__list-item" v-for="items in footer">
                <MoleculesFooter v-bind="items" />
            </li>
        </ul>
        <span class="footer__description">
            <AtomsFooter description>Мы продаем компьютеры, клавиатуры, мышки, мониторы, плееры, телефоны и многое
                другое.
                Мы работаем, чтобы вам было удобно. Центры продаж техники Apple расположены по всей России. Вы можете
                прийти, чтобы лично ознакомиться с тем или иным устройством. У нас предусмотрена и возможность заказа
                через интернет. Как покупать — выбор за вами!</AtomsFooter>
        </span>
    </footer>
</template>

<script setup lang="ts">
import type { IFooter } from '~/types/footer'

const footer: IFooter[] = [
    {
        title: 'О компании',
        items: [
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
        ]
    },
    {
        title: 'Помощь',
        items: [
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
        ]
    },
    {
        title: 'Каталог',
        items: [
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
            {
                text: 'Тест 1',
                url: '/'
            },
        ]
    },
    {
        title: '8(800)555-35-35',
        items: [
            {
                text: 'Тест1',
                url: '/'
            },
            {
                text: 'Соц 1',
                url: '/'
            },
            {
                text: 'Соц 2',
                url: '/'
            },
            {
                text: 'Соц 3',
                url: '/'
            },
            {
                text: 'Соц 4',
                url: '/'
            }
        ]
    }
]
</script>

<style scoped lang="scss">
.footer {
    &_container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        padding: 60px 190px;
        background-color: var(--secondary-background-color);
    }

    &__list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1540px;
    }


    &__description {
        word-wrap: break-word;
        padding: 30px 0 30px 0;
        max-width: 1540px;
    }
}
</style>