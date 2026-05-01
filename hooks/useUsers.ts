"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers, getUserById, getPosts, getTodos } from "@/services/user.service";

export const useUsersData = ({params}: {params: {userId: string}}) => {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const usersById = useQuery({
    queryKey: ["users", params.userId],
    queryFn: () => getUserById(params.userId),
  });

  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return { users, usersById, posts, todos };
};
