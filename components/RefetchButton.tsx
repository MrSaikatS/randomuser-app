import RefetchAtom from "@/utils/RefetchAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const RefetchButton = () => {
  const [load, setLoad] = useAtom(RefetchAtom);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const refetchHandler = () => {
    // Invalidate every query with a key that starts with `todos`
    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <>
      <Button color='primary' isLoading={load} onPress={refetchHandler}>
        <span className={` ${load ? "hidden" : ""}`}>Refetch</span>
      </Button>
    </>
  );
};

export default RefetchButton;
