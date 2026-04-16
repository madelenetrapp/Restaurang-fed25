import { menuList } from '../api/menuList.js'
import MenuItem from '../components/MenuItem.jsx'
import { Fragment } from 'react'

export default function MenuPage() {

  //TODO byt från att använda menuList till att använda menu i menuStore
  const menuTypes = ["Starter", "Main"]

  // const starters = menuList.filter(s => s.type === "Starter")
  // const mains = menuList.filter(s => s.type === "Main")
  // const desserts = menuList.filter(s => s.type === "Dessert")


  // const groupedMenuList = menuList.reduce((newList, item) => {
  //   if (!newList[item.type]) {
  //     newList[item.type] = []
  //   }
  //   newList[item.type].push(item)
  //   return newList
  // }, {})

  // const types = Object.keys(groupedMenuList)

  return (
    <>
      <h1 className='menu-header'>Menu</h1>

      {menuTypes.map(type => (

        <Fragment key={type} >
          <h1 className='category-header'> {type} </h1>

          {menuList.filter(s => s.type === type).map(item => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}

        </Fragment>


      ))}



      {/* {types.map(type => (
        <div className='type-of-card-container' key={type}>
          <h1 className='category-header'> {type} </h1>

          {groupedMenuList[type].map(item => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div >
      ))
      } */}
    </>

  )
}