"use client";

import { useState } from "react";

export default function FormTraveler() {
  const [traveler, setTraveler] = useState({
    title: "mr",
    firstName: "",
    lastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    extraLastName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTraveler((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!traveler.firstName) {
      newErrors.firstName = "Nama depan wajib diisi.";
    }
    if (!traveler.lastName) {
      newErrors.lastName = "Nama belakang wajib diisi.";
    }
    if (!traveler.birthDay || !/^\d+$/.test(traveler.birthDay)) {
      newErrors.birthDay = "Tanggal lahir harus angka.";
    }
    if (!traveler.birthMonth || !/^\d+$/.test(traveler.birthMonth)) {
      newErrors.birthMonth = "Bulan lahir harus angka.";
    }
    if (!traveler.birthYear || !/^\d+$/.test(traveler.birthYear)) {
      newErrors.birthYear = "Tahun lahir harus angka.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Data Traveler:", traveler);
      alert("Data Traveler tersimpan!");
    }
  };

  return (
    <section>
      <h2 className="font-bold text-lg mb-3">Data Traveler</h2>
      <div className="border rounded-md p-4">
        <h3 className="font-semibold mb-3">Person 1</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <select name="title" value={traveler.title} onChange={handleChange} className="border rounded p-2">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="ms">Ms</option>
            </select>
            <input type="text" name="firstName" value={traveler.firstName} onChange={handleChange} placeholder="Nama Depan & Tengah (Jika Ada)" className="border rounded w-full p-2" />
          </div>
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          <div>
            <input type="text" name="lastName" value={traveler.lastName} onChange={handleChange} placeholder="Nama Belakang" className="border rounded w-full p-2" />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="flex gap-2">
            <input type="text" name="birthDay" value={traveler.birthDay} onChange={handleChange} placeholder="Tanggal" className="border rounded w-full p-2" />
            <input type="text" name="birthMonth" value={traveler.birthMonth} onChange={handleChange} placeholder="Bulan" className="border rounded w-full p-2" />
            <input type="text" name="birthYear" value={traveler.birthYear} onChange={handleChange} placeholder="Tahun" className="border rounded w-full p-2" />
          </div>
          {(errors.birthDay || errors.birthMonth || errors.birthYear) && <p className="text-red-500 text-sm">{errors.birthDay || errors.birthMonth || errors.birthYear}</p>}
          <div>
            <input type="text" name="extraLastName" value={traveler.extraLastName} onChange={handleChange} placeholder="Nama Belakang" className="border rounded w-full p-2" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}
