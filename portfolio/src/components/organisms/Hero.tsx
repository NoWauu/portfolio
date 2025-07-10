import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

export default function Hero({rotatingTexts} : Readonly<{rotatingTexts: string[]}>) {
  return (
    <div className="flex-1 mr-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, I&apos;m Téo</h1>
      <p className="text-lg text-gray-700 mb-6">Je suis un développeur passionné avec un maour pour créer des solutions innovantes et contribuer à différents projets</p>
      Je suis <RotatingText texts={rotatingTexts} mainClassName="text-xl text-black" />
      </div>
  );
}
