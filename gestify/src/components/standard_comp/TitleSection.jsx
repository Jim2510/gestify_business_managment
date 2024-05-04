export function TitleSection({ titleName }) {
  return (
    <>
      <h2 className="text-center shadow-2xl rounded-sm mb-4 font-bold text-[40px] animate__backInDown animate__animated px-40 bg-white">
        {titleName}
      </h2>
    </>
  );
}
