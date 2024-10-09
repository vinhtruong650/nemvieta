import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div className="bg-slate-200 md:bg-white grid grid-cols-4 justify-between mt-10 items-center d:w-[1400px] mx-auto p:w-auto">
      {" "}
      <div className="flex gap-2 py-2 p:px-0 d:flex-row p:flex-col md:mt-10 col-span-12 lg:col-span-8 ">
        <div className=" flex-[45%] min-h-[500px] hidden md:block ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213423129_60764889b887dc10fde5ab3019538769.jpg?alt=media&token=6328da6b-9e6a-4c3d-a618-54290e562f79"
            alt="banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className=" flex-[55%] p:px-0 d:pl-10">
          {/* <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
            Giới thiệu
          </h3> */}
          <h2
            className={`md:hidden font-bold text-customBgHeader text-center leading-7 uppercase `}
            style={{ color: "#20315c" }}
          >
            Về chúng tôi
          </h2>
          <h2
            className={`hidden md:block font-bold text-mainorange font-Questrial text-[30px] leading-7 uppercase `}
            // style={{ color: "#20315c" }}
          >
            Công ty TNHH TM & SX Nệm Việt Á
          </h2>
          <div
            className="indent-3 mt-4 p-2 rounded-md bg-slate-50 font-Questrial font-medium"
            style={{ border: "4px solid #3030ff" }}
          >
            <p>
              <span className="lg:hidden">
                <b>Công ty TNHH TM & SX Việt Á</b> đã không ngừng nghiên cứu và
                sản xuất để đưa ra thị trường những chiếc nệm êm ái nhất, những
                tấm chăn ấm áp nhất và những sản phẩm chăm sóc giấc ngủ nhằm tạo
                cho người tiêu dùng sẽ có được những phút giây nghỉ ngơi, thư
                giãn sau một ngày dài làm việc mệt nhọc. Một sứ mệnh tưởng chừng
                như đơn giản nhưng chứa đựng cả tâm huyết của người làm nghề, để
                làm sao khách hàng sở hữu được sản phẩm tốt với giá tốt nhất mà
                không phải băn khoăn đánh đổi sức khỏe của mình chỉ vì những con
                số. Đó cũng chính là điểm khác biệt khi đến với{" "}
                <b>công ty TNHH TM Sản Xuất</b>...
              </span>
              <span className="hidden lg:inline-block">
                <b>Công ty TNHH TM & SX Việt Á</b> đã không ngừng nghiên cứu và
                sản xuất để đưa ra thị trường những chiếc nệm êm ái nhất, những
                tấm chăn ấm áp nhất và những sản phẩm chăm sóc giấc ngủ nhằm tạo
                cho người tiêu dùng sẽ có được những phút giây nghỉ ngơi, thư
                giãn sau một ngày dài làm việc mệt nhọc. Một sứ mệnh tưởng chừng
                như đơn giản nhưng chứa đựng cả tâm huyết của người làm nghề, để
                làm sao khách hàng sở hữu được sản phẩm tốt với giá tốt nhất mà
                không phải băn khoăn đánh đổi sức khỏe của mình chỉ vì những con
                số. Đó cũng chính là điểm khác biệt khi đến với công ty TNHH TM
                & SX Việt Á. Để có được thành quả này là sự đóng góp công sức to
                lớn của tập thể công ty TNHH TM & SX Nệm Việt Á. Qua đó phải tạo
                được giá trị thực thụ cho cộng đồng, coi chất lượng là yếu tố
                hàng đầu để phục vụ người tiêu dùng những sản phẩm chất lượng,
                đa dạng về mẫu mã, giá thành. Bên cạnh đó, chữ tín trong kinh
                doanh, minh bạch thông tin là yếu tố quan trọng giúp nệm Việt Á
                phát triển bền vững như ngày nay.
              </span>
              <Link href={`/gioi-thieu`} className="inline-block">
                <div className="text-mainblue font-bold p-0 hover:text-red-700 cursor-pointer">
                  Đọc thêm
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
