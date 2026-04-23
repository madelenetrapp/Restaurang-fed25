import { useLoaderData } from "react-router";
import MenuLayout from '../components/menu/MenuLayout';

export default function MenuPage() {
  useLoaderData()

  return (
    <MenuLayout isAdmin={false} />
  )
}