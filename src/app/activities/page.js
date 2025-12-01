import Link from "next/link";

export default function ActivitiesPage() {
  return (
    <div className="w-full px-10 py-10">

      <h1 className="text-3xl font-bold">Activities</h1>
      <p className="text-gray-700 mt-2">
        Explore all the activities conducted by our department.
      </p>

      <div className="w-16 h-[3px] bg-red-600 mt-3 mb-6"></div>

      {/* BLUE CLICKABLE LINKS */}
      <ul className="space-y-4 text-blue-700 text-lg">

        <li>
          <Link href="/activities/intramural" className="hover:underline">
            • Intramural
          </Link>
        </li>

        <li>
          <Link href="/activities/extramural" className="hover:underline">
            • Extramural
          </Link>
        </li>

        <li>
          <Link href="/activities/trekking_programme" className="hover:underline">
            • Trekking Programme
          </Link>
        </li>

      </ul>

    </div>
  );
}
