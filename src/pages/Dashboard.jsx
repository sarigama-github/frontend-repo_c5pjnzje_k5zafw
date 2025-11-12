import HeaderWithSpline from "../components/HeaderWithSpline";
import SummaryCards from "../components/SummaryCards";
import SimpleLineChart from "../components/SimpleLineChart";

export default function Dashboard() {
  const chartData = [
    { label: 'Jan', value: 1200 },
    { label: 'Feb', value: 1800 },
    { label: 'Mar', value: 1400 },
    { label: 'Apr', value: 2200 },
    { label: 'May', value: 2600 },
    { label: 'Jun', value: 2400 },
  ]

  return (
    <div className="pb-20 max-w-md mx-auto">
      <HeaderWithSpline title="Invoices Overview" subtitle="Your monthly performance" />

      <div className="p-4 space-y-4">
        <SummaryCards />
        <SimpleLineChart data={chartData} />
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-emerald-900 text-sm font-medium">You collected 85% of invoices this month.</p>
          <p className="text-emerald-700/70 text-xs mt-1">Great job! You're on track compared to last month.</p>
        </div>
      </div>
    </div>
  );
}
