export default function CelebrationPage() {
  const celebrations = [
    ["Alva’s Virasat", "/images/virasat.png"],
    ["Alva’s Chakravyuh", "/images/chakravyuh.png"],
    ["Alva’s Chitra-Siri", "/images/chitra.png"],
    ["Alva’s Deepavali", "/images/deepavali.png"],
    ["Alva’s Iftar", "/images/iftar.png"],
    ["Alva’s Independence day", "/images/independence.png"],
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-black">Alva’s Celebrations</h1>

      <p className="text-gray-700 mt-3 max-w-3xl">
        Getting educated should lead to creation of a contended mind to share
        and rejoice with a community. Every national and regional festival is
        converted into an opportunity for the students to realize the strength
        of our culture and country.
      </p>

      <div className="w-20 h-2 bg-red-500 mt-6 mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {celebrations.map(([title, img], index) => (
          <div
            key={index}
            className="bg-[#fdeeee] p-6 rounded-3xl shadow-sm border border-[#f5c6c6] flex flex-col items-center"
          >
            <img src={img} alt={title} className="h-40 object-contain" />
            <p className="mt-4 bg-white px-5 py-2 rounded-full text-red-600 font-semibold shadow">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
