import { getIcon } from "@/utils/userPage";
import { CardProps } from "@/types/user";

const colorStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
  green: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-300",
  orange:
    "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-300",
  purple:
    "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
};

export default function Card({ cards }: CardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = getIcon(card.icon);
        const iconColor = colorStyles[card.color] ?? colorStyles.blue;

        return (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`inline-flex w-fit shrink-0 items-center justify-center rounded-xl p-2 ${iconColor}`}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  {card.subtitle}
                </p>
              </div>
            </div>

            {card.isList ? (
              <ul className="space-y-2">
                {card.list.map((item) => {
                  const ItemIcon = getIcon(item.icon);

                  return (
                    <li key={item.label} className="flex items-center gap-2">
                      <ItemIcon
                        size={16}
                        className="text-gray-500 dark:text-slate-400"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="text-sm text-gray-600 dark:text-slate-300">
                {card.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
