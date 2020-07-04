import {Row, Col, Menu, Icon} from 'antd';
import './static/header.css';
import axios from 'axios';
import servicePath from '../config/apiurl';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const mapping = {
    'article': 'message',
    'video': 'youtube', 
    'tutorial': 'smile'
};

const Header = () => {
    const [navtype, setnavtype] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const category = await axios.get(servicePath.types);
            setnavtype(category.data);
        }
        getData();
    }, []);
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Link href={{pathname: '/index'}}>
                    <a className="header-text">高桥镇老年干休所</a>
                    </Link>
                </Col>
                <Col className="header-nav" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" inlineIndent={40}>
                        {
                            navtype.filter((item) => (
                                item.name != null)).map(
                                (item) => (
                                    <Menu.Item key={item.id}>
                                        {/* <Link href="/cat/[cat]" as={`/cat/${item.id}`}> */}
                                        <Link href={{pathname: `/cat/${item.id}`}}>
                                            <span>
                                            <Icon type={`${mapping[item.name]}`}></Icon>
                                            <a>{item.name}</a>
                                            </span>
                                        </Link>
                                    </Menu.Item>
                                )
                            )
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )

}

export default Header;