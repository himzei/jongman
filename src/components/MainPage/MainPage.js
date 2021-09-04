import React, { useRef, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import Carousel from "react-bootstrap/Carousel";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.5629162496894, 126.8234457878442), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

function MainPage() {
  const container = useRef(null);
  useEffect(() => {
    let map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴

    let markerPosition = new window.kakao.maps.LatLng(
      37.5629162496894,
      126.8234457878442
    );
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    return () => {};
  }, []);

  return (
    <>
      <div className="">
        <img
          className="relative -top-28 w-full h-screen"
          src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1128&q=80"
          alt="aa"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col">
          <h4 className="text-white text-2xl mb-4 shadow-xl">
            당신의 세금 안녕하십니까?
          </h4>
          <h1 className="text-blue-800 text-7xl font-bold mb-4 ">DAEGYOTAX</h1>
          <h5 className="text-white text-2xl font-light">
            당신의 소중한 재산을 지켜드립니다.
          </h5>
        </div>
      </div>
      <div className="max-w-7xl py-4 mx-auto flex-none md:flex my-20 ">
        <div className="flex flex-col w-full  md:w-1/2 px-10 md:px-0">
          <h4 className="text-sm text-green-600">DAEGYOTAX</h4>
          <h2 className="text-3xl font-medium text-green-600">
            당신의 세금, 안녕하십니까?
          </h2>
          <h5 className="font-light text-green-600 mt-2 mb-8">___</h5>
          <h3 className="text-lg mb-1">고객의 소중한 재산을 지켜드릴</h3>
          <h3 className="text-lg mb-1 font-medium">최고의 세무전문가</h3>
          <h3 className="text-lg mb-1 font-medium">DAEGYOTAX</h3>
          <h5 className="font-light text-green-600 text-2xl mt-10 mb-8">
            <ImCheckmark />
          </h5>
          <h3 className="text-lg mb-1">
            상속, 증여, 양도 및 각종 세무조사에 특
          </h3>
          <h3 className="text-lg mb-1">화되어 있는 전문가들로 구성되어 있으</h3>
          <h3 className="text-lg mb-1">며 업계 최고 수준의 세무서비스를 제</h3>
          <h3 className="text-lg mb-1">공하고 있습니다.</h3>
          <h5 className="font-light text-green-600 text-2xl mt-10 mb-8">
            <ImCheckmark />
          </h5>
          <h3 className="text-lg mb-1">대교는 귀하의 소중한 재산을 지켜</h3>
          <h3 className="text-lg mb-1">드립니다.</h3>
          <div className="flex items-center border-2 py-3 px-3 mt-10 w-48 text-center ">
            <BsPencilSquare /> <span className="ml-2">세무상담 신청하기</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 mt-10 md:-mt-10  md:grid-cols-2 grid-rows-5 w-full h-full gap-10">
            <div
              className="row-span-3 rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
              }}
            ></div>
            <div></div>
            <div
              className="row-span-3 rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80')",
              }}
            >
              {" "}
            </div>
            <div
              className="row-span-2 rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')",
              }}
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl py-4 mx-auto flex-none md:flex md:justify-between my-20">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 w-full h-full gap-10 w-1/2">
            <div></div>
            <div
              className="row-span-3 rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1601597110547-78516f198ce4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')",
              }}
            >
              {" "}
            </div>
            <div></div>
            <div
              className="row-span-3  rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')",
              }}
            >
              {" "}
            </div>
            <div
              className="rounded-2xl h-48 md:h-full"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
            >
              {" "}
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 px-10 md:pl-20">
          <h4 className="text-sm text-green-600">Premium Service</h4>
          <h2 className="text-3xl font-medium text-green-600">
            스마트한 세무서비스
          </h2>
          <h5 className="font-light text-green-600 mt-2 mb-8">___</h5>
          <h3 className="text-lg mb-1">상황 별 요소를 파악하여</h3>
          <h3 className="text-lg mb-1 font-medium">리스크를 최소화한</h3>
          <h3 className="text-lg mb-1 font-medium">
            최적의 절세 플랜을 제시합니다.
          </h3>
          <h5 className="font-light text-green-600 text-2xl mt-10 mb-8">
            <ImCheckmark />
          </h5>
          <h3 className="text-lg mb-1">차별화된 전문성과 신뢰를 바탕으로 고</h3>
          <h3 className="text-lg mb-1">
            객의 만족을 위해 최선을 다하겠습니다.
          </h3>
          <h5 className="font-light text-green-600 text-2xl mt-10 mb-8">
            <ImCheckmark />
          </h5>
          <h3 className="text-lg mb-1">저희와의 만남이 여러분의 특별한 선택</h3>
          <h3 className="text-lg mb-1">이 될 것을 약속합니다.</h3>
          <h4 className="text-sm text-green-600 mt-20">Business Partner</h4>
          <h2 className="text-3xl font-medium text-green-600">
            믿을 수 있는 세무파트너
          </h2>
          <h5 className="font-light text-green-600 mt-2 mb-8">___</h5>
          <h3 className="text-lg mb-1">고객과의 신뢰를 최우선으로</h3>
          <h3 className="text-lg mb-1">여기며 비밀엄수 규정을 준수하여</h3>
          <h3 className="text-lg mb-1">소중한 고객의 정보를 보호합니다.</h3>
          <h5 className="font-light text-green-600 text-2xl mt-10 mb-8">
            <ImCheckmark />
          </h5>
          <h3 className="text-lg mb-1">차별화된 전문성과 신뢰를 바탕으로 고</h3>
          <h3 className="text-lg mb-1">
            객의 만족을 위해 최선을 다하겠습니다.
          </h3>
          <div className="flex items-center border-2 py-3 px-3 mt-10 w-48 text-center">
            <BsPencilSquare /> <span className="ml-2">세무상담 신청하기</span>
          </div>
        </div>
      </div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block h-80  w-100"
              src="https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-6xl transform -translate-y-10 text-green-900">
                프리미엄 세무 서비스
              </h3>
              <p className="transform -translate-y-10 text-green-800">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  h-80 w-100"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="text-6xl transform -translate-y-10 text-green-900">
                재산관련 세무 전문가
              </h3>
              <p className="transform -translate-y-10 text-green-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-80  w-100"
              src="https://images.unsplash.com/photo-1470921346718-b615f097684b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="text-6xl transform -translate-y-10 text-green-900">
                상속 / 증여 / 양도 전문가
              </h3>
              <p className="transform -translate-y-10 text-green-800">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl py-4 mx-auto flex flex-col mb-20 justify-center">
          <div className="flex flex-col justify-center items-center py-10 ">
            <h4 className="text-sm text-green-600">Service</h4>
            <h1 className="text-3xl font-bold">다양한 세무서비스</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 pb-10">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                alt="service1"
              />
              <div className="flex flex-col bg-white py-4 justify-center items-center w-full h-full">
                <h4 className="text-sm text-green-600 mb-3">01</h4>
                <h2 className="text-2xl font-medium">상속</h2>
                <h3 className=" mb-10 text-sm">최고의 상속세 전무 세무사</h3>
                <h6 className="text-sm font-light">MORE +</h6>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                alt="service1"
              />
              <div className="flex flex-col bg-white py-4 justify-center items-center w-full h-full">
                <h4 className="text-sm text-green-600 mb-3">01</h4>
                <h2 className="text-2xl font-medium">상속</h2>
                <h3 className=" mb-10 text-sm">최고의 상속세 전무 세무사</h3>
                <h6 className="text-sm font-light">MORE +</h6>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                alt="service1"
              />
              <div className="flex flex-col bg-white py-4 justify-center items-center w-full h-full">
                <h4 className="text-sm text-green-600 mb-3">01</h4>
                <h2 className="text-2xl font-medium">상속</h2>
                <h3 className=" mb-10 text-sm">최고의 상속세 전무 세무사</h3>
                <h6 className="text-sm font-light">MORE +</h6>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                alt="service1"
              />
              <div className="flex flex-col bg-white py-4 justify-center items-center w-full h-full">
                <h4 className="text-sm text-green-600 mb-3">01</h4>
                <h2 className="text-2xl font-medium">상속</h2>
                <h3 className=" mb-10 text-sm">최고의 상속세 전무 세무사</h3>
                <h6 className="text-sm font-light">MORE +</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl py-4 mx-auto flex flex-col mb-20 justify-center">
        <div className="flex flex-col justify-center items-center py-10 ">
          <h4 className="text-sm text-green-600">Contact Us</h4>
          <h1 className="text-3xl font-bold">오시는 길</h1>
        </div>

        <div>
          <h3 className="text-xl mt-2">
            서울특별시 강서구 마곡서로 101, 817호(마곡동 768-2,
            동익드미라벨복합빌딩, 강서세무서 맞은편)
          </h3>
        </div>
        <div
          className="map"
          ref={container}
          style={{ width: "100%", height: "500px" }}
        ></div>
      </div>
    </>
  );
}

export default MainPage;
