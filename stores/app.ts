import { defineStore } from 'pinia';
import type { IAppStore } from '~/types/stores/app';
export const useAppStore = defineStore({
    id: 'app-store',
    state: (): IAppStore => {
        return {
            sidebar: {
                open: false,
            },
        };
    },
    persist: true,
    actions: {
        toggleSidebar() {
            this.sidebar.open = !this.sidebar.open;
        },
    },
});

