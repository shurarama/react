import React, {useState} from "react";

const productNew = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
export function CreateProduct() {
    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()


    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
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

            <button type={"submit"} className={"py-2 px-4 border bg-yellow-400 hover:text-pink-500"}>Create</button>
        </form>
    )
}