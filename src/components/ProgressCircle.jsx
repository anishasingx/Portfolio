import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 🔹 Reusable Progress Circle Component
const ProgressCircle = ({ value, color, size = 50 }) => {
  const data = [
    { name: "Progress", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  const COLORS = [color, "#d3d3d3"]; // Skill Color & Grey

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        width: size + 20,
        height: size + 30,
        margin: "auto",
      }}
    >
      {/* Responsive Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.45} // thinner circle
            outerRadius={size * 0.7}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Percentage */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "10px",
          fontWeight: "bold",
          color: color,
          textAlign: "center",
        }}
      >
        {value}%
      </div>
    </div>
  );
};

export default ProgressCircle;
