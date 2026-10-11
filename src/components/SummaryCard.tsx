function SummaryCard() {
  return (
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
  )
}

export default SummaryCard