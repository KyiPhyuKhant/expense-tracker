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

         <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">
            Total Balance
          </h2>

          <p className="mt-2 text-4xl font-bold text-gray-900">
            ¥50,000
          </p>
        </section>

       <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm text-gray-500">
              Total Income
            </h2>

            <p className="mt-2 text-2xl font-semibold text-green-600">
              +¥100,000
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm text-gray-500">
              Total Expenses
            </h2>

            <p className="mt-2 text-2xl font-semibold text-red-600">
              -¥50,000
            </p>
          </div>

        </section>

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