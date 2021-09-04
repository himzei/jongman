import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { GiGreenhouse } from "react-icons/gi";
import { BsBraces } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

function ServicePage2() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-40"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500063002433-e4647d7f1cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <h2 className="text-lg text-blue-400">Service01</h2>
        <h1 className="font-bold text-4xl text-white">상 속</h1>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <span className="text-4xl opacity-30 mb-8">
          <ImQuotesLeft className="" />
        </span>
        <h1 className="font-bold text-5xl mb-4">
          최고의 <span className="text-blue-500">상속세 전문</span> 세무사{" "}
        </h1>
        <h2 className="text-xl">
          면밀한 검토를 바탕으로 고객의 소중한 재산을 지켜 드리기 위하여
        </h2>
        <h2 className="text-xl">매순간 최선을 다해 함께 하겠습니다.</h2>
        <span className="text-4xl opacity-30 mt-8">
          <ImQuotesRight />
        </span>
      </div>
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center ">
          <div className="text-8xl text-blue-500">
            <GiGreenhouse />
          </div>
          <div className="flex mt-4 text-blue-500 items-center">
            <div className="w-96 border-t border-blue-500"></div>
            <span className="text-3xl px-8">상속세는</span>
            <div className="w-96 border-t border-blue-500"></div>
          </div>
          <div className="flex flex-col items-center mt-4 py-2">
            <h4 className="text-2xl font-light">
              상속개시 시점이 아닌 최근 10년간의 재산변동 상황에 주목해야 하며
            </h4>
            <h4 className="text-2xl font-light">
              사전 증여, 명의신탁, 세무조사 및 향후 방안 등 다양한 변수를
              고려해야 합니다.
            </h4>
          </div>
          <div className="flex mt-4 text-blue-500 items-center">
            <div className="w-96 border-t border-blue-500"></div>
            <span className="text-3xl px-16">
              <BsBraces />
            </span>
            <div className="w-96 border-t border-blue-500"></div>
          </div>
        </div>
      </div>

      <div
        className="py-20"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center my-10">
            <h2 className="font-light text-xl text-blue-500">Daegyo Tax</h2>
            <h1 className="font-bold text-4xl text-white">상세보기 절차</h1>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-8">
            <div className="flex flex-col p-4 bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
            <div className="flex flex-col p-4    bg-white opacity-60 rounded-xl">
              <span className="font-bold text-3xl text-blue-500 flex justify-start -mb-3">
                <h2>1</h2>
              </span>
              <div className="text-8xl text-blue-500 flex justify-center">
                <FaHandshake />
              </div>

              <h2 className="text-3xl font-bold text-center mt-4 mb-4">
                최초 미팅
              </h2>
              <h4 className="text-lg mb-1">상속내역 파악</h4>
              <h4 className="text-lg mb-1">필요서류 안내</h4>
              <h4 className="text-lg mb-1">쟁점사항 도출 </h4>
              <h4 className="text-lg mb-1">업무순서에 대한 브리핑</h4>
              <h4 className="text-lg mb-1">계약서 작성</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage2;
