import Joi from "joi";

//david tycker att man kanske borde vara mer descreptiv. Lite mer anpassade, personlig och specifik :) @henrik
export const menuItemSchema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(30)
		.required()
		.trim()
		.messages({
			'any.required': 'Name is required',
			'string.empty': 'Name cannot be empty',
			'string.min': 'Name must be at least 3 characters',
			'string.max': 'Name must be at most 30 characters'
		}),

	description: Joi.string()
		.min(10)
		.max(200)
		.required()
		.messages({
			'any.required': 'Description is required',
			'string.empty': 'Description cannot be empty',
			'string.min': 'Description must be at least 10 characters',
			'string.max': 'Description must be at most 200 characters'
		}),

	price: Joi.number()
		.positive()
		.required()
		.messages({
			'any.required': 'Price is required',
			'number.positive': 'Price must be greater than 0',
			'number.base': 'Price must be a number'
		})
})

export const validateMenuItem = (draft) => {
	const { error } = menuItemSchema.validate(
		{
			name: draft.name,
			description: draft.description,
			price: draft.price
		},
		{ abortEarly: false }
	)
	if (!error) return {}
	return Object.fromEntries(error.details.map((d) => [d.path[0], d.message]))
}

export const checkDuplicateName = (draft, item, getMenuItemByName) => {
	const checkName = getMenuItemByName(draft.name)
	if (checkName && checkName.name === draft.name && draft.name !== item.name) {
		return 'A menu item with this name already exists'
	}
	return null
}