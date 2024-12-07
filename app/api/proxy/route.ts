import { getAllDocuments } from '@config/Services/Firebase/FireStoreDB';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  let dataR: any;

  try {
    // Lấy dữ liệu từ collection hoặc bảng ghi mà bạn đã tạo ở file trước
    dataR = await getAllDocuments("proxy-url"); // Thay "your-collection-name" bằng tên collection bạn muốn lấy dữ liệu từ

    // Kiểm tra xem dữ liệu có hợp lệ không
    if (!dataR || dataR.length === 0) {
      return NextResponse.json({ message: "Không tìm thấy dữ liệu." }, { status: 404 });
    }

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    return NextResponse.json({ message: "Đã xảy ra lỗi khi lấy dữ liệu." }, { status: 500 });
  }

  // Trả về dữ liệu dưới dạng JSON
  return NextResponse.json({ data: dataR[dataR.length-1] });
}
