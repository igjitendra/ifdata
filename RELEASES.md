# InvoiceFine Releases

Official release notes, platform packages, and version changelog history for **InvoiceFine**.

---

## Latest Releases

### 💻 Linux Desktop — Version 1.2.0

- **Release Date**: September 17, 2026
- **Platforms**: Linux (Debian, Ubuntu, Linux Mint, Fedora, RHEL, openSUSE)
- **Status**: Stable Production Release

#### Downloads & Packages

| Format | Architecture | File Name | Size | SHA-256 Checksum | Download |
|---|---|---|---|---|---|
| **DEB** | `amd64` | `InvoiceFine_1.2.0_amd64.deb` | 34 MB | `eeb27e0e393ddfec4cb54d9e1036a68043f13e1906461e35744c711027683ec5` | [Download](downloads/linux/InvoiceFine_1.2.0_amd64.deb) |
| **RPM** | `x86_64` | `InvoiceFine-1.2.0-1.x86_64.rpm` | 34 MB | `61a7c4073ecba45f1a144b279009a8a57162b1175dc9d96fa5371a4b0d5e0b4c` | [Download](downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm) |
| **AppImage** | `amd64` | `InvoiceFine_1.2.0_amd64.AppImage` | — | *Pending build completion* | *Coming Soon* |

#### Release Highlights
- **Interactive Item Stock Ledger**: Click on any product in the inventory to inspect a complete chronological ledger of stock movements (purchases, sales deductions, manual adjustments, initial stock).
- **Customer Sales Breakdown**: View which customers purchased an item, the date of purchase, invoice numbers, selling prices, and quantities sold.
- **Enhanced Mobile Backup Synchronization**: Seamless two-way data sync between Android and Linux desktop with complete preservation of product IDs and line-item stock movements.
- **Accurate Customer Khata Reconciliation**: Real-time balance recalculation matching invoice dues and standalone payment receipts.
- **Zero-Division Safeguards**: Clean profit margin and markup analytics preventing invalid displays.

---

### 📱 Android Mobile — Version 1.1.1

- **Release Date**: September 15, 2026
- **Platform**: Android 8.0+
- **Status**: Stable Release

#### Downloads & Channels

| Channel | Format | Target | Link |
|---|---|---|---|
| **Google Play Store** | App Bundle / APK | Android 8.0+ | `YOUR_GOOGLE_PLAY_STORE_URL` *(Placeholder — pending publication)* |
| **Direct APK** | `.apk` | Universal Android | *Coming Soon* |

#### Release Highlights
- **Rapid GST & Non-GST Billing**: Mobile-first counter invoice creator with instant tax calculation.
- **Thermal Bluetooth Printing**: Direct ESC/POS printing support for 58mm and 80mm wireless thermal printers.
- **WhatsApp Share**: One-touch generation and delivery of PDF invoices via WhatsApp.
- **Customer Ledger & Reminders**: Khata tracking with scheduled payment follow-up reminders.
- **Local Data Backup**: Encrypted local database export and restore functionality.

---

## Previous Releases

### 💻 Linux Desktop — Version 1.1.2

- **Release Date**: September 2026
- **Platform**: Linux (Debian, Ubuntu, Fedora)
- **Status**: Archived Previous Release

#### Changes & Notes
- Introduced desktop multi-pane customer management interface.
- Added support for bulk CSV product import and export.
- Optimized POS billing workflow with keyboard shortcuts.
- Configured local thermal receipt printer preview and A4 PDF generation.

---

### 📱 Android Mobile — Version 1.0.0

- **Release Date**: August 2026
- **Platform**: Android
- **Status**: Initial Public Mobile Release

#### Changes & Notes
- Initial launch of InvoiceFine on Android.
- Core GST invoicing, basic product catalog, and offline customer database.
- 5 built-in invoice PDF templates (Classic, Modern, Compact, Professional, Premium).

---

## Upgrade Guidelines

### Upgrading Linux Desktop (.deb)
To upgrade to the latest desktop version, install the new package directly over the existing installation:
```bash
sudo apt install ./downloads/linux/InvoiceFine_1.2.0_amd64.deb
```
All business data, customer records, invoices, and preferences stored in your user profile will be retained automatically.

### Upgrading Android
Enable automatic updates via the Google Play Store or manually install the latest package when published.
