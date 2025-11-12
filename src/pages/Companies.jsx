import { useState } from 'react'
import HeaderWithSpline from "../components/HeaderWithSpline";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";

const companies = [
  { name: 'Acme Corp', logo: '🅰️', total: 5400, status: 'Paid' },
  { name: 'Globex', logo: '🌐', total: 3200, status: 'Due' },
  { name: 'Initech', logo: '💾', total: 980, status: 'Overdue' },
  { name: 'Soylent', logo: '🧪', total: 1250, status: 'Upcoming' },
  { name: 'Umbrella', logo: '☂️', total: 740, status: 'Paid' },
]

function statusColor(s) {
  return s === 'Paid' ? 'text-emerald-600' : s === 'Due' ? 'text-amber-600' : s === 'Overdue' ? 'text-rose-600' : 'text-cyan-600'
}

export default function Companies() {
  const [tab, setTab] = useState('All')
  const [q, setQ] = useState('')

  const filtered = companies
    .filter(c => tab === 'All' || c.status === tab)
    .filter(c => c.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="pb-20 max-w-md mx-auto">
      <HeaderWithSpline title="Companies" subtitle="Manage your clients" />

      <div className="p-4 space-y-4">
        <Tabs tabs={["All","Paid","Due","Overdue","Upcoming"]} current={tab} onChange={setTab} />
        <SearchBar placeholder="Search companies" value={q} onChange={setQ} />

        <div className="space-y-3">
          {filtered.map((c) => (
            <a key={c.name} href={`/companies/${encodeURIComponent(c.name)}`} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-lg">{c.logo}</div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-500">Total: ${c.total.toLocaleString()}</p>
              </div>
              <div className={`text-sm font-medium ${statusColor(c.status)}`}>{c.status}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
