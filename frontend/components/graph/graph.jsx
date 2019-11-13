import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Graph = ({ data, name }) => {
    // debugger
    return (
        <div className={name}>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis hide={true} dataKey='label' />
                    <YAxis hide={true} tickLine={false} dataKey='close' type='number' domain={['dataMin', 'dataMax']} />
                    <Tooltip cursor={{ stroke: 'lightgrey', strokeWidth: 1 }} />
                    <Line type="linear" connectNulls={true} dot={false} stroke="#82ca9d" dataKey='close'/>
                </LineChart>
            </ ResponsiveContainer>
            {/* <ul className='time-list'>
                <li>1D</li>
                <li>1W</li>
                <li>1M</li>
                <li>3M</li>
                <li>1Y</li>
                <li>5Y</li>
            </ul>
            <hr/>  */}
        </div>
    )
}

export default Graph;