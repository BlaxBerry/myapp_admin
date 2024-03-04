import { type FC } from "react";

import {
  AppPageContentWrapper,
  BaseButton,
  Paragraph,
  Title,
} from "myapp_uilib_react";

import { useAppNavigation } from "@/utils/hooks";

const NotFoundPage: FC = () => {
  const { backToHomeReplace } = useAppNavigation();

  return (
    <AppPageContentWrapper center>
      <Title variant="h2">404</Title>
      <Paragraph>Page Not Found</Paragraph>

      <br />

      <div>
        <BaseButton onClick={backToHomeReplace}>Back Home</BaseButton>
      </div>
    </AppPageContentWrapper>
  );
};

export default NotFoundPage;
