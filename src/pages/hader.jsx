import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="headre p-3 font-semibold bg-orange-400">
                {/* <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link> */}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    
                    {/* <Link to="/" className="mr-5 hover:text-gray-900">Home</Link> */}
                    <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="/signup" className="mr-5 hover:text-gray-900">Sign Up</Link>
                    <Link to="/signin" className="mr-5 hover:text-gray-900">Sign In</Link>
                </nav>

                {/* SEARCH BAR */}
                {/* <input
                        type="text"
                        // value={searchQuery}
                        // onChange={handleSearchChange}
                        placeholder="Search..."
                        className="bg-gray-100 border border-gray-300 rounded-full py-1 px-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                     */}

                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Button
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button> */}
            </div>
        </header>
    );
}

export default Header;
