import type { Transaction } from '../types/transaction'

export const transactions: Transaction[] = [
  {
    id: 1,
    title: 'Salary',
    amount: 200000,
    category: 'Income',
    date: '2026-10-01',
  },
  {
    id: 2,
    title: 'Groceries',
    amount: -15000,
    category: 'Food',
    date: '2026-10-03',
  },
  {
    id: 3,
    title: 'Transport',
    amount: -5000,
    category: 'Transport',
    date: '2026-10-05',
  },
  {
    id: 4,
    title: 'Freelance Work',
    amount: 30000,
    category: 'Income',
    date: '2026-10-08',
  },
  {
    id: 5,
    title: 'Shopping',
    amount: -10000,
    category: 'Shopping',
    date: '2026-10-10',
  },
]