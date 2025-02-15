import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";
import axios from "axios";

// 全ユーザー一覧を取得するカスタムフック
const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return { getUsers, setUserProfiles, userProfiles, loading, error };
}

export default useAllUsers
