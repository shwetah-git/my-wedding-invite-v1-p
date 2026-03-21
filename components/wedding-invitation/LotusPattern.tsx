'use client'

export function LotusPattern({  
  size = 'md', 
  color = 'primary',
  className = ''
}: { 
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}) {
  const sizeMap = {
    sm: 24,
    md: 40,
    lg: 60,
  }

  const dimension = sizeMap[size]

  const colorClass = {
    primary: '#d4a5a0',
    accent: '#e8c5b8',
    secondary: '#c4d9a0',
  }[color] || '#d4a5a0'

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer petals */}
      <ellipse cx="50" cy="20" rx="12" ry="18" fill={colorClass} opacity="0.8" />
      <ellipse cx="80" cy="30" rx="12" ry="18" fill={colorClass} opacity="0.8" transform="rotate(60 80 30)" />
      <ellipse cx="80" cy="70" rx="12" ry="18" fill={colorClass} opacity="0.8" transform="rotate(120 80 70)" />
      <ellipse cx="50" cy="80" rx="12" ry="18" fill={colorClass} opacity="0.8" transform="rotate(180 50 80)" />
      <ellipse cx="20" cy="70" rx="12" ry="18" fill={colorClass} opacity="0.8" transform="rotate(240 20 70)" />
      <ellipse cx="20" cy="30" rx="12" ry="18" fill={colorClass} opacity="0.8" transform="rotate(300 20 30)" />

      {/* Inner petals */}
      <ellipse cx="50" cy="35" rx="10" ry="15" fill={colorClass} opacity="0.9" />
      <ellipse cx="70" cy="50" rx="10" ry="15" fill={colorClass} opacity="0.9" transform="rotate(60 70 50)" />
      <ellipse cx="70" cy="50" rx="10" ry="15" fill={colorClass} opacity="0.9" transform="rotate(120 70 50)" />
      <ellipse cx="50" cy="65" rx="10" ry="15" fill={colorClass} opacity="0.9" transform="rotate(180 50 65)" />
      <ellipse cx="30" cy="50" rx="10" ry="15" fill={colorClass} opacity="0.9" transform="rotate(240 30 50)" />
      <ellipse cx="30" cy="50" rx="10" ry="15" fill={colorClass} opacity="0.9" transform="rotate(300 30 50)" />

      {/* Center circle */}
      <circle cx="50" cy="50" r="8" fill={colorClass} opacity="1" />
    </svg>
  )
}

export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
      <LotusPattern size="sm" color="primary" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  )
}
