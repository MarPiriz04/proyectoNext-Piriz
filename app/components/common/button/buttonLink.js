import Link from "next/link";

export default function ButtonLink({ href, children }) {
    return (
        <Link
            href={href}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-2 px-6 rounded shadow-lg transition duration-200"
            aria-label={`Navegar a ${href}`}
        >
            {children}
        </Link>
    );
}
