import { adminCommonStyles } from "@/styles/common";

export const commonStyles = {
  padding: adminCommonStyles.padding,
  margin: adminCommonStyles.margin,
};

export const smallContainerStyle = {
  width: 300,
  height: 150,
};

export const doubleContainerStyle = {
  width: smallContainerStyle.width * 2 + commonStyles.padding * 2,
  height: smallContainerStyle.height * 2 + commonStyles.padding * 2,
};
