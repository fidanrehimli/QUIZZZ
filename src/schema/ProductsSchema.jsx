import * as yup from "yup"

export const ProductSchema = yup.object().shape({
    image:yup.string().required("Please write"),
    price:yup.number().required("Please write"),
    category:yup.string().required("Please write")
})