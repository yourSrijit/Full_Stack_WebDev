let Joi=require("joi"); 
module.exports.listingJoiSchema=Joi.object({
  listing:Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required().min(1),
    image:Joi.string().allow("",null).optional(),
    location:Joi.string().required(),
    country:Joi.string().required()
  }).required()
});

module.exports.reviewJoiSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required()

  }).required()
});