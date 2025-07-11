// src/components/SettingsTab.jsx
import { useState, useEffect } from "react";

export default function SettingsTab() {
  const [dark, setDark] = useState(() =>
    JSON.parse(localStorage.getItem("darkMode")) ?? false
  );
  const [emails, setEmails] = useState(true);

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const Toggle = ({ checked, onChange }) => (
    <span
      onClick={onChange}
      className={`inline-block w-10 h-6 rounded-full cursor-pointer transition ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`block w-5 h-5 rounded-full bg-white shadow transform transition ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </span>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span>Dark Mode</span>
        <Toggle checked={dark} onChange={() => setDark(!dark)} />
      </div>
      <div className="flex items-center justify-between">
        <span>Email Updates</span>
        <Toggle checked={emails} onChange={() => setEmails(!emails)} />
      </div>
    </div>
  );
}
