import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { EditIcon, LogoutIcon } from "@/common/components";

export default function useAppHeaderAccount() {
  const { t } = useTranslation();

  const headerAvatar = {
    alt: "BlaxBerry",
    src: "https://avatars.githubusercontent.com/u/73395592?v=4",
  };

  const appHeaderAccountListSubheader = useMemo(
    () => ({
      children: "blaxberry@123.example.com",
    }),
    [],
  );

  const appHeaderAccountListData = useMemo(
    () => [
      {
        id: "account-edit",
        text: t("account.edit"),
        icon: <EditIcon />,
        onClick: () => {},
      },
    ],
    [t],
  );

  const appHeaderAccountExtraListData = useMemo(
    () => [
      {
        id: "account-logout",
        text: t("account.logout"),
        icon: <LogoutIcon />,
        onClick: () => {},
      },
    ],
    [t],
  );

  return {
    appHeaderAccountProps: {
      avatarProps: headerAvatar,
      listProps: {
        listSubheader: appHeaderAccountListSubheader,
        data: appHeaderAccountListData,
        extraData: appHeaderAccountExtraListData,
      },
    },
  };
}
