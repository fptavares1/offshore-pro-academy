export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-16 rounded-xl bg-white text-navy shadow-premium">
        <div className="absolute inset-0 flex items-center justify-center text-xl font-black tracking-tighter">OPA</div>
        <div className="absolute bottom-2 right-3 h-1.5 w-5 skew-x-[-20deg] bg-gold" />
      </div>
      <div className="leading-none">
        <div className="text-sm font-black uppercase tracking-[0.18em] text-white">Offshore Pro</div>
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Academy</div>
      </div>
    </div>
  )
}
