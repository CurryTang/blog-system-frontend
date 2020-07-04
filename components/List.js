import {Menu, Icon, Row, Col, List} from 'antd';
import React, {useState} from 'react';
import Link from 'next/link';
import './static/index.css';
import MarkdownRender from './Markdown';
import {convertTime} from '../helper/helper';

const ListComponent = (props) => {
    return (
        <List 
            header={<div>文章目录</div>}
            itemLayout="vertical"
            dataSource={props.list}
            renderItem={item => (
                <List.Item>
                    <div className="list-title">
                        <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                            <a>{item.name}</a>
                        </Link>    
                    </div>
                    <div className="list-icon">
                        <span><Icon type="calendar" />{convertTime(item.created_at)}</span>
                        <span><Icon type="fire" />{item.view_count}</span>
                    </div>
                    <div className="list-content">
                        <MarkdownRender
                            source={item.introduction}
                            escapeHtml={true}
                        />
                    </div>
                </List.Item>
            )

            }
        />
    )
};

export default ListComponent;