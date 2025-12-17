export default function LibraryPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-2xl font-bold">Library</h1>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      <p className="text-gray-700 max-w-4xl mb-6">
       Alva’s College of Physical Education library is equipped to meet essential academic and intellectual needs of its students, and college library has well equipped with ample sitting arrangements for students and staffs. The library has good number of Books, Periodicals, Journals, magazines and Encyclopaedias related to Physical Education and Sports. The Alva’s college of Physical Education library has over 3500 books, 7 Journals and 94 Encyclopaedias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
