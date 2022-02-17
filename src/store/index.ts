/*
 * @Author: your name
 * @Date: 2022-02-17 18:23:09
 * @LastEditTime: 2022-02-17 18:40:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\src\store\index.ts
 */
import { defineStore} from 'pinia'
export const useStore = defineStore("main",{
    state:()=>{
        return {
            name:'back',
            cont:1
        }
    },
    getters:{
        doubleCont(state){
            return state.cont * 2
        }
    },
    actions:{
        changState(value:string){
            this.name = value
        }
    }
})