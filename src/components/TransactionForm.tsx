import {
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from 'react'

import type { Transaction } from '../types/transaction'

// Form data type
type FormData = {
  title: string
  type: 'income' | 'expense'
  amount: string
  category: string
  date: string
}

// Component props type
type TransactionFormProps = {
  onAddTransaction: (transaction: Transaction) => void
}

function TransactionForm({
  onAddTransaction,
}: TransactionFormProps) {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    title: '',
    type: 'expense',
    amount: '',
    category: 'Food',
    date: new Date().toLocaleDateString('en-CA'),
  })

  // Handle input changes
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const amount = Number(formData.amount)

    // Validate description
    if (!formData.title.trim()) {
      alert('Please enter a description.')
      return
    }

    // Validate amount
    if (
      !formData.amount.trim() ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      alert('Please enter a valid amount greater than 0.')
      return
    }

    // Validate date
    if (!formData.date) {
      alert('Please select a date.')
      return
    }

    // Create new transaction
    const newTransaction: Transaction = {
      id: Date.now(),
      title: formData.title.trim(),
      amount: formData.type === 'expense' ? -amount : amount,
      category: formData.category,
      date: formData.date,
    }

    // Send transaction to parent component
    onAddTransaction(newTransaction)

    // Reset form
    setFormData({
      title: '',
      type: 'expense',
      amount: '',
      category: 'Food',
      date: new Date().toLocaleDateString('en-CA'),
    })
  }

  return (
    <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description */}
        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Description
          </label>

          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Groceries"
            value={formData.title}
            onChange={handleChange}
            required
            maxLength={50}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        {/* Transaction Type */}
        <div>
          <label
            htmlFor="type"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Type
          </label>

          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amount"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Amount
          </label>

          <input
            id="amount"
            name="amount"
            type="number"
            min="1"
            max="1000000"
            step="any"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Income">Income</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Add Transaction
        </button>
      </form>
    </section>
  )
}

export default TransactionForm