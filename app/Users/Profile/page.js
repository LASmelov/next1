import { PrismaClient } from "@prisma/client"
import Link from "next/link"


async function getUsers() {
    const client = new PrismaClient()


    const data = await client.users.findMany({
        where: {
            age: {
                lte: 18
            }
        },

        select: {
            name: true,
            email: true,
            id: true
        }
    })

    return data
}

export default async function UserPage() {
    const users = await getUsers()
    return (
        <ul className="flex flex-wrap gap-y-8 justify-between">
            {
                users.map((users) => (
                    <li key={users.id} className="border w-[25%] mx-2">
                        <Link className="p-5 block hover:bg-slate-500 transition-all hover:text-white hover:border-white"
                            href={`/users/${users.id}`}>
                            <p>{users.name}</p>
                            <p>{users.email}</p>
                        </Link>
                    </li>
                ))
            }
        </ul>

    )
}