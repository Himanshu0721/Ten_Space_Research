export default function Stage2() {
  return (
    <>
      <div className="original-div">
        <div className="flex div flex justify-around items-center">
          <div style={{ opacity: "1", width: "10vw" }}>
            <p
              className="font-black mb-1 text-2xl"
              style={{ color: "#4d8c52" }}
            >
              02
            </p>
            <p className="text-2xl font-semibold" style={{ color: "#5b5b5b" }}>
              STAGE 02
            </p>
          </div>
          <div style={{ opacity: "1", width: "60vw" }}>
            <p className="text-gray-500 text-xl">
              Our second stage is powered by the Agnite vacuum optimized engine.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <img
            src="https://agnikul.in/static/media/rocket-2.bac4a119f71e25aed206.png"
            alt=""
            style={{ width: "30rem" }}
          />
        </div>
        <div className="flex gap-4 flex-wrap justify-around items-center ">
          <div style={{ width: "20rem" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABhUlEQVQ4Ea1SPUhCURQ+5/oKin6WhoLgES2B4OJQbQVtocZ72NLurjY1Ga2iQjW0FUQiDzKhIaEoaO0HkbZ2GwSDfizzeTonMByuEdGB9+453/edc+695yJ0saVk2N9CshExW4g55S4yQB1hbVlm8w1LBDTMBVwPGP58PFfSaZUOdBvok2ThiMjTgo8pnU4wbYHecVXkzpci4PUO1VBRfJ1pCzjLToPFWUlAgv2j6O6jLlkwbYFuYh3+vwUiO5Ee+XSdEucJQ8d97yCYsuKV5+r7w1M1rytwfVPeEz6QtNc7+a8Cgc3wBBBuAMmdgSkCnv0ZX+EFetSJxPxgTOF5sGuBlO0VTMyQHzbcDBH0ic8SbyhtL+SjuVOO5gUKZexpcmFGfDaDH8c2r3MSYDAdXiTXPZagbTz7Ou8k5SG4IgU+atEqx4NtXlalYKUQOzzAYNK6Z3Kyk/yNjwiV0YERU/0lWRrwkcdqUOtXfObX33TUaJrwAg1DEVqEOKsR/AgRwq0Tc+qfqVl9z6dZLdUAAAAASUVORK5CYII="
              alt=""
            />
            <h2 className="text-gray-500 font-medium text-xl">TOTAL THRUST</h2>
            <p className="text-gray-500 text-lg">Sea Level Thrust -25 kn</p>
          </div>
          <div style={{ maxWidth: "60vw" }}>
            <p className="text-gray-500 text-lg">
              Agnite is the same engine that powers our first stage as well. It
              can deliver upto 355 seconds of Isp in vacuum. Running an electric
              pump fed engine offers greater & finer propellant utilization
              techniques to enhance payload capacity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
