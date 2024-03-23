import type { BasePieChartDataItem } from "myapp_uilib_react";

import { SKILLS_BACKEND, SKILLS_FRONTEND, SkillArea } from "./constants";

/**
 * @description 根据 Skill 的名称判断该技术属于什么领域
 */
export function getSkillAreaByName(skill: string): SkillArea {
  if (SKILLS_FRONTEND.includes(skill)) return SkillArea.frontEnd;
  if (SKILLS_BACKEND.includes(skill)) return SkillArea.backEnd;
  else return SkillArea.other;
}

/**
 * @description 获取指定 Skill 所属的领域的相关 Github Repo 个数
 */
export function getReposTotalBySkillAreaForPieChart(
  dataSource: Array<BasePieChartDataItem>,
  skillArea: SkillArea,
): number {
  return dataSource.filter(
    (item) => getSkillAreaByName(item.label ?? "") === skillArea,
  )?.length;
}
