import React from 'react';
import {
    IconDashboard,
    IconList,
    IconReceiptRupee,
    IconFileInvoice,
    IconSwitchHorizontal,
    IconLogout
} from '@tabler/icons-react'
import Link from 'next/link';
import classes from './Navbar.module.css'
import { usePathname } from 'next/navigation';
import { Group, Code, Button } from '@mantine/core';


const data = [
{ link: '/ ', label: 'Dashboard', icon: IconDashboard },
{ link: '/product-list', label: 'Product List', icon: IconList },
{ link: '/expense-tracking', label: 'Expense Tracking', icon: IconReceiptRupee },
{ link: '/transactions', label: 'Create Bill', icon: IconFileInvoice }
];

export const Navbar = () => {
    const pathname = usePathname();
    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active = {item.link == pathname || undefined}
            href={item.link}
            key = {item.label}
        >
        <item.icon className={classes.linkIcon} stroke ={2.5} />
        <span>{item.label}</span>
        </Link>

    ));
    return  (
        <nav className = {classes.navbar}>
            <div className = {classes.navbarMain}>
                <Group className= {classes.header} justify="space-between">
                    Bagaicha Restro And Bar
                </Group>
                {links}
            </div>
            
            <div className = {classes.footer}>
                <Link 
                    href = "/profile"
                    className = {classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5}/>
                    <span>Change Account</span>
                </Link>

                <Link 
                    href = "#"
                    className = {classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5}/>
                    <span>Logout</span>
                </Link>


            </div>
        </nav>
    );
}
