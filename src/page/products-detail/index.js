import React, {
    Component
} from 'react';

import { Link } from 'react-router-dom';
import utils from '../../common/module/utils';
import './index.scss';
import BaseComponent from '../../common/base/page-base-com';

export default class Index extends BaseComponent {

    constructor(props, context) {
        super(props);
    }

    static async  getInitialProps() {
        return {
            page: {
                tdk: {
                    title: 1,
                    keyword: 2,
                    description: 3
                }
            },
            fetchData: {}
        }
    }

    componentDidMount() {
        console.log('process.env.IS_DEV', process.env.IS_DEV);
    }

    render() {
        return <div>
            产品详情页面
        </div>
    }

}
