import {z} from "zod";
const schema=z.object({
  
    email:z.email()
})
export default schema;