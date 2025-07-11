import { User, Settings, ListTodo } from "lucide-react";

const tabs = [
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Activity", icon: ListTodo },
];

export default function TabButtons({ currentTab, setCurrentTab }) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      {tabs.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => setCurrentTab(label)}
          className={`flex items-center gap-2 rounded-full px-4 py-2 shadow transition 
            ${currentTab === label
              ? "bg-blue-600 text-white scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          <Icon size={18} strokeWidth={2.2} />
          {label}
        </button>
      ))}
    </div>
  );
}
