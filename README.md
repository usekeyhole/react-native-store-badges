# react-native-store-badges
<div align="center">
      <img src="https://raw.githubusercontent.com/usekeyhole/react-native-store-badges/master/img/repo-header.png" alt="React Native Store Badges" />
</div>

## Getting Started

```
npm install react-native-store-badges
```

## Usage

```tsx
import { StoreBadge } from "react-native-store-badges";

const MyApp = () => {
  return (
    <StoreBadge
      platform="ios"
      href="https://www.github.com" // optional
      height={60} // optional
      locale="da-DK" // optional
    />
  );
};
```

### Props

| Name            |                  Type                   |              Default              | Description                                                                                                             |
| :-------------- | :-------------------------------------: | :-------------------------------: | :---------------------------------------------------------------------------------------------------------------------- |
| **platform**    |   <code>"ios" &#124; "android"</code>   |            `required`             | App Store or Play Store badge                                                                                           |
| **locale**      |          <code>string?</code>           | `navigator.language` or `"en-US"` | Locale code                                                                                                             |
| **height**      |          <code>number?</code>           |               `40`                | Height of the badge <i>(width is calculated)</i>                                                                        |
| **href**        |          <code>string?</code>           |                                   | URL of App Store or Play Store                                                                                          |
| **target**      | <code>HTMLAttributeAnchorTarget?</code> |            `"_blank"`             | `target`-attribute is only used on Web platforms                                                                        |
| **style**       |         <code>ViewStyle?</code>         |               `135`               | Styles for the wrapping Pressable <i>(Be aware of badge guidelines)</i>                                                 |
| **customScale** |        <code>BadgeScale?</code>         |                                   | Use to temporarily correct any issues there may be with badge sizing in a specific locale. ([Read more](#localization)) |

### Localization

> **Note**
> Some locales might have different sized badges. The library attempts to handle this problem, so please create an issue or pull request, if you are experiencing this problem.

[App Store Locales List](https://www.apple.com/itunes/marketing-on-itunes/identity-guidelines.html#itunes-store-badges#localized-lockups)

[Play Store Locales List](https://play.google.com/intl/en-US/badges/#!#locale)

### Badge Guidelines

> **Warning**
> Be aware of the badge guidelines when using this library.

[App Store Badge Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)

[Play Store Badge Guidelines](https://play.google.com/intl/en_us/badges/)

### Examples

[Expo Snack](https://snack.expo.dev/@reinhardt/react-native-store-badges)
