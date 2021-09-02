import React from "react";
import { FcAddressBook, FcCurrencyExchange } from "react-icons/fc";
import Policy from "./Policy";

function ConsultPage() {
  return (
    <>
      <div className="flex w-full h-1/3">
        <img
          className="relative -top-28 w-full h-96 object-cover"
          src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1128&q=80"
          alt="aa"
          style={{}}
        />
      </div>
      <div className="flex flex-col justify-center items-center pb-20">
        <h1 className="text-4xl text-blue-500">최고의 상속세 전문 세무사</h1>
        <h2 className="text-4xl font-light mb-4">
          언제나 친절히 답변해 드립니다.{" "}
        </h2>
        <h3 className="text-lg mb-2">
          궁궁하신 사항이 있다면 무엇이든 연락주세요.
        </h3>
        <h3 className="text-lg mb-2">
          영업일 기준으로 24시간이내 응답 드립니다.
        </h3>
      </div>
      <div className="py-10 bg-blue-500 flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="w-96 text-center flex flex-col justify-center items-center border-1 border-blue-400 rounded-xl py-10">
            <div className="text-9xl">
              <FcAddressBook />
            </div>
            <span className="text-2xl text-white mt-2">상담접수</span>
          </div>

          <div className="w-96 text-center flex flex-col justify-center items-center border-1 border-blue-400 rounded-xl py-10">
            <div className="text-9xl">
              <FcCurrencyExchange />
            </div>
            <span className="text-2xl text-white mt-2">비용안내</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between my-20">
        <div className="w-1/2">
          <div className="grid grid-cols-2 grid-rows-5 w-full h-full gap-3 w-1/2">
            <div
              className="row-span-3 rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
              }}
            ></div>
            <div
              className="rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1630511431106-105062e4fb8a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
              }}
            ></div>
            <div
              className="row-span-3 rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjb3VudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
              }}
            >
              {" "}
            </div>
            <div
              className="row-span-2 rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFjY291bnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
              }}
            >
              {" "}
            </div>
            <div
              className=" rounded-2xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1561837581-abd854e0ee22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGFjY291bnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
              }}
            ></div>
          </div>
        </div>
        <div className="w-1/2 pl-10">
          <form className="flex flex-col">
            <label className="mb-2 ">
              이름 <span className="text-red-500">*</span>
            </label>
            <input type="text" name="name" className="border p-2 mb-4" />

            <label className="mb-2 ">
              연락처 <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mb-4">
              <input
                type="tel"
                size="3"
                name="tel1"
                maxLength="3"
                className="border py-2 px-4 mr-2"
              />
              -
              <input
                type="tel"
                size="4"
                name="tel2"
                maxLength="4"
                className="border py-2 px-4 mx-2"
              />
              -
              <input
                type="tel"
                size="4"
                name="tel3"
                maxLength="4"
                className="border py-2 px-4 mx-2"
              />
            </div>

            <label className="mb-2 ">이메일</label>
            <input type="email" name="email" className="border p-2 mb-4" />

            <label className="mb-2 ">
              상담희망시간 <span className="text-red-500">*</span>
            </label>
            <div className="mb-2 mb-4 flex">
              <input type="date" name="month" className="border p-2" />
              <select
                name="time"
                className="border ml-4 w-24 text-gray-500 flex justify-center items-center text-center"
              >
                <option value="">선택</option>
                <option value="09:00">09시 00분</option>
                <option value="09:30">09시 30분</option>
                <option value="10:00">10시 00분</option>
                <option value="10:30">10시 30분</option>
                <option value="11:00">11시 00분</option>
                <option value="11:30">11시 30분</option>
                <option value="12:00">12시 00분</option>
                <option value="12:30">12시 30분</option>
                <option value="13:00">13시 00분</option>
                <option value="13:30">09시 30분</option>
              </select>
            </div>
            <label className="mb-2 ">
              문의유형 <span className="text-red-500">*</span>
            </label>
            <div className="mb-2">
              <input type="checkbox" name="" />
              <span className="ml-2">양도</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" />
              <span className="ml-2">증여</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" />
              <span className="ml-2">상속</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" />
              <span className="ml-2">기장</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" />
              <span className="ml-2">조사</span>
            </div>
            <div className="mb-4">
              <input type="checkbox" name="" />
              <span className="ml-2">그외</span>
            </div>
            <label className="mb-2 ">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea className="border mb-4" rows="4"></textarea>

            <label className="mb-2 ">
              개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
            </label>
            <textarea className="border mb-2 p-2" rows="6">
              {Policy}
            </textarea>
            <div className="mb-4">
              <input type="checkbox" name="policy" />
              <span className="ml-2">개인정보 수집 및 이용에 동의합니다.</span>
            </div>
            <div className="flex justify-end">
              <input
                type="submit"
                className="py-2 w-24 bg-blue-500 text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 py-20 w-full h-full">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  w-full h-full">
          <h2 className="text-3xl font-bold mb-10">비용 안내</h2>
          <div className="grid grid-cols-2  w-full h-full">
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1630518684826-73a141396d95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80')",
              }}
              className="w-full h-48 rounded-l-full bg-blue-500 flex justify-end items-center"
            >
              <div className="flex flex-col text-center pr-10">
                <h4 className="text-white text-lg">일반 상담료</h4>
                <h2 className="text-white text-4xl">200,000</h2>
                <h6 className="text-sm text-white font-light">- VAT별도 -</h6>
              </div>
            </div>
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
              className="w-full h-48 rounded-r-full bg-blue-500 flex items-center"
            >
              <div className="flex flex-col text-center pl-10">
                <h4 className="text-white text-lg">다주택자 상담료</h4>
                <h2 className="text-white text-4xl">500,000</h2>
                <h6 className="text-sm text-white font-light">- VAT별도 -</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultPage;
