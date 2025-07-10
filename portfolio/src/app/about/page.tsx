
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">About Me</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-12">
        I am a passionate developer with a love for creating beautiful and functional web applications.
        My journey in tech has been driven by curiosity and a desire to solve real-world problems.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h2>
        <p className="text-gray-600 leading-relaxed">
          From my early days of coding in high school to building complex applications today, my journey has been filled with learning and growth.
          I enjoy collaborating with others and continuously improving my skills.
        </p>
      </div>

    </div>
  );
}