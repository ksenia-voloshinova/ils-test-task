import React from 'react';
import {Menu} from "antd";
import {useDispatch} from "react-redux";
import {selectRoute} from "../../reducers/markersSlice";

const ListRoutes = () => {
    const items:string[] = ["Маршрут №1", "Маршрут №2", "Маршрут №3"];
    const dispatch = useDispatch();
    const handleSelect = (index:number) => {
        dispatch(selectRoute(index));
    };
    return (
        <Menu
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub0']}
        >
            {items.map((item, index)=> {
                return (
                    <Menu.Item key={index} onClick={() => handleSelect(index)}>
                        {item}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
}

export default ListRoutes;
