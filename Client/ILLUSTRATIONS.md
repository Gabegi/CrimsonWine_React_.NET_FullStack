# Illustrations for Crimson Wines

This document describes the custom illustrations created for the Crimson Wines e-commerce application.

## Available Illustrations

### 1. Empty Basket (`empty-basket.svg`)

- **Purpose**: Displayed when the shopping basket is empty
- **Usage**: Used in the basket page when no items are present
- **Size**: 200x200px

### 2. Wine Bottle Icon (`wine-bottle-icon.svg`)

- **Purpose**: General wine bottle icon for product displays
- **Usage**: Can be used in product cards, navigation, or other wine-related elements
- **Size**: 40x80px

### 3. Wine Glass Icon (`wine-glass-icon.svg`)

- **Purpose**: Wine glass icon for UI elements
- **Usage**: Can be used in buttons, navigation, or decorative elements
- **Size**: 40x60px

### 4. Grape Cluster Icon (`grape-cluster-icon.svg`)

- **Purpose**: Grape cluster icon for wine-related content
- **Usage**: Can be used in headers, category icons, or decorative elements
- **Size**: 60x60px

### 5. Loading Animation (`loading-wine.svg`)

- **Purpose**: Loading state with wine theme
- **Usage**: Displayed during API calls or data loading
- **Size**: 200x200px (animated)

### 6. Success Checkout (`success-checkout.svg`)

- **Purpose**: Success state for completed orders
- **Usage**: Displayed after successful checkout
- **Size**: 200x200px

## React Components

### Illustration Component

```tsx
import Illustration from './components/Illustrations';

// Basic usage
<Illustration type="empty-basket" />

// With custom size
<Illustration type="wine-bottle" width={60} height={120} />
```

### LoadingSpinner Component

```tsx
import LoadingSpinner from './components/LoadingSpinner';

// Basic usage
<LoadingSpinner />

// With custom message
<LoadingSpinner message="Loading your wines..." />
```

### SuccessMessage Component

```tsx
import SuccessMessage from './components/SuccessMessage';

// Basic usage
<SuccessMessage />

// With custom content
<SuccessMessage
  title="Order Placed!"
  message="Your wine order has been successfully placed."
  onContinue={() => navigate('/')}
  continueText="Continue Shopping"
/>
```

## File Locations

All illustrations are stored in:

- `public/images/` - SVG files
- `src/app/components/` - React components

## Design System

### Colors Used

- **Wine Red**: `#8b0000`
- **Dark Brown**: `#2c1810`
- **Light Brown**: `#8b4513`
- **Cork Brown**: `#a0522d`
- **Glass**: `#f5f5dc`
- **Grapes**: `#6a0dad`
- **Success Green**: `#28a745`

### Style Guidelines

- All illustrations use consistent stroke widths
- Colors match the wine theme
- SVG format for scalability
- Responsive design considerations

## Adding New Illustrations

1. Create the SVG file in `public/images/`
2. Add the type to the `IllustrationProps` interface
3. Add the case to the `getImageSrc()` function
4. Update this documentation

## Usage Examples

### In Basket Page

```tsx
import Illustration from "../../components/Illustrations";

// Empty state
<Illustration type="empty-basket" width={200} height={200} />;
```

### In Loading States

```tsx
import LoadingSpinner from "../../components/LoadingSpinner";

// During API calls
<LoadingSpinner message="Loading your basket..." />;
```

### In Success States

```tsx
import SuccessMessage from "../../components/SuccessMessage";

// After checkout
<SuccessMessage
  title="Order Successful!"
  message="Thank you for your purchase. Your wines will be shipped soon."
  onContinue={() => navigate("/")}
/>;
```
