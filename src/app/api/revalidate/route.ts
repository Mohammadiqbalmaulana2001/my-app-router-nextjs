import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')
    const secrete = request.nextUrl.searchParams.get('secrete')

    if (secrete === process.env.REVALIDATE_TOKEN) {
        return NextResponse.json({status: 401 , message: "invalid secret key" })
    }

    if(!tag) {
        return NextResponse.json({status: 400 , message: "missing tags params"})
    }

    revalidateTag(tag)


    return NextResponse.json({revalidate: true, now:Date.now()})

}