import Image from "next/image";

export default function BPEDPage() {
  return (
    <div className="w-full flex flex-col items-center py-14 gap-5">
      <div className="w-full max-w-4xl bg-white rounded-lg pb-4">
        <div className="flex items-center justify-between px-4 pt-2">
          <div>
            <h3 className="text-sm font-semibold">B.P.Ed – Bachelor Of Physical Education</h3>
            <div className="mt-1 h-[3px] w-10 bg-red-500 rounded-full"></div>
          </div>

          <button className="text-xs font-semibold bg-red-500 cursor-pointer text-white px-4 py-1 rounded-full">
            Apply Now
          </button>
        </div>

        <Image
          src="/bped.jpg"
          alt="Image of B.P.Ed"
          width={1200}
          height={500}
          className="mt-4 bg-gray-300 w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
