import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';

export const authStore = create(
	immer((set) => ({

		isLoggedIn: false,

		login: () => {
			set(s => {
				s.isLoggedIn = true
			})
		},

		logout: () => {
			set(s => {
				s.isLoggedIn = false
			})
		}
	}))
)
