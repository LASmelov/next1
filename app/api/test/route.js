import { PrismaClient } from "@prisma/client"


export async function POST(request) {
    const client = new PrismaClient()
    const res = await client.products.create({
        data: {
            name: data.name,
            price: data.price,
            description: data.des
        }
    })
    return Response
}




