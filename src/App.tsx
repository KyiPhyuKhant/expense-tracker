import { useState } from 'react'

import BalanceCard from './components/BalanceCard'
import SummaryCard from './components/SummaryCard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

import { transactions as initialTransactions } from './data/transactions'
import type { Transaction } from './types/transaction'

function App() {
  // Store transactions in React state
  const [transactions, setTransactions] = useState<Transaction[]>(
    initialTransactions
  )

  // Add a new transaction
  function handleAddTransaction(newTransaction: Transaction) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ])
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
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

        {/* Income and Expense Summary */}
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

        {/* Add Transaction Form */}
        <TransactionForm onAddTransaction={handleAddTransaction} />

        {/* Transaction History */}
        <TransactionList transactions={transactions} />
      </div>
    </main>
  )
}

export default App