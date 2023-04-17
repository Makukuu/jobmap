import { useEffect } from "react";

function Dashboard() {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      // console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Dashboard</div>;
}
export default Dashboard;
