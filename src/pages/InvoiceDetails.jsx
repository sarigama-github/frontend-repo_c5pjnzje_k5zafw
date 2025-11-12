import { Link, useParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import HeaderWithSpline from "../components/HeaderWithSpline";

const demoInvoice = {
  number: 'INV-1010',
  company: 'Globex',
  billTo: 'Globex Corporation, 123 Market St, Springfield',
  issueDate: '2025-06-01',
  dueDate: '2025-06-15',
  items: [
    { name: 'Consulting hours', qty: 10, price: 80 },
    { name: 'Design work', qty: 6, price: 120 },
  ],
}

export default function InvoiceDetails() {
  const { id } = useParams()
  const invoice = { ...demoInvoice, number: id || demoInvoice.number }
  const total = invoice.items.reduce((sum, it) => sum + it.qty * it.price, 0)

  return (
    <div className="pb-28 max-w-md mx-auto">
      <HeaderWithSpline title={`Invoice ${invoice.number}`} subtitle={invoice.company} />

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-xs text-gray-500">Bill To</p>
          <p className="text-sm text-gray-800 mt-1">{invoice.billTo}</p>
          <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Issue Date</p>
              <p className="text-gray-800">{invoice.issueDate}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Due Date</p>
              <p className="text-gray-800">{invoice.dueDate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-2 border-b text-sm font-medium text-gray-700">Line Items</div>
          <div className="divide-y">
            {invoice.items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between px-4 py-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900">{it.name}</p>
                  <p className="text-xs text-gray-500">Qty {it.qty} x ${it.price}</p>
                </div>
                <div className="text-gray-700 font-semibold">${(it.qty * it.price).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-600 text-white rounded-xl p-4 shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm">Total Amount</p>
            <p className="text-2xl font-semibold">${total.toFixed(2)}</p>
          </div>
        </div>

        <button className="fixed bottom-20 left-4 right-4 inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full py-3 shadow-sm">
          <MessageCircle size={20} />
          <span>Send WhatsApp Reminder</span>
        </button>

        <Link to="/companies" className="block text-center text-sm text-gray-500">Back to Companies</Link>
      </div>
    </div>
  )
}
