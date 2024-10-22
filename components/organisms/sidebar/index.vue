<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { useUserStore } from '~/stores/user';
const { name, status } = toRefs(useUserStore());
const appStore = toRefs(useAppStore());
const { toggleSidebar, sidebar } = appStore;


const groups = computed(() => {
    return [
        {
            title: 'Главная',
            buttons: [
                {
                    icons: [{ name: 'user', filled: false }],
                    Text: 'Домой',
                    rounded: true,
                    centerText: false,
                },
                {
                    icons: [{ name: 'shop', filled: false }],
                    Text: 'Магазин',
                    centerText: false,
                    square: true,
                },
                {
                    icons: [{ name: 'like', filled: false }],
                    Text: 'Настройки',
                    centerText: false,
                    square: true,
                },
            ],
            hide: sidebar.value.open,
        },
        {
            title: 'Меню',
            buttons: [
                {
                    icons: [{ name: 'home', filled: false }],
                    text: 'Домой',
                    centerText: false,
                    square: true,
                },
                {
                    icons: [{ name: 'menu', filled: false }],
                    text: 'Меню',
                    centerText: false,
                    square: true,
                },
                {
                    icons: [{ name: 'search', filled: false }],
                    text: 'Поиск',
                    centerText: false,
                    square: true,
                },
            ],
            hide: false,
        },
        {
            title: 'Тех',
            buttons: [
                {
                    icons: [{ name: 'phone', filled: false }],
                    text: 'Тест 1',
                    centerText: false,
                    square: true,
                },
                {
                    icons: [{ name: 'comm', filled: false }],
                    text: 'Тест 2',
                    centerText: false,
                    square: true,
                },
                {
                    icons: [{ name: 'info', filled: false }],
                    text: 'Тест 3',
                    centerText: false,
                    square: true,
                },
            ],
            hide: false,
        },
    ];
});

const { setUser } = toRefs(useUserStore());
onMounted(() => {
    setUser.value({
        name: 'Владимир Ильич',
        status: 'Покупатель',
    });
});
const sidebarClass = computed(() => ({
    'sidebar-expanded': sidebar.value.open,
}));
const hidePart = computed(() => sidebar.value.open);
</script>

<template>
    <div class="sidebar" :class="sidebarClass">
        <div
            :class="[
                'sidebar__arrow-icon',
                { 'sidebar__arrow-icon-show': sidebar.open },
            ]"
            @click="toggleSidebar"
        >
            <TauIcon
                class="icon"
                :class="[sidebar.open ? ' icon--open' : undefined]"
                name="arrow-right"
                filled
            />
        </div>
        <ul class="sidebar_content">
            <transition name="profile">
                <div v-if="sidebar.open" class="sidebar-user">
                    <img src="~/assets/icons/icon-user.svg" alt="" />
                    <div class="sidebar-user-text">
                        <span class="sidebar-user-status" v-if="user?.name">{{ user?.name }}</span>
                        <span class="sidebar-user-name" v-if="user?.status">{{ user?.status }}</span>
                    </div>
                </div>
            </transition>
            <transition-group name="list" tag="div" class="list-wrapper">
                <div
                    class="list-wrapper__item"
                    v-for="(group, idx) in groups"
                    :key="idx"
                    v-show="!group.hide"
                >
                    <MoleculesSidebarGroup
                        class="sidebar__group"
                        :key="idx"
                        v-bind="group"
                    />
                    <tau-gap
                        height="20px"
                        :data-hide="idx === groups.length - 1"
                    />
                </div>
            </transition-group>
        </ul>
    </div>
</template>

<style lang="scss">
.icon {
    font-size: 10px;
    transition: transform 0.3 ease;

    &--open {
        transform: rotate(180deg);
    }
}

.sidebar {
    border: 0.5px solid var(--secondary-gradient-color);
    position: fixed;
    top: 30px;
    left: 30px;
    height: calc(100dvh - 60px);
    border-radius: 28px;
    background: var(--primary-background-gradient);
    padding: 1px;
    color: var(--primary-text-color);
    overflow: hidden;
	// TODO: Заменить transition all на нужные элементы
    transition: all 0.3s;
    width: 104px;

    &-expanded {
        width: 260px;
        transition: 0.3s;
    }

    &-user {
        transition: all 1s;
        white-space: nowrap;
        transition: all 2s ease;
        max-width: 208px;
        display: flex;
        gap: 12px;

        &-text {
            display: flex;
            flex-direction: column;
        }

        &-status {
            text-transform: uppercase;
            font-size: 0.688rem;
            line-height: 22px;
            color: var(--secondary-text-color);
        }

        &-name {
            text-transform: capitalize;
            font-size: 0.875rem;
            color: var(--primary-text-color);
            line-height: 22px;
        }
    }

    &__arrow-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        border-radius: 28px;
        background: var(--border-gradient-color);
        padding: 10px 12px;
        width: 24px;
        height: 24px;
        left: 123px;
        top: 87px;
        transition: all 0.3s ease;
        cursor: pointer;
        z-index: 10;

        &-show {
            top: 80px;
            left: 275px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 28px;
            background: var(--border-gradient-color);
            padding: 10px 12px;
            cursor: pointer;
            position: fixed;
            transition: all 0.3s ease;
            z-index: 10;
        }
    }

    &_content {
        background: var(--secondary-background-color-90);
        border-radius: 28px;
        padding: 40px 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: scroll;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
        .list-wrapper {
            transition: max-height 0.3s ease;
            display: block;
        }
    }

    .profile-enter-from {
        opacity: 0;
        transition: 0.1s;
    }

    .profile-leave-active {
        transition: unset;
    }
    .profile-leave-to {
        transition: unset;
    }
}
</style>
