import Link from "next/link";

const Header = () => {
  return (
    <header className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline flex items-center">
        <img src="/assets/blog/logo.png"  alt="Logo" className="h-8 mr-2" />
      </Link>
    </header>
  );
};

export default Header;
