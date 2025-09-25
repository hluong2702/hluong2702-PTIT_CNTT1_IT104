import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { handleChangeLanguage } from "../slices/languageSlice";

export default function Bai6() {
  const language = useAppSelector((state) => state.languageSlice.value);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleChangeLanguage(event.target.value));
  };

  return (
    <div>
      <select
        name="changeLanguage"
        id="changeLanguage"
        onChange={handleChange}
        value={language}
      >
        <option value="vietnamese">Vietnamese</option>
        <option value="english">English</option>
      </select>
      <p>{language === "vietnamese" ? "Học viện Rikkei" : "Rikkei Academy"}</p>
    </div>
  );
}
