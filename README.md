# react-native-store-badges

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

| Name         |                  Type                   |              Default              | Description                                                             |
| :----------- | :-------------------------------------: | :-------------------------------: | :---------------------------------------------------------------------- |
| **platform** |   <code>"ios" &#124; "android"</code>   |            `required`             | App Store or Play Store badge                                           |
| **locale**   |          <code>string?</code>           | `navigator.language` or `"en-US"` | Locale code                                                             |
| **height**   |          <code>number?</code>           |               `40`                | Height of the badge <i>(width is calculated)</i>                        |
| **href**     |          <code>string?</code>           |                                   | URL of App Store or Play Store                                          |
| **target**   | <code>HTMLAttributeAnchorTarget?</code> |            `"_blank"`             | `target`-attribute is only used on Web platforms                        |
| **style**    |         <code>ViewStyle?</code>         |               `135`               | Styles for the wrapping Pressable <i>(Be aware of badge guidelines)</i> |

### Localization

### Badge Guidelines

## Known Issues
