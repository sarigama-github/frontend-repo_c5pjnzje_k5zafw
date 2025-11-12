import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import HeaderWithSpline from "../components/HeaderWithSpline";
import Tabs from "../components/Tabs";
import { Plus } from 'lucide-react'

const invoices = {
  Paid: [
    { id: 'INV-1001', date: '2025-05-01', amount: 1200 },
    { id: 'INV-1005', date: '2025-05-18', amount: 980 },
  ],
  Due: [
    { id: 'INV-1010', date: '2025-06-15', amount: 640 },
  ],
  Overdue: [
    { id: 'INV-1007', date: '2025-05-28', amount: 300 },
  ],
}

const history = [
  { id: 'INV-0950', date: '2025-04-03', amount: 500 },
  { id: 'INV-0941', date: '2025-03-12', amount: 760 },
]

export default function CompanyDetails() {
  const { name } = useParams()
  const [tab, setTab] = useState('Invoices Status')

  return (
    <div className="pb-24 max-w-md mx-auto">
      <HeaderWithSpline title={name} subtitle="Client details" />

      <div className="p-4 space-y-4">
        <Tabs tabs={["Invoices Status","Invoice History"]} current={tab} onChange={setTab} />

        {tab === 'Invoices Status' ? (
          <div className="space-y-3">
            {Object.entries(invoices).map(([status, list]) => (
              <div key={status} className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="px-4 py-2 border-b text-sm font-medium text-gray-700">{status}</div>
                <div className="divide-y">
                  {list.map((inv) => (
                    <Link key={inv.id} to={`/invoice/${inv.id}`} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900">{inv.id}</p>
                        <p className="text-xs text-gray-500">{inv.date}</p>
                      </div>
                      <div className="text-teal-700 font-semibold">${inv.amount}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
            {history.map(h => (
              <div key={h.id} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">{h.id}</p>
                  <p className="text-xs text-gray-500">{h.date}</p>
                </div>
                <div className="text-gray-700 font-semibold">${h.amount}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link to="/invoice/new" className="fixed bottom-20 right-4 inline-flex items-center justify-center h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-600/30">
        <Plus size={28} />
      </Link>
    </div>
  )
}
