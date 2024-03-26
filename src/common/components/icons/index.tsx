/* eslint-disable react/display-name */
import { memo, type CSSProperties } from "react";

import { adminCommonStyles } from "@/styles/common";
import { AiOutlineClear, AiOutlineLink } from "react-icons/ai";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FaGithub, FaRegSave } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
import { IoIosWarning } from "react-icons/io";
import { IoGitCommit, IoLogOutOutline } from "react-icons/io5";
import { LuWorkflow } from "react-icons/lu";
import { MdEditNote } from "react-icons/md";
import { PiChatsBold } from "react-icons/pi";
import {
  RiArrowLeftDoubleLine,
  RiFolderDownloadLine,
  RiFolderUploadLine,
} from "react-icons/ri";
import {
  TbBrandDatabricks,
  TbSortAscending2,
  TbSortDescending2,
} from "react-icons/tb";

/**
 * login、logout
 * ----------------------------------------------------------------------------------------------------
 */
export const LogoutIcon = memo(() => (
  <IoLogOutOutline style={{ fontSize: 22 }} />
));

/**
 * save、clear
 * ----------------------------------------------------------------------------------------------------
 */
export const SaveIcon = memo(() => <FaRegSave style={{ fontSize: 20 }} />);
export const ClearIcon = memo(() => (
  <AiOutlineClear style={{ fontSize: 25 }} />
));

/**
 * folderUpload、folderDownload
 * ----------------------------------------------------------------------------------------------------
 */
export const FolderUploadIcon = memo(() => (
  <RiFolderUploadLine style={{ fontSize: 23 }} />
));
export const FolderDownloadIcon = memo(() => (
  <RiFolderDownloadLine style={{ fontSize: 23 }} />
));

/**
 * Edit、Draft
 * ----------------------------------------------------------------------------------------------------
 */
export const EditIcon = memo(() => <MdEditNote style={{ fontSize: 25 }} />);

/**
 * sortAsc、sortDesc
 * ----------------------------------------------------------------------------------------------------
 */
export const SortAscIcon = memo(() => (
  <TbSortAscending2 style={{ fontSize: 20 }} />
));
export const SortDescIcon = memo(() => (
  <TbSortDescending2 style={{ fontSize: 20 }} />
));

/**
 * arrows
 * ----------------------------------------------------------------------------------------------------
 */
export const LeftDoubleArrowIcon = memo(
  ({ style }: { style: CSSProperties }) => (
    <RiArrowLeftDoubleLine style={style} />
  ),
);
export const RightDoubleArrowIcon = memo(
  ({ style }: { style: CSSProperties }) => (
    <RiArrowLeftDoubleLine style={style} />
  ),
);

/**
 * navigation
 * ----------------------------------------------------------------------------------------------------
 */
export const NavHomeIcon = memo(() => <FiHome style={{ fontSize: 20 }} />);
export const NavAnalysisIcon = memo(() => (
  <GrAnalytics style={{ fontSize: 20 }} />
));
export const NavScenarioIcon = memo(() => (
  <LuWorkflow style={{ fontSize: 20 }} />
));
export const NavChatIcon = memo(() => <PiChatsBold style={{ fontSize: 20 }} />);
export const NavNotesIcon = memo(() => (
  <TbBrandDatabricks style={{ fontSize: 20 }} />
));

/**
 * others
 * ----------------------------------------------------------------------------------------------------
 */
export const GithubIcon = memo(() => <FaGithub style={{ fontSize: 20 }} />);
export const GithubCommitIcon = memo(() => (
  <IoGitCommit style={{ marginRight: 4 }} />
));
export const LinkIcon = memo(() => <AiOutlineLink style={{ fontSize: 20 }} />);

/**
 * scenario nodes
 * ----------------------------------------------------------------------------------------------------
 */
export const ScenarioNodeWarningIcon = memo(() => (
  <IoIosWarning style={{ marginRight: adminCommonStyles.margin / 2 }} />
));
export const ScenarioNodeResizerArrowIcon = memo(() => (
  <CgArrowsExpandLeft
    style={{
      color: "#ff0071",
      position: "absolute",
      right: 5,
      bottom: 5,
    }}
  />
));
