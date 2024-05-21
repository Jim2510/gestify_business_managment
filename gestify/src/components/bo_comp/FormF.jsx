import { useState } from "react";

export function FormF() {
  const [formData, setFormData] = useState({
    description: "",
    tot: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", formData);
      const response = await fetch("http://localhost:3000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: formData.description,
          tot: formData.tot,
          number: formData.number,
        }),
      });
      if (response.ok) {
        console.log("Invoice added successfully");
      } else {
        console.error("Failed to add invoice", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="w-full h-fit pt-16 p-10">
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 justify-between gap-5"
        >
          <label htmlFor="number">Codice</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
          <label htmlFor="type">Tipo vendita</label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="retail">Retail</option>
            <option value="wholesale">Wholesale</option>
          </select>
          <label htmlFor="tot">QT</label>
          <input
            type="text"
            name="tot"
            value={formData.tot}
            onChange={handleInputChange}
          />
          <label htmlFor="iva">IVA</label>
          <select name="iva" id="iva">
            <option value="22%">22%</option>
            <option value="10%">10%</option>
          </select>
          <label htmlFor="description">Descrizione</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="8"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="invoiceNote">Dicitura Fattura</label>
          <input type="text" name="invoiceNote" />
          <button
            type="submit"
            className="col-span-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae] w-fit justify-self-center p-2 font-semibold mt-10"
          >
            Add Invoice
          </button>
        </form>
      </div>
    </>
  );
}
