

export default function Navbar() {
    return (
        <div className="bg-gray-100">
            <div className="w-4/5 mx-auto flex items-center justify-between p-4 text-black border border-black rounded-b-xl">
                <a href="/" className="text-lg font-semibold hover:underline">Téo Lemesle</a>
                <div className="space-x-4">
                    <a href="/about" className="hover:underline">About me</a>
                    <a href="/career" className="hover:underline">Career</a>
                    <a href="/projects" className="hover:underline">Projects</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </div>
    );
}