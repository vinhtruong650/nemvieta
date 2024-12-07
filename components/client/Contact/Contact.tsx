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
        message: "Thao tác KHÔNG thành công !",
        description: `Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      try {
        // Kiểm tra xem document đã tồn tại hay chưa
        const existingDocument = await getDocumentById("proxy-url", name);

        const data = {
          name: name,
          createdAt: new Date(),
        };

        if (existingDocument) {
          // Nếu tài liệu đã tồn tại, cập nhật nó
          await updateDocument("proxy-url", existingDocument.id, data);
          notification["success"]({
            message: "Cập nhật thành công !",
            description: `Tài liệu đã được cập nhật với ID: ${existingDocument.id}`,
          });
        } else {
          // Nếu tài liệu chưa tồn tại, tạo mới tài liệu
          const recordId = await addDocument("proxy-url", data);
          notification["success"]({
            message: "Thao tác thành công !",
            description: `Record đã được tạo mới thành công với ID: ${recordId}`,
          });
        }
      } catch (error) {
        notification["error"]({
          message: "Thao tác thất bại !",
          description: "Đã xảy ra lỗi khi thao tác với tài liệu.",
        });
      } finally {
        setIsLoading(false); // Đảm bảo trạng thái loading được cập nhật
      }
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
