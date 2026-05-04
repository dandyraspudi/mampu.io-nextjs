import { ReactNode } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface UserWithStats extends User {
  totalPosts: number;
  completed: number;
  pending: number;
}

export interface CardProps {
  cards: {
    title: string;
    subtitle: string;
    description: ReactNode;
    icon: string;
    color: string;
    isList: boolean;
    list: Array<{ label: string; icon: string }>;
  }[];
}

export interface UserStatsProps {
  totalUsers: number;
  totalPosts: number;
  completed: number;
  pending: number;
  doubleRow?: boolean;
}

export interface UserDetailCardsProps {
  user: User;
}

export interface UserDetailHeaderProps {
  userName: string;
}

export interface UserMobileCardProps {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    totalPosts: number;
    completed: number;
    pending: number;
  }[];
}

export interface UserProfileOverviewProps {
  user: User;
  posts: Post[];
  todos: Todo[];
}

export interface UserRecentPostsProps {
  posts: Post[];
}

export interface UsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts?: Post[];
  todos?: Todo[];
  title: string;
  subtitle: string;
  isPosts?: boolean;
}

export interface ModalItem {
  id: number;
  title: string;
  subtitle: string;
  status?: "Completed" | "Pending";
}

export interface UserRow {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  totalPosts: number;
  completed: number;
  pending: number;
}

export interface UserTableProps {
  users: UserRow[];
}

export interface UserTodosPreviewProps {
  todos: Todo[];
}
