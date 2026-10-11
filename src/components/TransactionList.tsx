import type { Transaction } from '../types/transaction'
import TransactionItem from './TransactionItem'

type TransactionListProps = {
  transactions: Transaction[]
}

function TransactionList({ transactions }: TransactionListProps) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">
          No transactions yet.
        </p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TransactionList