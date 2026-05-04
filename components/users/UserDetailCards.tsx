import Card from "@/components/users/Card";
import { UserDetailCardsProps } from "@/types/user";

export default function UserDetailCards({ user }: UserDetailCardsProps) {
  const cardDetails = [
    {
      title: "Company",
      subtitle: user.company.name || "N/A",
      description: user.company.catchPhrase
        ? `"${user.company.catchPhrase}"`
        : "No catchphrase available.",
      icon: "Building",
      color: "purple",
      isList: false,
      list: [],
    },
    {
      title: "Address",
      subtitle: `${user.address.street || "N/A"}, ${user.address.city || ""}`,
      description: user.address
        ? `${user.address.suite}, ${user.address.zipcode}`
        : "No address details available.",
      icon: "MapPin",
      color: "blue",
      isList: false,
      list: [],
    },
    {
      title: "Contact",
      subtitle: user.email || "N/A",
      description: (
        <>
          <p>
            Email{" "}
            <span className="ml-3 font-medium text-gray-700 dark:text-slate-100">
              {user.email || "N/A"}
            </span>
          </p>
          <p>
            Phone{" "}
            <span className="ml-3 font-medium text-gray-700 dark:text-slate-100">
              {user.phone || "N/A"}
            </span>
          </p>
          <p>
            Website{" "}
            <span className="ml-3 font-medium text-gray-700 dark:text-slate-100">
              {user.website || "N/A"}
            </span>
          </p>
        </>
      ),
      icon: "Mail",
      color: "green",
      isList: false,
      list: [],
    },
  ];

  return <Card cards={cardDetails} />;
}
