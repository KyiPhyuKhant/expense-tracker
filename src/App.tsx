import BalanceCard from './components/BalanceCard'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'
import { transactions } from './data/transactions'

function App() {
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
        <BalanceCard balance={75000} currency="¥" />

        {/* Summary */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SummaryCard
            title="Total Income"
            amount={100000}
            type="income"
          />

          <SummaryCard
            title="Total Expenses"
            amount={25000}
            type="expense"
          />
        </section>

        {/* Transaction History */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Transaction History
          </h2>

          <TransactionList transactions={transactions} />
        </section>

      </div>
    </main>
  )
}

export default App