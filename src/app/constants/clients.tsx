
import { ProductsDetail } from "./products"

let elevatorIds = ProductsDetail.map((product) => product.id)

interface Clients {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    elevatorTypes: string[],
    clientLogo: string,


}