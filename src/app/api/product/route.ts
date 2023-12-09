import {NextResponse, NextRequest} from "next/server"

const data = [
    {
        id: 1,
        title: "Sepstu baru",
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/air-force-1-gtx-shoes-l3ck9t.png"
    },
    {
        id: 2,
        title: "Sepatu lama",
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1bb96f3b-ea2b-422c-ab0d-49f06c3c54ef/air-force-1-gtx-shoes-l3ck9t.png"
    }
]
export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if (id){
        const detaiProduct = data.find((item) => item.id === Number(id))
        if (detaiProduct){
            return NextResponse.json({status: 200 , message: "success", data: detaiProduct})
        }
        

        return NextResponse.json({status: 404 , message: "not found", data: {}})
    }
   
    return NextResponse.json({status: 200 , message: "success", data})
}