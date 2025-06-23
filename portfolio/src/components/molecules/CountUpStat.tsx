import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";

export default function CountUpStat({
    count,
    label,
    }: Readonly<{
    count: number;
    label: string;
    }>) {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-40 h-24">
            <CountUp from={0} to={count} duration={2.5} className="text-3xl font-bold text-gray-900"/>
            <span className="text-sm text-gray-600 text-center">{label}</span>
        </div>
    );
    }