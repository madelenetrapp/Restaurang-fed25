import { useShallow } from 'zustand/shallow'
import { authStore } from '../store/authStore'

//useShallow - se till så man inte råkar ha onödiga extra renderingar*/
export const useAuthStore = () => {


  return authStore(
    useShallow((s) => ({
      isLoggedIn: s.isLoggedIn ?? false,
      login: s.login,
      logout: s.logout
    }))
  )
}