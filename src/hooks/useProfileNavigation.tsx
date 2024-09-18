// hooks/useProfileNavigation.ts
import { useRouter } from "next/navigation";

const useProfileNavigation = () => {
  const router = useRouter();

  const handleProfileClick = (id: number) => {
    router.push(`/profile/${id}`);
  };

  return { handleProfileClick };
};

export default useProfileNavigation;