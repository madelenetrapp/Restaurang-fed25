import Joi from "joi";

export const menuItemSchema = Joi.object({

	//david tycker att man kanske borde vara mer descreptiv. Lite mer anpassade, personlig och specifik :)

	// "please give the course a name" istället för name is required
	name: Joi.string()
		.min(3)
		.max(30)
		.required()
		.messages({
			'any.required': 'Name is required',
			'string.empty': 'Name cannot be empty',
			'string.min': 'Name must be at least 3 characters',
			'string.max': 'Name must be at most 30 characters'
		}),


	//"write a description about ingredients of the course"
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
			'number.positive': 'Price must be greater than 0'
		})
})