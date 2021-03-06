import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import { history } from '../routes/AppRouter';

const { Sider } = Layout;

class SiderMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    /**
     * Collapse the left side menu.
     * @param collapsed
     */
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    /**
     * Redirect to the list users
     */
    routeUsers = () => {
        history.push('/users');
    };

    /**
     * Redirect to the create a new users
     */
    routeNewUser = () => {
        history.push('/users/new');
    };

    render() {
        let { menuSelected } = this.props;
        let { collapsed } = this.state;

        return (
            <Sider
                className="sider-menu"
                breakpoint="md"
                collapsedWidth="0"
                collapsed={collapsed}
                onCollapse={this.onCollapse}
                width={150}
            >
                <div className="logo" />

                <Menu theme="dark" defaultSelectedKeys={menuSelected} mode="inline">
                    <Menu.Item key="1" onClick={this.routeUsers}>
                        <Icon type="user" />
                        <span>User List</span>
                    </Menu.Item>

                    <Menu.Item key="2" onClick={this.routeNewUser}>
                        <Icon type="user-add" />
                        <span>New User</span>
                        <Link to="/users/new">new user</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SiderMenu;
