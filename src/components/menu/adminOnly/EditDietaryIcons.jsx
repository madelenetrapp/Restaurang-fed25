import glutenFreeIcon from '../../../assets/icon-gluten-free.svg';
import veganIcon from '../../../assets/icon-vegan.svg';
import spicyIcon from '../../../assets/icon-spicy.svg';

export default function EditDietaryIcons({ tags, setTags }) {

  return (
    <div className="dietary-edit">

      <div className='edit-vegan-gluten'>
        <label className='revert'>
          <img
            src={glutenFreeIcon}
            alt="Gluten free"
            className="edit-icon-gluten-free"
          />
          <input type="checkbox" checked={tags.glutenFree}
            onChange={e => setTags({ ...tags, glutenFree: e.target.checked })} />
        </label>


        <label className='revert'>
          <img src={veganIcon} alt="Vegan" className="edit-icon-vegan" />

          <input type="checkbox" checked={tags.vegan}
            onChange={e => setTags({ ...tags, vegan: e.target.checked })} />
        </label>
      </div>

      <div className="spicy-options-and-span">
        <img src={spicyIcon} alt="Chili icon" className="edit-icon-spicy" />
        <div className="spicy-options">
          {[0, 1, 2, 3].map(level => (
            <label key={level} className='revert'>
              <input type="radio" name="spicy" value={level}
                checked={tags.spicy === level}
                onChange={() => setTags({ ...tags, spicy: level })} />
              <span>{level}</span>

            </label>
          ))}
        </div>
      </div>
    </div>
  )
}