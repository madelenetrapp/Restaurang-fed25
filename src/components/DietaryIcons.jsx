export default function DietaryIcons({ tags }) {

  return (
    <div className='dietary-icons'>
      {tags.glutenFree &&
        <img src={null} alt="Gluten free"></img>}

      {tags.vegan && <img src='./src/assets/icon-vegan.svg' alt="Vegan"></img>}

      {[...Array(tags.spicy || 0)].map((_, i) => (
        <img key={i} src={null} alt="Chili icon" />
      ))}
    </div>
  )
}