import Image from "next/image";

export default function SportsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-6 md:px-16 pt-4 pb-12">
        <h2 className="text-3xl font-bold">Sports</h2>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          Alva’s Education Foundation has initiated Ekalavya Sports Club 25
          years back to support meritorious sports students by providing them
          excellent coaching along with free education and boarding.
        </p>

        <div className="w-20 h-2 bg-red-500 rounded-full mt-4"></div>

        <div className="mt-10 w-full flex justify-center">
          <div className="relative w-full max-w-5xl h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/sports-team.jpg"
              alt="Sports team group photo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sports Vision Section */}
      <section className="px-6 md:px-20 py-12 text-gray-800 leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0b2c45] mb-4">
          Sports Vision Of our Foundation:
        </h1>

        <p className="mb-4">
          Dr. M. Mohan Alva, Chairman of Alva’s Education Foundation, is a keen
          sports lover and promoter with a vision to promote sports...
        </p>

        <p className="mb-4">
          Around 120 university players are produced every year who represent
          the university...
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          Various disciplines under which sports quota is given:
        </h2>

        <ol className="list-decimal ml-6 space-y-1">
          <li>Athletics</li>
          <li>Cricket</li>
          <li>Weight lifting & body building</li>
          <li>Handball</li>
          <li>Softball</li>
          <li>Basketball</li>
          <li>Ball badminton</li>
          <li>Badminton</li>
          <li>Volleyball</li>
          <li>Kho-Kho</li>
          <li>Wrestling</li>
          <li>Kabaddi</li>
          <li>Throwball</li>
        </ol>

        <p className="mt-8 mb-4">
          Students are selected under sports quota from primary level up to
          postgraduate level.
        </p>

        <p>
          In this academic year there are around 750 students adopted under
          Sports Quota... Total students under all quotas combined ≈ 3000.
        </p>
      </section>
    </>
  );
}
