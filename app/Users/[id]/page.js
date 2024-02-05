// import UserName from "@/components/UserName"
import getUsersById from "@/libs/getUserById"

export default async function UsersPage({ params: { id } }) {
    const user = await getUsersById(id)
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap border w-[12%] justify-center">
                <ul>
                    {/* <UserName username={user.name} /> */}
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </ul>
            </div>

        </div>
    )

}                                                           