# Design systém — Volba pro Broumov

## Barvy

| Token | Hex | Použití |
|-------|-----|---------|
| `--color-primary` | `#002C51` | Hlavní tmavě modrá — header, nadpisy, tlačítka |
| `--color-secondary` | `#86ACCF` | Světle modrá — akcenty, linky, dekorace |
| `--color-bg` | `#F5F8FB` | Pozadí stránky |
| `--color-bg-card` | `#FFFFFF` | Pozadí karet/sekcí |
| `--color-text` | `#1A2A3A` | Hlavní text |
| `--color-text-muted` | `#4A6080` | Vedlejší text, popisky |
| `--color-border` | `#D0E0EE` | Ohraničení prvků |

## Typografie

- **Font**: Roboto (Google Fonts) — weights 400, 500, 700
- **Nadpis H1**: 2.5rem / 700 / `#002C51`
- **Nadpis H2**: 1.75rem / 700 / `#002C51`
- **Tělo textu**: 1.05rem / 400 / line-height 1.75 / `#1A2A3A`
- **Podpis / Citace**: italic / `#4A6080`

## Logo

- Soubor: `VPB_logo.svg`
- Rozměry originálu: 456 × 160 px (embed: PNG)
- Použití: v headeru, max-width 220px, zachovat poměr stran

## Komponenty

### Tlačítko — Stáhnout petici
- Pozadí: `#002C51`
- Text: `#FFFFFF`
- Hover: `#86ACCF` text + rámeček `#002C51`
- Border-radius: 6px
- Padding: 14px 32px
- Ikona: ⬇ stažení

## Breakpointy

| Název | Min. šířka |
|-------|-----------|
| Mobile | 0px |
| Tablet | 640px |
| Desktop | 1024px |
