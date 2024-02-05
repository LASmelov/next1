'use client'

import { useState } from "react"

async function handleSubmit


export default function ProductList({ products }) {
    const [Products, setProducts] = useState(products)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input value={name} type="text" placeholder="name" />
                <input value={price} type="text" placeholder="price" />
                <input value={description} type="text" placeholder="description" />
            </form>
            <table>
                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Описание</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        Products.map((product) => {
                            <tr>
                                <th>{product.id}</th>
                                <th>{product.name}</th>
                                <th>{product.price}</th>
                                <th>{product.desctiption}</th>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div>

    )
}
