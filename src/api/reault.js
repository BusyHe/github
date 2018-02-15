/**
 * Created by busyhe on 2018/2/15 下午1:21.
 * Email: 525118368@qq.com
 */
import baseHttp from '../util/baseHttp'

export const getResult = async () => {
    return await baseHttp.get('https://gank.io/api/random/data/Android/20')
};