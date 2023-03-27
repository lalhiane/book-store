import { makeVar, useReactiveVar } from "@apollo/client";

import axios from "axios";

export interface Book {

    id?: number,

    key?: number,

    title: string,

    rating: number | null,

    author: string,

    price: number | null

}

const books = makeVar<Book[]>([]);

const setBooks = async (url: string) => {
    
    axios.get(url)
        
        .then(response => books(response.data));

}

export const useBooks = (): [Book[], (url: string) => void] => {

    return [useReactiveVar(books), setBooks];

}