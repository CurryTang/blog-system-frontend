import Head from 'next/head';
import {useRouter} from 'next/router';
import axios from 'axios';
import servicePath from '../../config/apiurl';
import Header from '../../components/Header';
import ListComponent from '../../components/List';
import AuthorComponent from '../../components/Author';
import Footer from '../../components/Footer';
import {Button, Row, Col} from 'antd';
import React, {useState, useEffect} from 'react';

const Cat = () => {
    const [listdata, setListData] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const getData = async () => {
            const {cat} = router.query;
            const res = await axios.get(servicePath.articleByType + cat);
            setListData(res.data);
        };
        getData();
    }, []);


    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="main-content">
            <Row type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                <ListComponent list={listdata}/>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <AuthorComponent />
                </Col>
            </Row>
            </div>
            <Footer />
        </div>
    );
}

Cat.getInitialProps = (ctx) => {
    return {
        "hello": "world"
    };
}

export default Cat;