import {NextResponse, NextRequest} from "next/server"

const data = [
    {
        id: 1,
        name: "Product 1",
        price: 10000
    },
    {
        id: 2,
        name: "Product 2",
        price: 10000
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