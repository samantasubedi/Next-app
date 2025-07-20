import {z} from "zod"
const schemaproduct= z.object({
    productname:z.string(),
    price:z.number()
})
export default schemaproduct