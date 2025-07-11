import { CheckCircle2 } from "lucide-react";

export default function ActivityTab() {
  const activities = [
    "Logged in",
    "Updated profile",
    "Enabled dark mode",
    "Signed out",
  ];

  return (
    <ul className="space-y-3 text-left">
      {activities.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
