import { FrameWorkProtocolContent, FrameWorkProtocolConfig } from './framework.js'
import { ModuleAProtocolContent, ModuleAProtocolConfig } from './moduleA.js'
// 合并协议配置内容并导出
export const ProtocolContent = Object.assign(FrameWorkProtocolContent, ModuleAProtocolContent)
export const ProtocolConfig = Object.assign(FrameWorkProtocolConfig, ModuleAProtocolConfig)
