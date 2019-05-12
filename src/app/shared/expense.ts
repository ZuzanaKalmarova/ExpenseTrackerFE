import { Category } from './category'

export class Expense {
    id: number;
    description: string;
    category: Category;
    amount: number;
    date: string;
}