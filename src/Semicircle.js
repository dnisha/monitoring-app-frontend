const Semicircle = (props) => {
  const x = props.a;
  const y = props.b;
  const radius = 50; // Radius of the semicircle
  const strokeWidth = 10; // Width of the stroke
  const circumference = 2 * Math.PI * radius; // Circumference of the semicircle
  const offset = circumference - (x / y) * circumference; // Offset based on x and y

  return (
    <svg viewBox=" 0 100 200">
      <path
        d={`M ${radius},${strokeWidth / 2}
            a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1 0 0,${
          2 * (radius - strokeWidth / 2)
        }
            a ${radius - strokeWidth / 2},${
          radius - strokeWidth / 2
        } 0 0 0 0,-${2 * (radius - strokeWidth / 2)}`}
        fill="none"
        stroke="orange"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M ${radius},${strokeWidth / 2}
            a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 ${
          x / y > 0.5 ? 1 : 0
        } 0 0,${2 * (radius - strokeWidth / 2)}
            a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 ${
          x / y > 0.5 ? 1 : 0
        } 0 0,-${2 * (radius - strokeWidth / 2)}`}
        fill="none"
        stroke="green"
        strokeWidth={strokeWidth}
        strokeDasharray={`${offset} ${circumference}`}
        strokeLinecap="round"
      />
      <text
        x="50"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="bold"
      >
        {`${x}%`}
      </text>
    </svg>
  );
};

export default Semicircle;
