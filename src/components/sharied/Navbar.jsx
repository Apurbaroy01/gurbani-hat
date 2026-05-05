import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold text-2xl">Qurbani<span className="text-primary"> Hat</span></h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#">Home</Link>
                        <Link href="#">Browse Animals</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#">Login</Link>
                        <Link href="#" className="btn btn-primary">Get Started</Link>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;