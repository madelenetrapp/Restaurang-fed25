import { useShallow } from 'zustand/shallow'
import { authStore } from '../store/authStore'

export const useAuthStore = () => {

  return authStore(
    useShallow((s) => ({
      isLoggedIn: s.isLoggedIn ?? false,
      login: s.login,
      logout: s.logout
    }))
  )
}