import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              MyWeb
            </h1>
          </Link>

          <nav className="flex-1 ml-10">
            <ul className="flex space-x-6 justify-end">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-blue-100 font-medium px-3 py-2 rounded-md hover:bg-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/table"
                  className="text-white hover:text-blue-100 font-medium px-3 py-2 rounded-md hover:bg-blue-400 transition-colors"
                >
                  Table
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};