import { defineStore } from 'pinia'
import type { ISetUserDto } from '~/types/stores/user'

export const useUserStore = defineStore({
	id: 'user-store',
	state: (): ISetUserDto => ({
		user: undefined
	}),
	actions: {
		setUser(userData: { name: string; status: string }): void {
			this.user = userData
		},
	},
})
