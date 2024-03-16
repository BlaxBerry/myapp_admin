import {
  memo,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";

const centerPositionStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const AppFullPageContentLayout: FC<
  PropsWithChildren<{ isInCenterPosition?: boolean }>
> = ({ children, isInCenterPosition }) => {
  return (
    <div
      style={{
        minHeight: `calc(100vh - 220px)`,
        ...(isInCenterPosition ? centerPositionStyles : {}),
      }}
    >
      {children}
    </div>
  );
};

const AppFullPageContentLayoutMemo = memo(AppFullPageContentLayout);
export default AppFullPageContentLayoutMemo;
