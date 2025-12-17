export default function IntramuralPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-3xl font-bold">Intramural</h1>

      <p className="text-gray-700 mt-2 max-w-4xl">
        Intramural competitions are held for students. The classes are divided
        into four groups and competitions are conducted between them. These
        events help students learn how to organize and manage tournaments.
      </p>

      <div className="w-20 h-[4px] bg-red-600 mt-3 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>

      </div>

    </div>
  );
}
