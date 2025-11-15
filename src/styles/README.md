# System SCSS - Architektura Stylów

## 🎯 Cel dokumentu

Ten dokument opisuje kompletny system SCSS dla projektu Preact + Vite + TypeScript, zaprojektowany zgodnie z najlepszymi praktykami nowoczesnego frontend developmentu.

## 📁 Struktura folderów SCSS

```text
src/styles/
├── base/
│   ├── _reset.scss         # Reset CSS i podstawowe style
│   ├── _typography.scss    # Definicje typografii
│   ├── _colors.scss        # System kolorów i motywów
│   └── _variables.scss     # Zmienne SCSS
├── components/
│   ├── _buttons.scss       # Style przycisków
│   ├── _cards.scss         # Style kart
│   ├── _forms.scss         # Style formularzy
│   └── _layout.scss        # Style layout komponentów
├── layout/
│   ├── _grid.scss          # System siatki
│   ├── _container.scss     # Style kontenerów
│   └── _spacing.scss       # System odstępów
├── utilities/
│   ├── _spacing.scss       # Utility klasy dla odstępów
│   ├── _display.scss       # Utility klasy display
│   └── _position.scss      # Utility klasy position
├── themes/
│   ├── _light.scss         # Motyw jasny
│   ├── _dark.scss          # Motyw ciemny
│   └── _auto.scss          # Auto-detekcja systemu
├── globals/
│   ├── _animations.scss    # Animacje
│   ├── _transitions.scss   # Transicje
│   └── _mixins.scss        # Mixiny
└── index.scss              # Główny plik importujący
```

## 🎨 Zasady projektowania

### System kolorów

- **Semantic Colors**: `--color-primary`, `--color-secondary`, `--color-error`, `--color-success`
- **Theme Support**: Automatyczne przełączanie motywów przez CSS variables
- **Kontrast**: Minimum WCAG AA (4.5:1 dla tekstu, 3:1 dla UI)

### Mobile-First Approach

- **Base styles**: 320px i więcej
- **Breakpoints**: Używaj `min-width` media queries
- **Touch targets**: Minimum 44px dla elementów dotykowych

### Modułowość

- **CSS Modules**: Dla komponentów specyficznych
- **SCSS Partial**: Fragmenty kodu w osobnych plikach
- **BEM Naming**: Spójna metodologia nazewnictwa

## 🚀 Implementacja

### 1. Główny plik SCSS

```scss
// src/styles/index.scss
@forward 'base/variables';
@forward 'base/reset';
@forward 'base/typography';
@forward 'base/colors';

@use 'layout/grid';
@use 'layout/container';
@use 'layout/spacing';

@use 'globals/animations';
@use 'globals/transitions';
@use 'globals/mixins';

@use 'components/buttons';
@use 'components/cards';
@use 'components/forms';
@use 'components/layout';

@use 'utilities/spacing';
@use 'utilities/display';
@use 'utilities/position';
```

### 2. System uniwersalnych klas

```scss
// Layout utilities
.grid { display: grid; gap: var(--spacing-lg); }
.gridAutoFit { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.container { max-width: var(--max-width); margin: 0 auto; }

// Typography utilities  
.heading { font-size: var(--font-size-2xl); font-weight: 700; }
.subheading { font-size: var(--font-size-lg); font-weight: 600; }

// Interactive utilities
.interactive { transition: transform 0.2s ease; }
.interactive:hover { transform: scale(1.05); }
```

### 3. System motywów

```scss
:root {
  // Light theme (default)
  --color-primary: #646cff;
  --color-text: #213547;
  --color-bg: #ffffff;
}

:root[data-theme="dark"] {
  --color-primary: #535bf2;
  --color-text: rgba(255, 255, 255, 0.87);
  --color-bg: #242424;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-primary: #535bf2;
    --color-text: rgba(255, 255, 255, 0.87);
    --color-bg: #242424;
  }
}
```

## 📋 Lista kontrolna implementacji

- [x] Struktura folderów SCSS
- [x] System uniwersalnych klas globalnych
- [x] System motywów z CSS variables
- [x] Mobile-first breakpoints
- [x] Accessibility (WCAG AA)
- [ ] Migracja z istniejących plików CSS
- [ ] Testowanie kompatybilności z Preact
- [ ] Optymalizacja bundle size
- [ ] Integracja z Vite build process

## 🔧 Przykłady użycia

### W komponencie Preact

```tsx
// Komponent używający SCSS modules
import styles from './Component.module.scss';

export const MyComponent = () => (
  <div className={`${styles.container} container card cardPadded`}>
    <h1 className={`${styles.title} heading`}>Tytuł</h1>
    <p className={`${styles.description} subheading`}>Opis</p>
  </div>
);
```

### Globalne style

```tsx
// main.tsx
import './styles/index.scss';
```

## 🎯 Korzyści systemu

1. **Skalowalność**: Łatwe dodawanie nowych komponentów
2. **Maintainability**: Centralne definicje kolorów i zmiennych
3. **Performance**: Optymalizowany bundle z Vite
4. **Accessibility**: Wbudowane standardy WCAG
5. **Developer Experience**: Spójne naming conventions i tooling

## 📖 Dalsze kroki

1. Implementacja bazowych plików SCSS
2. Migracja istniejących stylów CSS
3. Testowanie responsywności
4. Optymalizacja i profiling
5. Dokumentacja dla zespołu
