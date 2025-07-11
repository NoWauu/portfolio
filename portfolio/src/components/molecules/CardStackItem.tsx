interface CardStackItemProps {
  readonly card: {
    title: string;
    period: string;
    description: string;
    tech: string[];
    icon: string;
    color: string;
    details: string;
  };
  readonly index: number;
  readonly currentCardIndex: number;
  readonly isSwipping: boolean;
  readonly swipeDirection: 'left' | 'right' | null;
  readonly onCardClick: (index: number) => void;
}

export default function CardStackItem({
  card,
  index,
  currentCardIndex,
  isSwipping,
  swipeDirection,
  onCardClick
}: CardStackItemProps) {
  const isActive = index === currentCardIndex;
  const isNext = index === (currentCardIndex + 1) % 4; // Assuming 4 cards per stack
  const isPrev = index === (currentCardIndex - 1 + 4) % 4;
  
  let zIndex, transform;
  
  // Animation de swipe
  let swipeTransform = '';
  if (isSwipping && isActive) {
    swipeTransform = swipeDirection === 'left' 
      ? 'translateX(-20px) rotateZ(-5deg)' 
      : 'translateX(20px) rotateZ(5deg)';
  }
  
  if (isActive) {
    zIndex = 50;
    transform = `translateY(0px) rotateY(0deg) rotateX(0deg) scale(1) ${swipeTransform}`;
  } else if (isNext) {
    zIndex = 40;
    transform = 'translateY(8px) translateX(4px) rotateY(-2deg) rotateZ(1deg) scale(0.98)';
  } else if (isPrev) {
    zIndex = 40;
    transform = 'translateY(8px) translateX(-4px) rotateY(2deg) rotateZ(-1deg) scale(0.98)';
  } else {
    const offset = index - currentCardIndex;
    const absOffset = Math.abs(offset);
    zIndex = 30 - absOffset;
    transform = `translateY(${12 + absOffset * 4}px) translateX(${offset > 0 ? 8 : -8}px) rotateY(${offset > 0 ? -3 : 3}deg) rotateZ(${offset > 0 ? 2 : -2}deg) scale(${0.96 - absOffset * 0.02})`;
  }

  return (
    <button
      className={`absolute inset-0 bg-white rounded-2xl shadow-2xl transition-all ease-out cursor-pointer select-none group ${
        isActive ? 'hover:shadow-3xl hover:animate-swipe-hint' : ''
      } ${isSwipping ? 'duration-150' : 'duration-500'}`}
      style={{
        zIndex,
        transform,
        opacity: 1,
        backgroundColor: '#ffffff',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        filter: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        boxShadow: isActive 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 0 2px rgba(0, 0, 0, 1)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.15), inset 0 0 0 2px rgba(0, 0, 0, 1)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}
      aria-label={`Card ${index + 1}: ${card.title}`}
      onClick={() => !isSwipping && onCardClick(index)}
    >
      {/* Card Shadow - solid for no transparency */}
      <div 
        className="absolute inset-0 bg-gray-200 rounded-2xl transform translate-y-1 translate-x-1 -z-10"
        style={{ opacity: 1, backgroundColor: '#e5e7eb' }}
      />
      
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-r ${card.color} flex items-center justify-center rounded-t-2xl relative overflow-hidden`}>
        {/* Removed shine effect for better opacity */}
        <span className="text-4xl drop-shadow-lg relative z-10">{card.icon}</span>
      </div>
      
      {/* Content */}
      <div className="p-6 relative" style={{ backgroundColor: '#ffffff', opacity: 1 }}>
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
          {card.period}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {card.description}
        </p>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {card.tech.map((techItem) => (
              <div
                key={techItem}
                className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm border"
              >
                {techItem}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 italic leading-relaxed">
            {card.details}
          </p>
        </div>
        
        {/* Card corner decoration - removed for better opacity */}
      </div>
    </button>
  );
}
