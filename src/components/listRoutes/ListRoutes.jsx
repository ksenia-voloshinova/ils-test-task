import React from 'react';
import {Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectRoute} from "../../reducers/routesSlice";
import {fetchDataRoutes} from "../../selectors/selectors";

const ListRoutes = () => {
    const { dataRoutes } = useSelector(fetchDataRoutes);
    const dispatch = useDispatch();
    const handleSelect = (index:number) => {
        dispatch(selectRoute(index));
    };
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
        >
            {dataRoutes.map((item, index)=> {
                return (
                    <Menu.Item key={item.key} onClick={() => handleSelect(index)}>
                        Маршрут №{item.key}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
}

export default ListRoutes;
