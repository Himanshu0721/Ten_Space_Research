export default function Stage0() {
  return (
    <>
      <div className="original-div" >
        <div className="flex flex-wrap gap-4 justify-around items-center">
          <div style={{ opacity: "1", width: "10rem" }}>
            <p
              className="font-black mb-1 text-2xl"
              style={{ color: "#4d8c52" }}
            >
              00
            </p>
            <p className="text-2xl font-semibold" style={{ color: "#5b5b5b" }}>
              Launch
            </p>
          </div>
          <div className="flex flex-wrap gap-4" style={{ opacity: "1", width: "60vw" }}>
            <p className="text-gray-500 text-xl">
              Agnibaan was built keeping in mind the capability to launch from
              multiple launchports across the world. So, we built “Dhanush” -
              the launch pedestal - to support full mobility across all
              configurations of Agnibaan. As opposed to (current versions of)
              Agnibaan, Dhanush is meant for multiple uses and is built with
              durability and transportability in mind.
            </p>
            <p className="text-gray-500 text-xl">
              (“Dhanush” is a Sanskrit word that translates to “a celestial bow
              (from which arrows are launched)”. So yes, Agnibaan is launched
              from Dhanush!)
            </p>
          </div>
        </div>
        <div
          className="flex gap-8 flex-cloumn justify-around flex-wrap items-center "
          style={{ width: "40vw", marginTop: "5rem" }}
        >
          <div style={{ maxWidth: "25rem" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABhUlEQVQ4Ea1SPUhCURQ+5/oKin6WhoLgES2B4OJQbQVtocZ72NLurjY1Ga2iQjW0FUQiDzKhIaEoaO0HkbZ2GwSDfizzeTonMByuEdGB9+453/edc+695yJ0saVk2N9CshExW4g55S4yQB1hbVlm8w1LBDTMBVwPGP58PFfSaZUOdBvok2ThiMjTgo8pnU4wbYHecVXkzpci4PUO1VBRfJ1pCzjLToPFWUlAgv2j6O6jLlkwbYFuYh3+vwUiO5Ee+XSdEucJQ8d97yCYsuKV5+r7w1M1rytwfVPeEz6QtNc7+a8Cgc3wBBBuAMmdgSkCnv0ZX+EFetSJxPxgTOF5sGuBlO0VTMyQHzbcDBH0ic8SbyhtL+SjuVOO5gUKZexpcmFGfDaDH8c2r3MSYDAdXiTXPZagbTz7Ou8k5SG4IgU+atEqx4NtXlalYKUQOzzAYNK6Z3Kyk/yNjwiV0YERU/0lWRrwkcdqUOtXfObX33TUaJrwAg1DEVqEOKsR/AgRwq0Tc+qfqVl9z6dZLdUAAAAASUVORK5CYII="
              alt=""
            />
            <h2 className="text-gray-500 font-medium text-xl">
              Access to multiple launchports
            </h2>
            <p className="text-gray-500 text-lg">
              Dhanush was built and conceived as a separate product that enables
              the process of launching to be reliable and repeatable with
              consistency.
            </p>
          </div>
          <div style={{ maxWidth: "25rem" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABhUlEQVQ4Ea1SPUhCURQ+5/oKin6WhoLgES2B4OJQbQVtocZ72NLurjY1Ga2iQjW0FUQiDzKhIaEoaO0HkbZ2GwSDfizzeTonMByuEdGB9+453/edc+695yJ0saVk2N9CshExW4g55S4yQB1hbVlm8w1LBDTMBVwPGP58PFfSaZUOdBvok2ThiMjTgo8pnU4wbYHecVXkzpci4PUO1VBRfJ1pCzjLToPFWUlAgv2j6O6jLlkwbYFuYh3+vwUiO5Ee+XSdEucJQ8d97yCYsuKV5+r7w1M1rytwfVPeEz6QtNc7+a8Cgc3wBBBuAMmdgSkCnv0ZX+EFetSJxPxgTOF5sGuBlO0VTMyQHzbcDBH0ic8SbyhtL+SjuVOO5gUKZexpcmFGfDaDH8c2r3MSYDAdXiTXPZagbTz7Ou8k5SG4IgU+atEqx4NtXlalYKUQOzzAYNK6Z3Kyk/yNjwiV0YERU/0lWRrwkcdqUOtXfObX33TUaJrwAg1DEVqEOKsR/AgRwq0Tc+qfqVl9z6dZLdUAAAAASUVORK5CYII="
              alt=""
            />
            <h2 className="text-gray-500 font-medium text-xl">Mobility</h2>
            <p className="text-gray-500 text-lg">
              Dimensions of Dhanush were designed keeping in mind road
              dimensions and transportability restrictions globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
