import App from 'next/app';

import 'antd/dist/antd.css';
import '../components/static/global.css';


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}