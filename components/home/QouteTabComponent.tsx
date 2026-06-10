interface QuoteTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["Car Insurance", "Health Insurance", "Travel Insurance"];

export default function QuoteTabs({ activeTab, onTabChange }: QuoteTabsProps) {
  return (
    <div className="flex border-b-4 border-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 py-4 px-4 font-futura font-bold text-white text-sm md:text-base transition ${
            activeTab === tab
              ? "bg-[#BA0C2F] border-b-4 border-white"
              : "bg-[#BA0C2F] hover:bg-[#BA0C2F]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
