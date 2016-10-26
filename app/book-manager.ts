import { Book } from './book';
import {CATEGORIES} from "./category-manager";

export const BOOKS: Book[] = [
    {id: 1, name: 'Do latarni morskiej', numOfPages: 569, price: 12, author: 'Virginia Woolf', numOfRates: 12, category: CATEGORIES[0]},
    {id: 2, name: 'Duma i uprzedzenie', numOfPages: 783, price: 10, author: ' Jane Austen', numOfRates: 17, category: CATEGORIES[1]},
    {id: 3, name: 'Pani Dalloway', numOfPages: 489, price: 8, author: 'Virginia Woolf', numOfRates: 7, category: CATEGORIES[1]},
    {id: 4, name: 'Wybór opowiadań', numOfPages: 525, price: 16, author: 'Antoni Czechow', numOfRates: 23, category: CATEGORIES[0]},
    {id: 5, name: 'Czas odnaleziony', numOfPages: 698, price: 23, author: 'Marcel Proust', numOfRates: 11, category: CATEGORIES[0]}
];