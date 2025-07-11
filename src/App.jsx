import { useState } from "react";
import TabButtons from "./components/TabButtons";
import ProfileTab from "./components/ProfileTab";
import SettingsTab from "./components/SettingsTab";
import ActivityTab from "./components/ActivityTab";

export default function App() {
  const [tab, setTab] = useState("Profile");

  const renderTab = () => {
    switch (tab) {
      case "Profile":
        return <ProfileTab />;
      case "Settings":
        return <SettingsTab />;
      case "Activity":
        return <ActivityTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 
      text-gray-900 dark:text-white transition-all duration-300 p-6">
      
      <h1 className="text-3xl font-bold mb-6">💼 Portfolio Dashboard</h1>

      <TabButtons currentTab={tab} setCurrentTab={setTab} />

      <div className="w-full max-w-md p-6 rounded-xl shadow-lg 
        bg-white/70 dark:bg-white/10 backdrop-blur-md transition-all">
        {renderTab()}
      </div>
    </div>
  );
}
