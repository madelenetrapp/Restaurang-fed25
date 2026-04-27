import Joi from "joi";

//Checks if the name of the menu item already exists, if it does, returns an error message, otherwise returns null
export const checkDuplicateName = (draft, item, getMenuItemByName) => {
	const checkName = getMenuItemByName(draft.name)
	if (checkName && checkName.name === draft.name && draft.name !== item.name) {
		return 'A menu item with this name already exists'
	}
	return null
}
//Checks if the type of the menu item already exists, if it does, returns an error message, otherwise returns null
export const checkDuplicateType = (draft, getMenuItemByType) => {
	const validateTypeSchema = Joi.object({
		type: Joi.string()
			.min(2)
			.max(34)
			.trim()
			.messages({
				'string.empty': 'The type is too short - please enter more than one letter',
				'string.min': 'The type is too short - please enter more than one letter',
				'string.max': 'The type is too long - maximum 34 characters are allowed'
			})
	})

	// Validate first
	const { error } = validateTypeSchema.validate(
		{ type: draft.type }, // 👈 fixed key
		{ abortEarly: false }
	)
	if (error) {
		return Object.fromEntries(error.details.map(d => [d.path[0], d.message]))
	}

	// Then check duplicate
	if (getMenuItemByType(draft.type)) {
		return { type: 'A menu item with this type already exists' } // 👈 consistent object + correct wording
	}

	return {}
}
//Validates name, description and price of a menu item, returns an object with error messages for each field if there are any, otherwise returns an empty object
export const validateMenuItem = (draft) => {
	const itemType = draft.type === 'Beer & Cider' ? 'drink' : 'dish'

	const menuItemSchema = Joi.object({
		name: Joi.string()
			.min(3)
			.max(40)
			.required()
			.trim()
			.messages({
				'string.empty': `The ${itemType} name cannot be empty - please enter a name for the ${itemType}`,
				'string.min': `The ${itemType} name is too short - at least 3 characters are required`,
				'string.max': `The ${itemType} name is too long - at most 40 characters are allowed`
			}),

		description: Joi.string()
			.min(10)
			.max(200)
			.required()
			.messages({
				'string.empty': `The ${itemType} description cannot be empty - please enter a description for the ${itemType}`,
				'string.min': `The ${itemType} description is too short - please write at least 10 characters`,
				'string.max': `The ${itemType} description is too long - maximum 200 characters are allowed`
			}),

		price: Joi.number()
			.positive()
			.integer()
			.required()
			.messages({
				'any.required': 'Please enter a price',
				'number.positive': 'The price must be greater than 0 SEK',
				'number.base': `Please enter a price for the ${itemType} - please enter whole digits only`,
				'number.integer': 'Unfortunately only whole numbers are allowed'
			})
	})

	const { error } = menuItemSchema.validate(
		{ name: draft.name, description: draft.description, price: draft.price },
		{ abortEarly: false }
	)
	if (!error) return {}
	return Object.fromEntries(error.details.map(detail => [detail.path[0], detail.message]))
}