export default function Stage1() {
  return (
    <>
      <div className="original-div">
        <div className="flex div flex justify-around items-center">
          <div style={{ opacity: "1", width: "10vw" }}>
            <p
              className="font-black mb-1 text-2xl"
              style={{ color: "#4d8c52" }}
            >
              01
            </p>
            <p className="text-2xl font-semibold" style={{ color: "#5b5b5b" }}>
              STAGE 01
            </p>
          </div>
          <div style={{ opacity: "1", width: "60vw" }}>
            <p className="text-gray-500 text-xl">
              Agnibaan’s first stage is powered by 7 Agnite engines each
              delivering 25 kN of thrust at sea level. All of these engines are
              electric pump fed engines allowing for simplified engine design
              and highly configurable engine clustering architectures.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <img
            src="https://agnikul.in/static/media/rocket-3.fb22c720de91971ae6e5.png"
            alt=""
            style={{ width: "60rem" }}
          />
        </div>
        <div className="flex justify-around items-center ">
          <div style={{ maxWidth: "60vw" }}>
            <p className="text-gray-500 text-lg">
              Capable of operating with a sea level Isp of 285 seconds, the
              entire combustion section here is a single piece assembly and 100%
              3D printed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
