import axiosInstance from "../../utils/libs/axiosInstance";
import { ENTRYPOINTS } from "../entrypoints";

/**
 * @description 获取指定 id 对应的 Scenario 列表 ( nodes )
 * ```ts
 * const { data } = await getScenarioDataById("123");
 * ```
 */
const getScenarioDataById = (id: string) => {
  const url = ENTRYPOINTS.SCENARIO.getScenarioDataById(id);
  return axiosInstance.get(url);
};

/**
 * @description 删除指定 id 对应的
 * ```ts
 * const { data } = await deleteScenarioById("123");
 * ```
 */
const deleteScenarioById = (id: string) => {
  const url = ENTRYPOINTS.SCENARIO.deleteScenarioById(id);
  return axiosInstance.delete(url);
};

/**
 * @description 更新指定 id 对应的
 * ```ts
 * const { data } = await updateScenarioById("123");
 * ```
 */
const updateScenarioById = (id: string) => {
  const url = ENTRYPOINTS.SCENARIO.updateScenarioById(id);
  return axiosInstance.patch(url);
};

export default {
  getScenarioDataById,
  deleteScenarioById,
  updateScenarioById,
};
