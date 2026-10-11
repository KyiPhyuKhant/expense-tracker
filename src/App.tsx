import BalanceCard from './components/BalanceCard'
import SummaryCard from './components/SummaryCard'

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

        <BalanceCard />

        <SummaryCard />

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Transaction History
          </h2>

          <p className="text-gray-500">
            No transactions yet.
          </p>
        </section>

      </div>
    </main>
  )
}

export default App