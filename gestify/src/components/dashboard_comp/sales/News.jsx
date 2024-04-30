import { SingleNews } from "./SingleNews";

export function News() {
  return (
    <>
      <div className="flex w-full p-4 h-full justify-center items-center">
        <div className="w-full flex justify-start shadow-lg h-full flex-col items-center gap-4">
          <h2 className="mt-4 font-semibold">NEW ENTRIES</h2>
          <SingleNews earns={"+" + 234} />
          <SingleNews earns={"+" + 436} />
          <SingleNews earns={"+" + 624} />
          <SingleNews earns={"+" + 23} />
          <SingleNews earns={"+" + 154} />
        </div>
      </div>
    </>
  );
}
