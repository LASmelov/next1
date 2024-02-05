export default async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: "no-store",
        // тема для динамической генерации страницы(чуть дольше загружается)
    })
    return response.json()
}


// ssg | ssr | csr | isr |