"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import Input from "./Input";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import AddressDropdown from "@components/items/AddressDropdown";
import {
  addDocument,
  delDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cities, setCities] = React.useState<any>("");
  const [districts, setDistricts] = React.useState("");
  const [wards, setWards] = React.useState("");
  const [content, setContent] = React.useState("");
  const { ContactData } = useData();
  const { setIsLoading } = useStateProvider();

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCities("");
    setDistricts("");
    setWards("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công!",
        description: `Vui lòng nhập đầy đủ THÔNG TIN!`,
      });
      setIsLoading(false);
      return;
    }

    try {
      // Bước 1: Lấy tất cả các tài liệu trong collection
      const allDocuments = await getAllDocuments("proxy-url");

      // Bước 2: Xóa từng tài liệu trong collection
      for (const doc of allDocuments ?? []) {
        console.log(doc.id);
        await delDocument("proxy-url", doc.id);
      }

      // Bước 3: Tạo tài liệu mới
      const data = {
        name: name,
        createdAt: new Date(), // Có thể sử dụng serverTimestamp() nếu muốn đồng bộ server
      };

      const newRecordId = await addDocument("proxy-url", data);

      // Thông báo thành công
      notification["success"]({
        message: "Thao tác thành công!",
        description: `Đã xóa toàn bộ bản ghi cũ và tạo mới thành công với ID: ${newRecordId}`,
      });
    } catch (error) {
      console.error("Lỗi trong quá trình xử lý:", error);
      notification["error"]({
        message: "Thao tác thất bại!",
        description: "Đã xảy ra lỗi trong quá trình thao tác.",
      });
    } finally {
      setIsLoading(false); // Đảm bảo tắt trạng thái loading
    }
  };

  return (
    <div className="grid p:grid-cols-1 d:grid-cols-1 gap-10 py-5 font-LexendDeca">
      <div className="flex flex-col">
        <h2 className="py-5 text-[20px]  font-semibold">Nhập proxy url!</h2>
        <div className="flex flex-col gap-2">
          <Input type="Url*" value={name} setData={setName} />
          <div className="flex justify-center mt-3">
            <div
              className="bg-mainorange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={(e) => HandleSubmit(e)}
            >
              Gửi yêu cầu{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
