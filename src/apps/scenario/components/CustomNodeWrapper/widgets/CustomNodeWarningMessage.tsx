import { BaseParagraph } from "myapp_uilib_react";
import { memo, type FC } from "react";
import { IoIosWarning } from "react-icons/io";

const CustomNodeWarningMessage: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: -24,
        left: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <IoIosWarning />
      <BaseParagraph style={{ fontSize: 12, marginLeft: 4, fontWeight: 600 }}>
        Node Data Is Not Valid
      </BaseParagraph>
    </div>
  );
};

const CustomNodeWarningMessageMemo = memo(CustomNodeWarningMessage);
export default CustomNodeWarningMessageMemo;
