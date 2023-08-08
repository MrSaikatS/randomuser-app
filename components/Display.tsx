import LoadingComp from "./LoadingComp";
import UserCard from "./UserCard";
import { useQuery } from "@tanstack/react-query";

const Display = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const req = await fetch(
        `https://randomuser.me/api/1.4/?nat=AU,CA,DE,FR,GB,IE,IN,NZ,US&exc=login,registered,id,cell,phone,nat&noinfo`
      );

      const res = await req.json();

      const data = res.results[0];

      return data;
    },
  });

  if (isLoading) {
    return <LoadingComp />;
  }

  return (
    <>
      <div className='flex justify-center items-center h-[86dvh]'>
        <div className=''>
          <UserCard info={data} />
          {/* <LoadingComp /> */}
        </div>
      </div>
    </>
  );
};

export default Display;
