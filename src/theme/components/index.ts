import { ThemeOptions } from '@mui/material';
import { CssBaselineTheme } from './cssBaseline.theme';
import { ButtonVariants } from './button.theme';
import { TypographyVariants } from './typography.theme';
import { LinkVariants } from './link.theme';
import { BreadcrumbsVariants } from './breadcrumbs.theme';
import { AppBarVariants } from '@/src/theme/components/appBar.theme';
import { CardVariants } from '@/src/theme/components/card.theme';
import { AvatarVariants } from '@/src/theme/components/avatar.theme';
import { AvatarGroupVariants } from '@/src/theme/components/avatarGroup.theme';
import { CardHeaderVariants } from '@/src/theme/components/cardHeader.theme';
import { TabVariants } from '@/src/theme/components/tab.theme';
import { TabsVariants } from '@/src/theme/components/tabs.theme';
import { TextFieldVariants } from '@/src/theme/components/textField.theme';
import { ToggleButtonGroupVariants } from '@/src/theme/components/toggleButtonGroup.theme';
import { ToggleButtonVariants } from '@/src/theme/components/toggleButton.theme';
import { SelectVariants } from '@/src/theme/components/select.theme';
import { BackdropVariants } from '@/src/theme/components/backdropVariants';
import { DialogVariants } from '@/src/theme/components/dialogVariants';

/**
 * @ThemeOptions['components']
 * Here we can define the components theme
 *
 * @see https://material-ui.com/customization/components/#components
 */
export const ComponentTheme: ThemeOptions['components'] = {
  MuiCssBaseline: CssBaselineTheme,
  MuiButton: ButtonVariants,
  MuiTypography: TypographyVariants,
  MuiLink: LinkVariants,
  MuiBreadcrumbs: BreadcrumbsVariants,
  MuiAppBar: AppBarVariants,
  MuiAvatarGroup: AvatarGroupVariants,
  MuiAvatar: AvatarVariants,
  MuiCard: CardVariants,
  MuiCardHeader: CardHeaderVariants,
  MuiTab: TabVariants,
  MuiTabs: TabsVariants,
  MuiTextField: TextFieldVariants,
  MuiToggleButtonGroup: ToggleButtonGroupVariants,
  MuiToggleButton: ToggleButtonVariants,
  MuiSelect: SelectVariants,
  MuiBackdrop: BackdropVariants,
  MuiDialog: DialogVariants,
};
