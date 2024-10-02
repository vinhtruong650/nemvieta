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
    <div>
      {" "}
      <div className="flex gap-2 py-5 p:px-0 d:px-5 d:flex-row p:flex-col">
        <div className=" flex-[45%] h-[500px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213423129_60764889b887dc10fde5ab3019538769.jpg?alt=media&token=6328da6b-9e6a-4c3d-a618-54290e562f79"
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" flex-[55%] p:px-0 d:px-10">
          <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
            Giới thiệu
          </h3>
          <h3
            className={`font-UTMAmerican font-bold text-mainblue text-center text-[30px] leading-7 uppercase ${UTMAmerican.className}`}
          >
            Tại sao chọn Nệm việt á ?
          </h3>
          <div className="indent-3 mt-5">
            <p>
              Tập thể Công ty TNHH TM Sản Xuất Việt Á đã không ngừng nghiên cứu
              và sản xuất để đưa ra thị trường những chiếc nệm êm ái nhất, những
              tấm chăn ấm áp nhất và những sản phẩm chăm sóc giấc ngủ nhằm tạo
              cho người tiêu dùng sẽ có được những phút giây nghỉ ngơi, thư giãn
              sau một ngày dài làm việc mệt nhọc. Một sứ mệnh tưởng chừng như
              đơn giản nhưng chứa đựng cả tâm huyết của người làm nghề, để làm
              sao khách hàng sở hữu được sản phẩm tốt với giá tốt nhất mà không
              phải băn khoăn đánh đổi sức khỏe của mình chỉ vì những con số. Đó
              cũng chính là điểm khác biệt khi đến với công ty TNHH TM Sản Xuấ
            </p>
          </div>
          <Link href={`/gioi-thieu`}>
            <div className="text-redPrimmary mt-5 hover:text-red-700 cursor-pointer">
              Đọc thêm _
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
