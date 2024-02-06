import axiosInstance from "../libs/axiosInstance";

/**
 * @description 获取 Scenario 列表
 * ```ts
 * const { data } = await getScenarioList();
 * ```
 */
const getScenarioList = () => {
  const url = "/api/scenario/list";
  return axiosInstance.get(url);
};

/**
 * @description 获取指定 id 对应的
 * ```ts
 * const { data } = await getScenarioById("123");
 * ```
 */
const getScenarioById = (id: string) => {
  const url = `api/scenario/${id}`;
  return axiosInstance.get(url);
};

/**
 * @description 删除指定 id 对应的
 * ```ts
 * const { data } = await getScenarioById("123");
 * ```
 */
const deleteScenarioById = (id: string) => {
  const url = `api/scenario/${id}`;
  return axiosInstance.delete(url);
};

/**
 * @description 更新指定 id 对应的
 * ```ts
 * const { data } = await getScenarioById("123");
 * ```
 */
const updateScenarioById = (id: string) => {
  const url = `api/scenario/${id}`;
  return axiosInstance.patch(url);
};

export default {
  getScenarioList,
  getScenarioById,
  deleteScenarioById,
  updateScenarioById,
};
