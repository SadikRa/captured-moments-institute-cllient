import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useClass = () =>{
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();
    const {refetch,  data: Classes = [] } = useQuery({
      queryKey: ["Classes", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/addClass?email=${user?.email}`);
  
        return res.data;
      },
    });

    return [Classes, refetch]
}

export default useClass;