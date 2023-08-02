import React from 'react';
import {Menu} from "antd";

const Menu = (props) => {
    return (

        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
        >
            <Menu.Item key="1">
                Navigation One
            </Menu.Item>
            <Menu.Item key="2">
                Navigation One
            </Menu.Item>
            <Menu.Item key="3">
                Navigation One
            </Menu.Item>
        </Menu>
    );
}

export default Menu;
