/*
 * @Author: your name
 * @Date: 2022-02-18 14:24:36
 * @LastEditTime: 2022-02-18 15:42:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lachart\utils\login.ts
 */
import type { ElForm } from "element-plus";
import { ElMessage } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>;
//登录的校验
export const submitForm = (formDOM: FormInstance | undefined) => {
  console.log(formDOM);
  (formDOM as FormInstance).validate((valid) => {
    if (valid) {
      console.log("submit!");
      ElMessage({
        message: "提交成功",
        type: "success"
      })
    } else {
      console.log("error submit!");
      ElMessage({
        message: "提交失败",
        type: "error"
      });
    }
  })
}
