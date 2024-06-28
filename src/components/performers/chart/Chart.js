
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
    { name: 'Excellent', value: 7, color: '#0CA866'},
    { name: 'Good', value: 4 , color: '#9397F6'},
    { name: 'Average', value: 5 , color: '#E0BF10'},
    { name: 'Below Average', value: 4 , color: '#D72727'},
  ];
  
  const COLORS = ['#0CA866', '#9397F6', '#E0BF10', '#D72727'];
  
const pieParams = { height: 100};

  export default function PieAnimation() {
    const pieSize = 50;
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', width: '100%', maxWidth: 600, }}>
          <ResponsiveContainer width="60%" height={200}>
            <PieChart  
                width="70%"
                height={100}
            >
              <Pie
                data={data}
                innerRadius={72}
                outerRadius={91}
                paddingAngle={1}
                cornerRadius={9}
                startAngle={-180}
                endAngle={179}
                cx="50%"
                cy="50%"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="recharts-text recharts-label text-wrap text-center"
                fill="#333"
                // fontSize={15}
              >
                <tspan className="font-semibold text-base">
                45% 
              </tspan>
              <tspan x="50%" dy="1.2em" className="text-xs font-normal text-sx">Complete</tspan>
              </text>
              
            </PieChart>
          </ResponsiveContainer>
          <Box sx={{ flex: 1, mr: 2 }}>
            {data.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: item.color, mr: 1 }} />
                <Typography variant="body2">{`${item.value}/20 ${item.name}`}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
