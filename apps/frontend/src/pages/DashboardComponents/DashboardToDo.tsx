import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "To Do", color: "#74414e" },
            { id: 1, value: 15, label: "Complete", color: "#395176" },
            { id: 2, value: 20, label: "In Progress", color: "#C6DAF0" },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}
