import RefetchAtom from "@/utils/RefetchAtom";
import LoadingComp from "./LoadingComp";
import UserCard from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect } from "react";

const Display = () => {
  const [load, setLoad] = useAtom(RefetchAtom);

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const req = await fetch(
        `https://randomuser.me/api/?nat=AU,CA,DE,FR,GB,IE,IN,NZ,US&exc=login,registered,id,cell,phone,nat&noinfo`,
      );

      const res = await req.json();

      const data = res.results[0];

      return data;
    },

    refetchOnWindowFocus: false,

    retry: true,
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="flex h-[86dvh] items-center justify-center">
          <div className="">
            <LoadingComp />
          </div>
        </div>
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="flex h-[86dvh] items-center justify-center">
          <div className="">
            <UserCard info={data} />
            {/* <LoadingComp /> */}
          </div>
        </div>
      </>
    );
  }
};

export default Display;
