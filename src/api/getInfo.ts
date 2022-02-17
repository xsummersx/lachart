/*
 * @Author: your name
 * @Date: 2022-02-17 11:06:17
 * @LastEditTime: 2022-02-17 11:32:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\api\getInfo.ts
 */
import {Request} from "../axios/request";
export function getInfo(token:string){
    return Request.axiosInstantce({
        url:"KSFX/GetUserInfo?token="+token,
        method:"get",
        data:{}
    })
}