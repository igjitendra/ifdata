# InvoiceFine Desktop for Linux

**InvoiceFine Desktop** is an optimized, high-performance workstation application built for counter billing, large product catalogs, and back-office accounting on Linux computers.

---

## Overview

| Attribute | Details |
|---|---|
| **App Name** | InvoiceFine Desktop |
| **Current Version** | `1.2.0` |
| **Target OS** | 64-bit Linux (Debian, Ubuntu, Linux Mint, Fedora, RHEL, openSUSE) |
| **Architecture** | `x86_64` / `amd64` |
| **Developer** | PRO CSC TOOLS |
| **Status** | Stable Production Release |

---

## Supported Package Formats

InvoiceFine Desktop is packaged natively for major Linux package management ecosystems:

1. **Debian Package (`.deb`)**:
   - For Ubuntu (20.04 LTS, 22.04 LTS, 24.04 LTS), Debian (11, 12), Linux Mint (20, 21, 22), Pop!_OS, Zorin OS, and derivatives.
   - [Download .deb Package](downloads/linux/InvoiceFine_1.2.0_amd64.deb) *(~34 MB)*

2. **RPM Package (`.rpm`)**:
   - For Fedora 36+, Red Hat Enterprise Linux 8/9, Rocky Linux, AlmaLinux, CentOS Stream, and openSUSE.
   - [Download .rpm Package](downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm) *(~34 MB)*

3. **AppImage (`.AppImage`)**:
   - Universal standalone binary for any modern Linux distribution.
   - *Status: Packaging in progress — Coming Soon.*

---

## Installation Guide

### Option 1: Installing on Ubuntu / Debian / Linux Mint (.deb)

#### Method A: Using APT (Recommended)
APT will automatically install any missing system libraries:
```bash
cd /path/to/downloads
sudo apt update
sudo apt install ./InvoiceFine_1.2.0_amd64.deb
```

#### Method B: Using DPKG
```bash
sudo dpkg -i InvoiceFine_1.2.0_amd64.deb
sudo apt-get install -f
```

---

### Option 2: Installing on Fedora / RHEL / Rocky Linux (.rpm)

#### Method A: Using DNF
```bash
cd /path/to/downloads
sudo dnf install ./InvoiceFine-1.2.0-1.x86_64.rpm
```

#### Method B: Using RPM Command
```bash
sudo rpm -ivh InvoiceFine-1.2.0-1.x86_64.rpm
```

---

### Option 3: Installing on openSUSE (.rpm)

```bash
cd /path/to/downloads
sudo zypper install ./InvoiceFine-1.2.0-1.x86_64.rpm
```

---

## Launching InvoiceFine Desktop

Once installed, you can launch InvoiceFine in two ways:

1. **Application Menu (GUI)**:
   - Open your desktop Application Launcher (Super key / Start menu).
   - Search for **InvoiceFine** or look under the **Office** / **Accessories** category.
   - Click the **InvoiceFine** icon to launch.

2. **Terminal (CLI)**:
   Run the application command:
   ```bash
   invoicefine-desktop
   ```

---

## Desktop-Optimized Workflows

- **High-Speed Counter Billing**: Use streamlined keyboard navigation to search products, adjust quantities, select customers, and finalize receipts rapidly.
- **Interactive Stock Ledger Modal**: Click on any product in the inventory view to inspect complete chronological transaction history (purchases, sales deductions, manual stock adjustments, unit prices, and customer details).
- **USB & Network Thermal Printing**: Direct output to standard ESC/POS USB receipt printers (58mm / 80mm) without needing third-party drivers.
- **Two-Way Mobile Sync**: Import backup archives generated from the InvoiceFine Android app to maintain synchronized accounts on your desktop workstation.

---

## Updating to Newer Versions

To upgrade InvoiceFine Desktop when a new release is published:

1. Download the latest `.deb` or `.rpm` package from [DOWNLOADS.md](DOWNLOADS.md) or [RELEASES.md](RELEASES.md).
2. Install the new package over the existing one using the same install command:
   ```bash
   sudo apt install ./InvoiceFine_NEW_VERSION_amd64.deb
   ```
3. Your local business data, customer ledgers, and invoice history will remain safe and intact.

---

## Uninstalling

### On Ubuntu / Debian / Linux Mint:
```bash
sudo apt remove invoicefine-desktop
```

To remove all configuration files along with the package:
```bash
sudo apt purge invoicefine-desktop
```

### On Fedora / RHEL:
```bash
sudo dnf remove invoicefine-desktop
```

---

## Troubleshooting & Common Questions

### 1. Missing WebKitGTK Dependency on Older Linux Systems
InvoiceFine requires modern WebKit2GTK runtime libraries. If you encounter an error during launch on minimal Linux installations, install the package manually:

- **Ubuntu / Debian**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1
  ```

### 2. USB Thermal Printer Permission Issues
If your USB thermal printer is not detected or displays a permission error:
Add your Linux user account to the `lp` (printer) and `dialout` groups:
```bash
sudo usermod -aG lp $USER
sudo usermod -aG dialout $USER
```
*(Log out and log back in for changes to take effect).*

### 3. Application Does Not Open in Wayland Sessions
InvoiceFine runs natively under both X11 and Wayland desktop sessions. If your display manager has graphics driver incompatibilities, launch with fallback flags:
```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 invoicefine-desktop
```

---

## Need Assistance?
Contact technical support at [procsctools@gmail.com](mailto:procsctools@gmail.com) or read our [FAQ.md](FAQ.md).
