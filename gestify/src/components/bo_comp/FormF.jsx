export function FormF() {
  return (
    <>
      <div className="w-full pt-16 p-10 ">
        <form className="grid grid-cols-2 justify-between gap-5">
          <label>Codice</label>
          <input type="text" />
          <label htmlFor="">Tipo vendita</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
          <label htmlFor="">QT</label>
          <input type="text" />
          <label htmlFor="">IVA</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
          <label htmlFor="">Descrizione</label>
          <textarea name="" id="" cols="30" rows="8"></textarea>
          <label htmlFor="">Dicitura Fattura</label>
          <input type="text" />
        </form>
      </div>
    </>
  );
}
