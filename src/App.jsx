import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Companies from './pages/Companies'
import CompanyDetails from './pages/CompanyDetails'
import InvoiceDetails from './pages/InvoiceDetails'
import Settings from './pages/Settings'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:name" element={<CompanyDetails />} />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default App
