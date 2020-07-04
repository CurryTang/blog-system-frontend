import React, { Component } from 'react';
import {Avatar, Divider, Tooltip} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Author = () => {
    return (
        <div className="author-page">
            <div className="avatar">
                <Avatar src='http://www.520touxiang.com/uploads/allimg/2018121313/v33lv4g3ix2.jpg' alt="avatar"/>
            </div>
            <div className="my-intro">
                Hello Everyone, my name is czk
            </div>
            <Divider>My Contact</Divider>
            <Tooltip title="B站 :https://space.bilibili.com/13625659">
                    <a href="https://space.bilibili.com/13625659" target="_blank">
                    <Avatar size={28} className="account">B</Avatar>
                    </a>
            </Tooltip>
            <Tooltip title="https://github.com/CurryTang">
                <a href="https://github.com/CurryTang" target="_blank">
                <Avatar size={28} icon="github" className="account"  />
                </a>
            </Tooltip>
        </div>
    )
};

export default Author;



