import { styled } from '@mui/material';
import { PieChart, useDrawingArea } from '@mui/x-charts';

const data = [{ label: 'New Customers', value: 150 }];

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 28,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[
        {
          startAngle: -135,
          endAngle: 135,
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          cornerRadius: 5,
          data,
        },
      ]}
      skipAnimation={true}
      hideLegend
      width={200}
      height={180}
      >
      <PieCenterLabel>50%</PieCenterLabel>
    </PieChart>
  );
}
