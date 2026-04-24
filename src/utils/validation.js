import Joi from "joi";

//Checks if the name of the menu item already exists, if it does, returns an error message, otherwise returns null
export const checkDuplicateName = (draft, item, getMenuItemByName) => {
	const checkName = getMenuItemByName(draft.name)
	if (checkName && checkName.name === draft.name && draft.name !== item.name) {
		return 'A menu item with this name already exists'
	}
	return null
}
//Validates name, description and price of a menu item, returns an object with error messages for each field if there are any, otherwise returns an empty object
export const validateMenuItem = (draft) => {
	const itemType = draft.type === 'Beer & Cider'? 'drink' : 'dish'

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
		.required()
		.messages({
			'any.required': 'Please enter a price',
			'number.positive': 'The price must be greater than 0 SEK',
			'number.base': `Please enter a price for the ${itemType} - please enter digits only`
		})
	})

	const { error } = menuItemSchema.validate(
		{name: draft.name, description: draft.description, price: draft.price},
		{abortEarly: false}
	)
	if (!error) return{}
	return Object.fromEntries(error.details.map(detail => [detail.path[0], detail.message]))
}