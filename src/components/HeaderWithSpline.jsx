import Spline from '@splinetool/react-spline';

export default function HeaderWithSpline({ title, subtitle }) {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-b-2xl bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col items-start justify-end p-4">
        <h1 className="text-xl font-semibold text-teal-900">{title}</h1>
        {subtitle && <p className="text-sm text-teal-700/70">{subtitle}</p>}
      </div>
    </div>
  );
}
