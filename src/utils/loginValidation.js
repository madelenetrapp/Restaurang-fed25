import Joi from 'joi'

export const loginSchema = Joi.object({
	username: Joi.string().valid('admin').insensitive().required(),
	password: Joi.string().valid('mums').required()
})