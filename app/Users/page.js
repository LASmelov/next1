
import getUsers from '@/libs/getUsers';
import Link from 'next/link';


// export const metadata = {
//     title: {
//         absolute: 'citek users1',
//     }
// }

// async function getData() {

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

//     return await response.json()


// }

// export default async function Page() {

//     const data = await getData()

//     return (
//         <div>{data.body}</div>

//     )
// }


export default async function UsersPage() {
    const users = await getUsers()
    return (
        <ul className='flex flex-wrap gap-y justify-between'>
            {


                users.map((user) => (
                    <li key={user.id} className='border w-[24%] mx-2 p-0'>
                        <Link href={`/Users/${user.id}`} className='p-5 block hover:bg-green-500 transition-all hover:text-white hover:border-black border-solid border-2'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </Link>
                    </li>
                ))



            }
        </ul>

    )
}

