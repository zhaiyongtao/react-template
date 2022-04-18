/**
 * util - webpack 工具文件
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2022/4/11 5:24 PM
 * @LastEditTime: 2022/4/11 5:24 PM
 */

const packageConfig = require('../../package.json')
const fs = require("fs");

/**
 * 获取版本
 * @returns {string|string}
 */
const getVersion = () => {
    return packageConfig.version || '0.0.1'
}

/**
 * 获取测试版本
 * @returns {*|string}
 * @constructor
 */
const getTestVersion = () => {
    return packageConfig?.testVersion || '0.0.1'

}

/**
 * 获取ENV
 * @returns {string|string}
 */
const getNodeEnv = () => {
    return process.env.NODE_ENV || 'development'
}

/**
 * 根据路径获取文件内容
 * @param curPath
 * @returns {string}
 */
const getReadFileContent = (curPath) => {
    return fs.readFileSync(curPath, 'utf-8')
}

module.exports = {
    getVersion,
    getTestVersion,
    getNodeEnv,
    getReadFileContent
}

