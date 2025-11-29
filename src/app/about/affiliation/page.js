import Image from "next/image";

export default function AffiliationPage() {
  return (
    <div className="px-6 md:px-20 py-10 bg-white min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-[#0b2c45]">
        Affiliation and legal recognitions
      </h1>

      <div className="w-16 h-1.5 bg-red-600 mt-2 mb-4 rounded-full"></div>

      <p className="text-sm md:text-base text-gray-600 mb-6">
        Alva's College of Physical Education has affiliation to Mangalore
        University, Mangalore.
      </p>

      <div className="w-full h-[500px] mb-16 bg-gray-200 rounded-2xl overflow-hidden relative">
        <Image
          src="/affilitions.jpg"
          alt="Affiliations and legal recognitions"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
