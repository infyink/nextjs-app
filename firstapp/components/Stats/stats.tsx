import { Text } from '@mantine/core';
import classes from './StatsGroup.module.css';

export const Stats = () => {
    const data = [
    {
        title: 'Sales',
        stats: 'NRs. 456,133',
        description: 'Total amount of sales',
    },
    {
        title: 'Expenses',
        stats: 'NRs. 2,175',
        description: 'Total amount of Expenses',
    },
    {
        title: 'Profit',
        stats: 'NRs. 1,994',
        description: 'Profit Made',
    },
    ];
    

    const stats = data.map((stat)=> (
        <div key = {stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));
    return <div className={classes.root}>{stats}</div>;
}
