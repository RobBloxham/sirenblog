import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import logo from "../../public/SirenLogo.png";

export default function Navbar() {
    return (
    <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-8 py-5">
        <Link
        href={'/'}
        className="font-bold text-3xl">
        <Image src={logo} height={250} width={250} alt="Siren Logo"/>
        </Link>
        <span className="px-4"></span>
        <Link
        href={'/'}
        className="font-bold text-3xl">
        Team Siren<span className="text-pink-400"> Blog & Diss Home</span>
        </Link>
        <span className="px-4"></span>
        <ModeToggle />
    </nav>
    )
}