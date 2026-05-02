"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers, getPosts, getTodos } from "@/services/user.service";

export const useUsersData = () => {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return { users, posts, todos };
};
