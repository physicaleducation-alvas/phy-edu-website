export default function CampusInsights() {
  return (
    <section className="w-full px-4 md:px-9 mb-5 py-8 md:py-10">
      <div className="w-full bg-white border shadow-sm flex overflow-hidden">
        {/* Left orange panel */}
        <div
          className="
            bg-[#f4a83a] 
            w-40 sm:w-56 lg:w-64      /* narrower on mobile, same as before on large screens */
            flex items-center 
            px-4 sm:px-6 lg:px-8 
            py-6 lg:py-10
          "
        >
          <div>
            <p className="text-white text-base sm:text-lg lg:text-xl font-semibold">
              Campus
            </p>
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
              INSIGHTS
            </p>
          </div>
        </div>

        {/* Right empty white area */}
        <div className="flex-1 bg-white" />
      </div>
    </section>
  );
}
