import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

export default function Hero({rotatingTexts} : Readonly<{rotatingTexts: string[]}>) {
  return (
    <div className="flex-1 mr-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, I'm Téo</h1>
      <p className="text-lg text-gray-700 mb-6">I'm a passionate developer with a love for creating innovative solutions and contributing to open source projects.</p>
      I'm a <RotatingText texts={rotatingTexts} className="text-xl text-black" />
      </div>
  );
}
