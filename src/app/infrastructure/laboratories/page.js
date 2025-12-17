export default function LaboratoriesPage() {
  return (
    <div className="px-10 py-10">

      {/* Page Title */}
      <h1 className="text-2xl font-bold">Laboratories</h1>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      {/* -------------------- Anatomy Lab -------------------- */}
      <h2 className="font-semibold text-lg">Anatomy And Physiology Lab:</h2>
      <p className="text-sm mt-2 mb-4 text-gray-700">
        Alva’s College of Physical Education has a well-equipped Anatomy and Physiology lab which consists of various
        charts, models, & various DVDs related to Anatomy and Physiology. The foundation also has a well-equipped
        Anatomy Museum, which has well-equipped anatomy essentials for the students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

      {/* -------------------- Computer Lab -------------------- */}
      <h2 className="font-semibold text-lg">Computer Lab</h2>
      <p className="text-sm mt-2 mb-4 text-gray-700">
        The College has a fully equipped computerised lab for the students. Around 30 computers are allotted for
        students for practical purposes. Specialised staff take up practical as well as theory classes for the students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

      {/* -------------------- Psychology Lab -------------------- */}
      <h2 className="font-semibold text-lg">Psychology Lab:</h2>
      <p className="text-sm mt-2 mb-4 text-gray-700">
        Alva’s College of Physical Education provides a Psychology Lab which caters to BPED and MPED students for
        learning Sports Psychology. Students get practical knowledge guided by renowned teachers and visiting faculties
        who conduct classes regularly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

      {/* -------------------- Sports Training Lab -------------------- */}
      <h2 className="font-semibold text-lg">Sports Training and Test and Measurement:</h2>
      <p className="text-sm mt-2 mb-4 text-gray-700">
        The College has a well-equipped Sports Training and Test and Measurement Lab which is utilised by our students
        on a regular basis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
