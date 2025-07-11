import CardStackItem from '../molecules/CardStackItem';

interface Card {
  title: string;
  period: string;
  description: string;
  tech: string[];
  icon: string;
  color: string;
  details: string;
}

interface CardStackProps {
  readonly cards: Card[];
  readonly currentCardIndex: number;
  readonly setCurrentCardIndex: (index: number) => void;
  readonly currentStackIndex: number;
  readonly isSwipping: boolean;
  readonly swipeDirection: 'left' | 'right' | null;
  readonly onNextCard: () => void;
  readonly onPrevCard: () => void;
}

export default function CardStack({
  cards,
  currentCardIndex,
  setCurrentCardIndex,
  currentStackIndex,
  isSwipping,
  swipeDirection,
  onNextCard,
  onPrevCard
}: CardStackProps) {
  return (
    <div className="relative max-w-2xl mx-auto select-none">
      <div className="relative h-[320px] flex flex-col items-center justify-center">
        {/* Card Stack with realistic layering */}
        <div className="relative w-full max-w-md flex-1 flex items-center justify-center">
          {cards.map((card, index) => (
            <CardStackItem
              key={`${currentStackIndex}-${index}`}
              card={card}
              index={index}
              currentCardIndex={currentCardIndex}
              isSwipping={isSwipping}
              swipeDirection={swipeDirection}
              onCardClick={setCurrentCardIndex}
            />
          ))}
        </div>

        {/* Enhanced Card Indicators - moved inside container */}
        <div className="flex justify-center space-x-3 mt-4">
          {cards.map((_, index) => (
            <button
              key={`indicator-${currentStackIndex}-${index}`}
              onClick={() => setCurrentCardIndex(index)}
              className={`relative transition-all duration-300 ${
                index === currentCardIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg'
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full'
              }`}
            >
              {index === currentCardIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Swipe Gesture Area */}
        <button 
          aria-label="Swipe to navigate cards"
          className="absolute inset-0 z-60 cursor-grab active:cursor-grabbing select-none hover:bg-gradient-to-r hover:from-transparent hover:via-blue-50/20 hover:to-transparent transition-all duration-300 group bg-transparent border-none p-0"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
          onMouseDown={(e) => {
            if (isSwipping) return;
            e.preventDefault();
            const startX = e.clientX;
          
          const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            if (Math.abs(deltaX) > 100 && !isSwipping) {
              if (deltaX > 0) {
                onPrevCard();
              } else {
                onNextCard();
              }
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            }
          };
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
        onTouchStart={(e) => {
          if (isSwipping) return;
          const startX = e.touches[0].clientX;
          
          const handleTouchMove = (e: TouchEvent) => {
            const deltaX = e.touches[0].clientX - startX;
            if (Math.abs(deltaX) > 100 && !isSwipping) {
              if (deltaX > 0) {
                onPrevCard();
              } else {
                onNextCard();
              }
              document.removeEventListener('touchmove', handleTouchMove);
              document.removeEventListener('touchend', handleTouchEnd);
            }
          };
          
          const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
          };
          
          document.addEventListener('touchmove', handleTouchMove);
          document.addEventListener('touchend', handleTouchEnd);
        }}
      >
        {/* Side swipe indicators */}
        <div className="absolute left-4 opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:-translate-x-1 pointer-events-none" style={{ top: '65%', zIndex: 70, transform: 'translateY(-50%)' }}>
          <div className="flex items-center space-x-1 animate-bounce">
            <span className="text-2xl">←</span>
            <span className="text-sm font-medium text-gray-700">swipe</span>
          </div>
        </div>
        <div className="absolute right-4 opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:translate-x-1 pointer-events-none" style={{ top: '65%', zIndex: 70, transform: 'translateY(-50%)' }}>
          <div className="flex items-center space-x-1 animate-bounce">
            <span className="text-sm font-medium text-gray-700">swipe</span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </button>
      </div>
    </div>
  );
}
