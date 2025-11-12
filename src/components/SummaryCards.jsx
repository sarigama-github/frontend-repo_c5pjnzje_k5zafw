import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function SummaryCard({ label, value, change, positive, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        <div className={`mt-2 inline-flex items-center text-xs rounded-full px-2 py-1 ${positive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
          {positive ? <ArrowUpRight size={14} className="mr-1"/> : <ArrowDownRight size={14} className="mr-1"/>}
          {change}
        </div>
      </div>
      <div className={`h-10 w-10 rounded-full ${color} bg-opacity-10 flex items-center justify-center border border-gray-100`}></div>
    </div>
  )
}

export default function SummaryCards() {
  const cards = [
    { label: 'Paid', value: '24', change: '+8%', positive: true, color: 'bg-emerald-500' },
    { label: 'Due', value: '12', change: '-3%', positive: false, color: 'bg-teal-500' },
    { label: 'Overdue', value: '5', change: '+2%', positive: false, color: 'bg-rose-500' },
    { label: 'Upcoming', value: '9', change: '+4%', positive: true, color: 'bg-cyan-500' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.map((c) => (
        <SummaryCard key={c.label} {...c} />
      ))}
    </div>
  )
}
