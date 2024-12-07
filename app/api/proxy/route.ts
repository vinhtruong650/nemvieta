import { getAllDocuments } from '@config/Services/Firebase/FireStoreDB';
import { NextResponse } from 'next/server'

import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  let dataR: any;

  try {
    // Lấy dữ liệu từ Firestore
    dataR = await getAllDocuments('proxy-url');

    // Nếu dữ liệu không hợp lệ
    if (!dataR || dataR.length === 0) {
      return NextResponse.json({ message: 'Không tìm thấy dữ liệu.' }, { status: 404 });
    }

    // Revalidate path để đảm bảo không cache dữ liệu này
    revalidatePath(request.url);

  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return NextResponse.json({ message: 'Đã xảy ra lỗi khi lấy dữ liệu.' }, { status: 500 });
  }

  // Trả về dữ liệu
  return NextResponse.json(
    { data: dataR },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    }
  );
}

