import {NextResponse, NextRequest} from "next/server"
import { retriveData, retriveDataById } from "../../../lib/firebase/service."

const data = [
    {
        id: 1,
        title: "Nike",
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/air-force-1-gtx-shoes-l3ck9t.png"
    },
    {
        id: 2,
        title: "Air jordan 1",
        price: 20000,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-shoes-SQf7DM.png"
    },
    {
        id: 3,
        title: "air jordan",
        price: 193000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07f289b9-7ca1-49ec-a347-b69b95e17032/air-jordan-1-low-se-shoes-H7DD5v.png"
    },
    {
        id: 4,
        title: "Air jordan 1",
        price: 20000,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-shoes-SQf7DM.png"
    },
    {
        id: 5,
        title: "air jordan",
        price: 193000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07f289b9-7ca1-49ec-a347-b69b95e17032/air-jordan-1-low-se-shoes-H7DD5v.png"
    },
    
]
export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if (id){
        const detaiProduct = await retriveDataById("products", id)
        if (detaiProduct){
            return NextResponse.json({status: 200 , message: "success", data: detaiProduct})
        }
        

        return NextResponse.json({status: 404 , message: "not found", data: {}})
    }
   
    const product = await retriveData("products")
    return NextResponse.json({status: 200 , message: "success", data:product})
}