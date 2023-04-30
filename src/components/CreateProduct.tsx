import React, {useState} from "react";
import {IProduct} from "../modules";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";


// @ts-ignore
const productNew : IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateModalProps {
    onCreate: (product : IProduct) => void
}
export function CreateProduct({ onCreate } : CreateModalProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        productNew.title = value
        productNew.image = 'https://i.pravatar.cc?' + performance.now()

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productNew)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setError('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type={"text"}
                className={"border py-2 px-4 mb-2 w-full focus-visible:outline-none"}
                placeholder={"Enter product title..."}
                value={value}
                onChange={changeHandler}
            />

            { error && <ErrorMessage error={error}/>}

            <button type={"submit"} className={"py-2 px-4 border bg-yellow-400 hover:text-pink-500"}>Create</button>
        </form>
    )
}