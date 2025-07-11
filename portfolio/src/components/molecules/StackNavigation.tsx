interface StackNavigationProps {
  readonly cardStacks: Array<{
    name: string;
    icon: string;
    cards: Array<{
      title: string;
      period: string;
      description: string;
      tech: string;
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
    <div className="flex justify-center mb-8">
      <div className="flex space-x-2 bg-white/70 backdrop-blur-sm rounded-full p-2 border border-white/20">
        {cardStacks.map((stack, index) => (
          <button
            key={stack.name}
            onClick={() => onSelectStack(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
              currentStackIndex === index
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            <span className="text-lg">{stack.icon}</span>
            <span>{stack.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
