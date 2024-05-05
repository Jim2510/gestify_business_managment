export function TitleSection({ titleName }) {
  return (
    <>
      <h2 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white rounded-sm mb-4 font-bold text-[40px] animate__backInDown animate__animated px-40">
        {titleName}
      </h2>
    </>
  );
}
