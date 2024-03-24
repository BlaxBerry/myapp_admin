/* eslint-disable react/display-name */
import { BaseParagraph, type BaseParagraphProps } from "myapp_uilib_react";
import { memo, type FC, type PropsWithChildren } from "react";

type CommonProps = FC<PropsWithChildren<BaseParagraphProps>>;

/**
 * paragraphs in page
 * ----------------------------------------------------------------------------------------------------
 */
export const PageTitle: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph noWrap variant="h3" fontWeight={600} {...props}>
    {children}
  </BaseParagraph>
));
export const PageSubTitle: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph noWrap variant="h6" fontWeight={600} {...props}>
    {children}
  </BaseParagraph>
));
export const PageText: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph noWrap variant="body1" {...props}>
    {children}
  </BaseParagraph>
));
export const PageSubText: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph noWrap variant="subtitle2" color="GrayText" {...props}>
    {children}
  </BaseParagraph>
));

/**
 * paragraphs in widget & component
 * ----------------------------------------------------------------------------------------------------
 */
export const WidgetLabel: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph noWrap variant="h6" fontWeight={600} {...props}>
    {children}
  </BaseParagraph>
));
export const WidgetSubLabel: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph
    noWrap
    variant="subtitle1"
    color="GrayText"
    fontWeight={600}
    {...props}
  >
    {children}
  </BaseParagraph>
));
export const WidgetText: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph variant="body2" {...props}>
    {children}
  </BaseParagraph>
));
export const WidgetSubText: CommonProps = memo(({ children, ...props }) => (
  <BaseParagraph variant="caption" {...props}>
    {children}
  </BaseParagraph>
));
