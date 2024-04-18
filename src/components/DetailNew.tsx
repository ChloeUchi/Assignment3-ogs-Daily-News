import { data_new } from "@function/data_new";
import { useParams, useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";

const DetailNew = () => {
  const { id, detailId } = useParams();
  // const categoryId = parseInt(id as string);
    console.log(id , detailId)
  const detail = data_new[0].type_new
    .filter((category) => {
      if (id) {
        if (category.id === parseInt(id)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0]
    .news_type.filter((category) => {
      if (detailId) {
        if (category.id === parseInt(detailId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0];
    console.log(detail)
  const [searchParams] = useSearchParams();

  return (
    <div>
    <NavBar/>
    <div className="text-end mr-[2em]">viewer:{searchParams.get("viewer")}</div>
      <h2 className="text-2xl font-semibold text-center mt-[5em]">รายละเอียด{detail.headline}</h2>
      <div className="mx-auto mt-10 p-5 max-w-2xl border rounded-lg shadow-lg">
      <p>รหัสข่าว: {detail.id}</p>
      <p>วันที่ลงข่าว: {detail.date}</p>
      <p>เวลาที่ลงข่าว: {detail.time}</p>
      <p>เนื้อหาข่าว: {detail.content}</p>
      <p>ประเภทข่าว: {detail.category}</p>
      <p>สำนักข่าว: {detail.publisher}</p>
    </div>
    </div>
  );
};

export default DetailNew;
