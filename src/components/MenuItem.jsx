export default function MenuItem({ item }) {

  const spicy = () => {

    for (let x; x++; x <= item.tags.spicy) {
      return <div>{x}</div>
    }
    // item.spicy.forEach(element => {
    //   return <img src="" alt="chili"/>
    // });
  }

  return (
    <div className="card-container" key={item.name}>
      <h2 className="item-name">{item.name}</h2>

      {item.tags.glutenFree && <img src="" alt="Gluten free"></img>
      }

      {item.tags.vegan && <img src="" alt="Vegan"></img>
      }

      {/* <DietaryIcons /> */}

      {/* {
        item.spicy
          ? item.spicy.map( => (
      <img src="" alt="chili"/>
      ))
      : ''
      } */}

      <p className="description"> {item.description}</p>
      <p className="price"> {item.price} SEK</p>
    </div >
  )
}
