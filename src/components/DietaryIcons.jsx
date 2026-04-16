export default function DietaryIcons({ tags }) {

  return (
    <>
      {tags.glutenFree &&
        <img src={null} alt="Gluten free"></img>}

      {tags.vegan && <img src={null} alt="Vegan"></img>}

      {[...Array(tags.spicy || 0)].map((_, i) => (
        <img key={i} src={null} alt="Chili icon" />
      ))}
    </>
  )
}