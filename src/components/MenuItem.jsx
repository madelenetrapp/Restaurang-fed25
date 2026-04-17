import DietaryIcons from './DietaryIcons.jsx'

export default function MenuItem({ item }) {

  return (
    <div className="card-container" key={item.name}>
      <h3 className="item-name">{item.name}</h3>
      <DietaryIcons tags={item.tags} />
      <p className="description"> {item.description}</p>
      <p className="price"> {item.price} SEK</p>
    </div >
  )
}
