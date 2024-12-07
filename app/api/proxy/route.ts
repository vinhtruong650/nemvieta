import { getAllDocuments } from '@config/Services/Firebase/FireStoreDB';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  let dataR: any;

  try {
    // Lấy dữ liệu từ collection
    dataR = await getAllDocuments("proxy-url");

    // Kiểm tra dữ liệu
    if (!dataR || dataR.length === 0) {
      return NextResponse.json({ message: "Không tìm thấy dữ liệu." }, { 
        status: 404,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    return NextResponse.json({ message: "Đã xảy ra lỗi khi lấy dữ liệu." }, { 
      status: 500,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  }

  // Trả về dữ liệu mới nhất
  return NextResponse.json(
    { data: dataR }, 
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    }
  );
}
