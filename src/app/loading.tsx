export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-gold-500/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-500 animate-spin" />
        </div>
        <p className="text-gold-500/40 text-xs tracking-[0.2em] uppercase">Yükleniyor</p>
      </div>
    </div>
  )
}
