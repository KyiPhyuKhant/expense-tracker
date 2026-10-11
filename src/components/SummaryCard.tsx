type SummaryCardProps = {
  title: string
  amount: number
  type: 'income' | 'expense'
}

function SummaryCard({ title, amount, type }: SummaryCardProps) {
    const isIncome = type === 'income'
    return (
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm text-gray-500">
            {title}
            </h2>

            <p 
                className={`mt-2 text-2xl font-semibold ${
                    isIncome ? 'text-green-600' : 'text-red-600'
                }`}
            >
            {isIncome ? '+' : '-'}¥{amount.toLocaleString()}
            </p>
        </div>

        </section>
    )
}

export default SummaryCard