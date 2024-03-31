interface GraphNodeI {
  /** 数据唯一项 */
  id: string
  /** 所在分组 */
  group: string
  /** 位置 */
  left: number
  /** 宽度 */
  width: number
  /** 上下文 */
  context: any
  /** 前置依赖 */
  before: string[]
  /** 后置依赖 */
  after: string[]
}