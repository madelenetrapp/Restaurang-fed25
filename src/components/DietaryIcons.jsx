import glutenFreeIcon from '../assets/icon-gluten-free.svg';
import veganIcon from '../assets/icon-vegan.svg';
import spicyIcon from '../assets/icon-spicy.svg';

export default function DietaryIcons({ tags }) {

  return (
    <div className='dietary-icons'>
      {tags.glutenFree &&
        <img src={glutenFreeIcon} alt="Gluten free" />}

      {tags.vegan && <img src={veganIcon} alt="Vegan" />}


      {/* TODO needs to be reworked and simplified */}
      {[...Array(tags.spicy || 0)].map((_, i) => (
        <img key={i} src={spicyIcon} alt="Chili icon" />
      ))}
    </div>
  )
}