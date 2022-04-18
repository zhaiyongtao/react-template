/**
 * variable - webpack 变量
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2022/4/11 18:12
 * @LastEditTime: 2022/4/11 18:12
 */


const webpackUtils = require('./util')
const dotenv = require('dotenv');
const path = require('path');


const {getNodeEnv} = webpackUtils
const { config: loadConfig } = dotenv;



// 获取当前node环境
const NODE_ENV = getNodeEnv()
// 开发环境
const IS_DEV = NODE_ENV === 'development'
// 生产环境
const IS_PROD = NODE_ENV === 'production'


//构建目录
const DIST_PATH = path.resolve(__dirname, '../../', 'dist');
//源码目录
const SRC_PATH = path.resolve(__dirname, '../../', 'src');
//public 目录
const PUBLIC_PATH = path.resolve(__dirname, '../../', 'public');
//根节点目录
const ROOT_PATH = path.resolve(__dirname, '../../');


const ENV_CONFIG_PATH = path.resolve(ROOT_PATH, 'env', `${NODE_ENV}.env`);

//webpack 读取env 配置
loadConfig({
    path: ENV_CONFIG_PATH,
});
