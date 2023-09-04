<div align="center">
    <h1>react-native-store-badges</h1>
    <img src="https://raw.githubusercontent.com/usekeyhole/react-native-store-badges/master/img/repo-header.png" alt="React Native Store Badges" />

  <a href="https://www.npmjs.com/package/react-native-store-badges" target="\_parent">
    <img alt="" src="https://img.shields.io/npm/dm/react-native-store-badges.svg" />
  </a>

  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">

  <img src="https://img.shields.io/badge/license-MIT%20-blue" />

  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />

  <img alt="" src="https://img.shields.io/github/stars/usekeyhole/react-native-store-badges.svg?style=social&label=Star" />

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
| **style**       |         <code>ViewStyle?</code>         |               `135`               | Styles for the wrapping View <i>(Be aware of badge guidelines)</i>                                                      |
| **customScale** |        <code>BadgeScale?</code>         |                                   | Use to temporarily correct any issues there may be with badge sizing in a specific locale. ([Read more](#localization)) |

### Localization

> **Note**
> Some locales might have different sized badges. The library attempts to handle this problem, so please create an issue or pull request, if you are experiencing this problem. To temporarily solve this problem you can provide custom scales using the `customScale` prop.

[App Store Locales List](https://www.apple.com/itunes/marketing-on-itunes/identity-guidelines.html#itunes-store-badges#localized-lockups)

[Play Store Locales List](https://play.google.com/intl/en-US/badges/#!#locale)

### Badge Guidelines

> **Warning**
> Be aware of the badge guidelines when using this library.

[App Store Badge Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)

[Play Store Badge Guidelines](https://play.google.com/intl/en_us/badges/)

### Examples

[Expo Snack](https://snack.expo.dev/@reinhardt/react-native-store-badges)

## Known Issues

- The App Store Badge will only load the "en-US" locale on a https connection.
