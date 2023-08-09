import RefetchAtom from "@/utils/RefetchAtom";
import LoadingComp from "./LoadingComp";
import UserCard from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useLayoutEffect } from "react";

const Display = () => {
  const [load, setLoad] = useAtom(RefetchAtom);

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const req = await fetch(
        `https://randomuser.me/api/1.4/?nat=AU,CA,DE,FR,GB,IE,IN,NZ,US&exc=login,registered,id,cell,phone,nat&noinfo`
      );

      const res = await req.json();

      const data = res.results[0];

      return data;
    },

    refetchOnWindowFocus: false,

    retry: true,
  });

  useLayoutEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <>
        <div className='flex justify-center items-center h-[86dvh]'>
          <div className=''>
            <LoadingComp />
          </div>
        </div>
      </>
    );
  }

  if (isFetched && isSuccess) {
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
  }
};

export default Display;
