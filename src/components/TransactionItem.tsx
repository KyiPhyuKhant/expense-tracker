import type { Transaction } from '../types/transaction'

type TransactionItemProps = {
  transaction: Transaction
}

function TransactionItem({ transaction }: TransactionItemProps) {
  const isIncome = transaction.amount > 0

  return (
    <li className="flex items-center justify-between border-b border-gray-100 py-4 last:border-b-0">
      <div>
        <h3 className="font-medium text-gray-900">
          {transaction.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {transaction.category} • {transaction.date}
        </p>
      </div>

      <p
        className={`font-semibold ${
          isIncome ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {isIncome ? '+' : '-'}¥{Math.abs(transaction.amount).toLocaleString()}
      </p>
    </li>
  )
}

export default TransactionItem