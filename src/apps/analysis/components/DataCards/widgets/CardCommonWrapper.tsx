import { BasePaper } from "myapp_uilib_react";
import {
  memo,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";

import CardCommonWrapperError from "./CardCommonWrapperError";
import CardCommonWrapperLoading from "./CardCommonWrapperLoading";
import CardCommonWrapperTitles, {
  type CardCommonWrapperTitlesProps,
} from "./CardCommonWrapperTitles";

type CardCommonWrapperProps = PropsWithChildren<{
  isLoadingData: boolean;
  error: Error | null;
  refetchData: () => void;

  cardWidth: number;
  cardHeight: number;
  cardStyle?: CSSProperties;
  cardContentStyle?: CSSProperties;

  cardTitle: CardCommonWrapperTitlesProps["title"];
  cardSubTitle?: CardCommonWrapperTitlesProps["subTitle"];
}>;

const CardCommonWrapper: FC<CardCommonWrapperProps> = ({
  isLoadingData,
  error,
  refetchData,
  cardWidth,
  cardHeight,
  cardStyle,
  cardContentStyle,
  cardTitle,
  cardSubTitle,
  children,
}) => {
  if (isLoadingData) {
    return <CardCommonWrapperLoading width={cardWidth} height={cardHeight} />;
  }

  if (!isLoadingData && !!error) {
    return (
      <CardCommonWrapperError
        width={cardWidth}
        height={cardHeight}
        error={error}
        refetch={refetchData}
      />
    );
  }

  return (
    <BasePaper
      contentProps={{
        style: {
          width: cardWidth,
          height: cardHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...cardStyle,
        },
      }}
    >
      {/* title */}
      <CardCommonWrapperTitles title={cardTitle} subTitle={cardSubTitle} />

      {/* content */}
      <div
        style={{
          flex: 1,
          ...cardContentStyle,
        }}
      >
        {children}
      </div>
    </BasePaper>
  );
};

const CardCommonWrapperMemo = memo(CardCommonWrapper);
export default CardCommonWrapperMemo;
