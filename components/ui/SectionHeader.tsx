type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl ${
          isDark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            isDark ? 'text-white/68' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
