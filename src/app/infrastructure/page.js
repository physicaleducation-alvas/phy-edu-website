import Link from "next/link";

export default function InfrastructurePage() {
  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl font-bold">Infrastructure</h1>
      <p className="text-gray-700 mt-2 max-w-3xl">
        Explore the infrastructure facilities available on our campus.
      </p>
      <div className="w-20 h-[4px] bg-red-600 mt-3 mb-8"></div>

      <ul className="space-y-4 text-blue-700 text-lg">
        <li><Link href="/infrastructure/canteen" className="hover:underline">• Canteen</Link></li>
        <li><Link href="/infrastructure/class_room" className="hover:underline">• Class Room</Link></li>
        <li><Link href="/infrastructure/ground" className="hover:underline">• Ground</Link></li>
        <li><Link href="/infrastructure/laboratories" className="hover:underline">• Laboratories</Link></li>
        <li><Link href="/infrastructure/library" className="hover:underline">• Library</Link></li>
        <li><Link href="/infrastructure/multipurpose_hall" className="hover:underline">• Multipurpose Hall</Link></li>
        <li><Link href="/infrastructure/open_air_theater" className="hover:underline">• Open Air Theatre</Link></li>
        <li><Link href="/infrastructure/transport" className="hover:underline">• Transport</Link></li>
      </ul>
    </div>
  );
}
