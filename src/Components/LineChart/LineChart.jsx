import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
      const students = [
            {
                  "name": "Student 1",
                  "math_mark": 85,
                  "physics_mark": 75,
                  "chemistry_mark": 88
            },
            {
                  "name": "Student 2",
                  "math_mark": 78,
                  "physics_mark": 70,
                  "chemistry_mark": 82
            },
            {
                  "name": "Student 3",
                  "math_mark": 92,
                  "physics_mark": 88,
                  "chemistry_mark": 95
            },
            {
                  "name": "Student 4",
                  "math_mark": 65,
                  "physics_mark": 60,
                  "chemistry_mark": 68
            },
            {
                  "name": "Student 5",
                  "math_mark": 72,
                  "physics_mark": 68,
                  "chemistry_mark": 75
            },
            {
                  "name": "Student 6",
                  "math_mark": 88,
                  "physics_mark": 82,
                  "chemistry_mark": 90
            },
            {
                  "name": "Student 7",
                  "math_mark": 95,
                  "physics_mark": 90,
                  "chemistry_mark": 98
            },
            {
                  "name": "Student 8",
                  "math_mark": 70,
                  "physics_mark": 62,
                  "chemistry_mark": 75
            },
            {
                  "name": "Student 9",
                  "math_mark": 82,
                  "physics_mark": 78,
                  "chemistry_mark": 85
            },
            {
                  "name": "Student 10",
                  "math_mark": 91,
                  "physics_mark": 85,
                  "chemistry_mark": 92
            }
      ];
      return (
            <div>
                  <LChart width={1800} height={400} data={students}>
                        <XAxis dataKey="name" />
                        <YAxis dataKey="" />
                        <Line type="monotone" dataKey="math_mark" stroke='red' />
                        <Line type="monotone" dataKey="physics_mark" stroke='yellow' />
                        <Line type="monotone" dataKey="chemistry_mark" />
                  </LChart>

            </div >
      );
};

export default LineChart;