interface StackNavigationProps {
  readonly cardStacks: Array<{
    name: string;
    icon: string;
    cards: Array<{
      title: string;
      period: string;
      description: string;
      tech: string[];
      icon: string;
      color: string;
      details: string;
    }>;
  }>;
  readonly currentStackIndex: number;
  readonly onSelectStack: (index: number) => void;
}

export default function StackNavigation({
  cardStacks,
  currentStackIndex,
  onSelectStack
}: StackNavigationProps) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center',
      position: 'relative',
      zIndex: 9999,
      isolation: 'isolate',
      height: 'auto',
      maxHeight: '60px'
    }}>
      <div style={{
        display: 'flex',
        gap: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(4px)',
        borderRadius: '9999px',
        padding: '8px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        height: 'auto',
        maxHeight: '50px',
        alignItems: 'center'
      }}>
        {cardStacks.map((stack, index) => (
          <button
            key={stack.name}
            type="button"
            onClick={() => onSelectStack(index)}
            style={{
              all: 'initial',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 24px',
              border: 'none',
              borderRadius: '9999px',
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.2',
              color: currentStackIndex === index ? 'white' : '#4b5563',
              background: currentStackIndex === index 
                ? 'linear-gradient(to right, #3b82f6, #9333ea)' 
                : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none',
              height: 'auto',
              maxHeight: '40px'
            }}
            onMouseEnter={(e) => {
              if (currentStackIndex !== index) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentStackIndex !== index) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '18px', lineHeight: '1' }}>
              {stack.icon}
            </span>
            <span style={{ fontSize: '14px', lineHeight: '1' }}>
              {stack.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
