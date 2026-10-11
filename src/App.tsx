import { useState } from 'react'

import BalanceCard from './components/BalanceCard'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'

import { transactions as initialTransactions } from './data/transactions'
import type { Transaction } from './types/transaction'

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(
    initialTransactions
  )

  function addTestTransaction() {
    const newTransaction: Transaction = {
      id: Date.now(),
      title: 'Dinner',
      amount: -2500,
      category: 'Food',
      date: '2026-10-11',
    }
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions])
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            Expense Tracker
          </h1>

          <p className="mt-2 text-gray-500">
            Track your money, control your future.
          </p>
        </header>
        {/* Balance */}
        <BalanceCard balance={150000} currency="¥" />

        {/* Summary */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SummaryCard
            title="Total Income"
            amount={200000}
            type="income"
          />

          <SummaryCard
            title="Total Expenses"
            amount={50000}
            type="expense"
          />
        </section>

        <button
          onClick={addTestTransaction}
          className="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Test Transaction
        </button>
        <TransactionList transactions={transactions} />

      </div>
    </main>
  )
}

export default App