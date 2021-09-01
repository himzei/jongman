import React from "react";

function Tail() {
  return (
    <div className="bg-gray-600 py-12">
      <div className="max-w-7xl py-4 mx-auto font-medium flex items-center justify-between bg-fixed">
        <div className="flex flex-col">
          <div className="grid grid-cols-5 gap-10 border-b border-gray-500 pb-4">
            <div className="col-span-1 ">
              <img src="images/logo_white.png" alt="logo" width="200px" />
            </div>
            <div className="col-span-4 ml-10 flex flex-col justify-center">
              <h6 className="text-sm font-light text-white mb-1">
                <span className="font-medium">사업자등록번호</span> 111-11-11111
                | <span className="font-medium">주소</span> 서울특별시 강서구
                마곡서로 101, 817호(마곡동 768-2, 동익드미라벨복합빌딩,
                강서세무서 맞은편)
              </h6>
              <h6 className="text-sm font-light text-white ">
                <span className="font-medium">대표전화</span> 02-6949-0252 |{" "}
                <span className="font-medium">팩스</span> 02-6949-0253 |{" "}
                <span className="font-medium">영업시간</span> 오전 10:00 ~ 오후
                06:00
              </h6>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <span className="font-light text-white uppercase">
              Copyright {new Date().getFullYear()} Daegyo Accounting & Tax
              services All right reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tail;
