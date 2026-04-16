import DietaryIcons from './DietaryIcons.jsx'

export default function MenuItem({ item }) {

  return (
    <div className="card-container" key={item.name}>
      <h2 className="item-name">{item.name}</h2>
      <DietaryIcons tags={item.tags} />
      <p className="description"> {item.description}</p>
      <p className="price"> {item.price} SEK</p>
    </div >
  )
}
