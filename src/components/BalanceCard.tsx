type BalanceCardProps = {
  balance: number
  currency?: string
}

function BalanceCard({ balance, currency = '¥' }: BalanceCardProps) {
  return (
    <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">
        Total Balance
      </h2>

      <p className="mt-2 text-4xl font-bold text-gray-900">
        {currency}{balance.toLocaleString()}
      </p>
    </section>
  )
}

export default BalanceCard