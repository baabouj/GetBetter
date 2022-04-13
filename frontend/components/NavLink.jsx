import Link from "next/link";

export default function NavLink({ to, name }) {
  return (
    <li className="mx-4 p-1 font-poppins font-medium text-gray-800 border-b-2 border-transparent  hover:border-b-2 hover:border-primary transition-all">
      <Link href={to}>{name}</Link>
    </li>
  );
}
