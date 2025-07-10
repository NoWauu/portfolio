import Link from "next/link";


export default function Navbar() {
    return (
        <div className="bg-gray-100">
            <div className="w-4/5 mx-auto flex items-center justify-between p-4 text-black border border-black rounded-b-xl">
                <Link href="/" className="text-xl font-semibold hover:underline">Téo Lemesle</Link>
                <div className="space-x-4">
                    <Link href="/about" className="hover:underline">About me</Link>
                    <Link href="/career" className="hover:underline">Career</Link>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </div>
    );
}