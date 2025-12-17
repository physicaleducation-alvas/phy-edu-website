import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
  const courses = [
    { id: 1, title: "B.P.Ed – Bachelor Of Physical Education", link: "/courses/bped" },
    { id: 2, title: "M.P.Ed – Master of Physical Education", link: "/courses/mped" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-14 gap-5 mt-10">
      {courses.map((course) => (
        <div
          key={course.id}
          className="w-full max-w-4xl bg-white rounded-lg pb-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2">
            <div>
              <h3 className="text-sm font-semibold">{course.title}</h3>
              <div className="mt-1 h-[3px] w-10 bg-red-500 rounded-full"></div>
            </div>

            <Link href={course.link}>
              <button className="text-xs font-semibold bg-red-500 cursor-pointer text-white px-4 py-1 rounded-full">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Grey Box */}
          <Image
            src="/bped.jpg"
            alt="Course Image"
            width={1200}
            height={500}
            className="mt-4 bg-gray-300 w-full h-[500px]"
          />
        </div>
      ))}
    </div>
  );
}
