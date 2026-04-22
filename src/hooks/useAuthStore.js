import { useShallow } from 'zustand/shallow'
import { authStore } from '../store/authStore'

//TODO explain why useShallow is used! (in every useHook?)
/** useShallow is used because... TODO */
export const useAuthStore = () => {


  return authStore(
    useShallow((s) => ({
      isLoggedIn: s.isLoggedIn ?? false,
      login: s.login,
      logout: s.logout
    }))
  )
}