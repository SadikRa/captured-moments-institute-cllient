import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  return (
    <div className="py-24">
      <h2 className="text-3xl text-center font-semibold my-5">
        Our All Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {classes.map((classItem) => (
          <ClassesCard key={classItem._id} classItem={classItem}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
