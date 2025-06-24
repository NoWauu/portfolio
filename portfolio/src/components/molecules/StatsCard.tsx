import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

interface Stat {
  count: number;
  label: string;
}

export default function StatsCard({
  stats
}: Readonly<{
  stats: Stat[];
}>) {
  return (
    <div className="rounded-lg p-6 w-1/3 max-w-md">
      <div className="grid grid-cols-1 gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <StarBorder as="div" color="magenta" thickness={6} speed="4s">
                <GradientText 
                    colors={["#ff40aa", "#aa40ff", "#4079ff", "#40aaff", "#40ffaa", "#aa40ff", "#ff40aa"]}
                    animationSpeed={5}
                    showBorder={false}>
                    <CountUp 
                        from={0} 
                        to={stat.count} 
                        duration={2.5} 
                        className="text-4xl font-bold"
                    /><span className="text-4xl">+</span>
                </GradientText>
            </StarBorder>
            <span className="text-sm text-gray-600 text-center mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
