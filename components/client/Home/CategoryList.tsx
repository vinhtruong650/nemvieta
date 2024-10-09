export default function CategoryGrid() {
  return (
    <div className="bg-transparent md:bg-slate-100  md:grid grid-cols-4 justify-between lg:mt-10 items-center d:w-[1400px] mx-auto p:w-auto hidden">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 col-span-4 h-[380px]">
        {/* Ô lớn phía trên */}
        <div className="col-span-3 row-span-1 items-center justify-center grid grid-cols-2 grid-rows-1 gap-2">
          <div className="col-span-1 relative h-full cursor-pointer overflow-hidden">
            <img
              src="image/nemcaosu.jpg"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
            ></img>
            <div className="w-2/4 h-1/3 bg-white uppercase text-gray-600a font-Questrial text-[20px] font-bold rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
              Nệm cao su
            </div>
          </div>
          <div className="col-span-1 relative bg-yellow-50 row-span-1 h-full cursor-pointer overflow-hidden">
            <img
              src="image/foam.jpg"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
            ></img>
            <div className="w-2/4 h-1/3 uppercase shadow-2xl bg-white text-gray-600a font-bold font-Questrial text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
              Nệm Foam
            </div>
          </div>
        </div>

        {/* Ô lớn bên phải */}
        <div className="col-span-1 row-span-2 bg-blue-400 flex items-center justify-center relative overflow-hidden">
          <img
            src="image/thonghoi.jpg"
            className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
          ></img>
          <div className="w-2/4 h-1/6 uppercase shadow-2xl bg-white text-gray-600a font-bold font-Questrial text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
            Nệm Thông Hơi
          </div>
        </div>

        {/* Ba ô nhỏ phía dưới */}
        <div className="col-span-1 row-span-1 relative bg-blue-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src="image/bongepresize.jpg"
            className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
          ></img>
          <div className="w-3/4 h-1/3 bg-white uppercase text-gray-600a font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
            Bông Ép
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-blue-300 flex items-center justify-center relative overflow-hidden">
          <img
            src="image/loxo.jpg"
            className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
          ></img>
          <div className="w-3/4 h-1/3 bg-white uppercase text-gray-600a font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
            Nệm Lò Xo
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-customBgHeader relative flex items-center justify-center overflow-hidden">
          <div className="h-full">
            <img
              src="image/drap.jpg "
              className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
            ></img>
          </div>
          <div className="h-full w-[100%]">
            <img
              src="image/goi.jpg"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
            ></img>
          </div>
          <div className="h-full w-[150%]">
            <img
              src="image/phukien.jpg"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
            ></img>
          </div>
          <div className="w-3/4 h-1/3 bg-white uppercase text-gray-600a font-Questrial font-bold text-[20px] rounded-xl top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] opacity-80 flex justify-center items-center">
            Phụ kiện
          </div>
        </div>
      </div>
    </div>
  );
}
