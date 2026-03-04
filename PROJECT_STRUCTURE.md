# Birthday Reminder - Project Structure

## 📁 Complete Folder Structure

```
birthday-reminder/
│
├── 📱 app/                                 # Expo Router - File-based routing
│   ├── (tabs)/                            # Tab navigation group
│   │   ├── index.tsx                      # 🏠 Home screen - Birthday list
│   │   ├── explore.tsx                    # ℹ️ About/Info screen
│   │   └── _layout.tsx                    # Tab navigation layout
│   ├── _layout.tsx                        # Root layout - App initialization
│   └── modal.tsx                          # Modal screen (if needed)
│
├── 🧩 components/                          # Reusable UI components
│   ├── birthday-card.tsx                  # Birthday display card component
│   ├── birthday-form.tsx                  # Add/Edit modal form component
│   ├── external-link.tsx                  # External link component
│   ├── haptic-tab.tsx                     # Tab with haptic feedback
│   ├── hello-wave.tsx                     # Animated wave component
│   ├── parallax-scroll-view.tsx           # Parallax scroll view
│   ├── themed-text.tsx                    # Theme-aware text component
│   ├── themed-view.tsx                    # Theme-aware view component
│   └── ui/                                # UI primitives
│       ├── collapsible.tsx                # Collapsible component
│       ├── icon-symbol.ios.tsx            # iOS icon symbols
│       └── icon-symbol.tsx                # Icon symbols
│
├── 🎨 constants/                           # App constants and configuration
│   └── theme.ts                           # Theme colors, spacing, fonts, shadows
│
├── 🪝 hooks/                               # Custom React hooks
│   ├── use-theme.ts                       # Theme hook (dark/light mode)
│   ├── use-color-scheme.ts                # Color scheme hook
│   ├── use-color-scheme.web.ts            # Web-specific color scheme
│   └── use-theme-color.ts                 # Theme color hook
│
├── 📝 types/                               # TypeScript type definitions
│   └── birthday.ts                        # Birthday interface and types
│
├── 🛠️ utils/                               # Utility functions and services
│   ├── storage.ts                         # AsyncStorage service (CRUD operations)
│   ├── notifications.ts                   # Notification scheduling service
│   ├── fileImport.ts                      # TXT file import and parsing
│   └── dateHelpers.ts                     # Date calculation utilities
│
├── 🖼️ assets/                              # Static assets
│   └── images/                            # Image assets
│       ├── android-icon-background.png    # Android adaptive icon background
│       ├── android-icon-foreground.png    # Android adaptive icon foreground
│       ├── android-icon-monochrome.png    # Android monochrome icon
│       ├── favicon.png                    # Web favicon
│       ├── icon.png                       # App icon
│       ├── partial-react-logo.png         # Partial React logo
│       ├── react-logo.png                 # React logo (1x)
│       ├── react-logo@2x.png              # React logo (2x)
│       ├── react-logo@3x.png              # React logo (3x)
│       └── splash-icon.png                # Splash screen icon
│
├── 📜 scripts/                             # Build and utility scripts
│   ├── reset-project.js                   # Reset project script
│   └── setup.sh                           # Setup automation script
│
├── 📄 Configuration Files
│   ├── app.json                           # Expo app configuration
│   ├── package.json                       # Dependencies and scripts
│   ├── tsconfig.json                      # TypeScript configuration
│   ├── eas.json                           # EAS Build configuration
│   ├── eslint.config.js                   # ESLint configuration
│   └── .gitignore                         # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md                          # Main project documentation
│   ├── SETUP.md                           # Complete setup guide
│   ├── INSTALLATION.md                    # Installation instructions
│   ├── FEATURES.md                        # Feature documentation
│   └── PROJECT_STRUCTURE.md               # This file
│
├── 📦 Sample Data
│   └── sample-birthdays.txt               # Sample import file
│
└── 🗂️ Generated/Ignored Folders
    ├── node_modules/                      # NPM dependencies (ignored)
    ├── .expo/                             # Expo cache (ignored)
    ├── .git/                              # Git repository
    ├── .vscode/                           # VS Code settings
    ├── android/                           # Generated Android project (ignored)
    └── ios/                               # Generated iOS project (ignored)
```

## 📋 File Descriptions

### Core Application Files

#### `app/(tabs)/index.tsx`
- **Purpose**: Main home screen with birthday list
- **Features**:
  - Display all birthdays in cards
  - Add new birthday (FAB button)
  - Edit existing birthdays
  - Delete birthdays
  - Import from TXT file
  - Pull to refresh
  - Empty state
- **Dependencies**: BirthdayCard, BirthdayForm, storage, notifications
- **Lines**: ~250

#### `app/(tabs)/explore.tsx`
- **Purpose**: About/Information screen
- **Features**:
  - App features list
  - Import format guide
  - Version information
- **Dependencies**: Theme
- **Lines**: ~150

#### `app/(tabs)/_layout.tsx`
- **Purpose**: Tab navigation configuration
- **Features**:
  - Bottom tab bar
  - Icon configuration
  - Theme integration
- **Lines**: ~40

#### `app/_layout.tsx`
- **Purpose**: Root layout and app initialization
- **Features**:
  - Splash screen handling
  - Status bar configuration
  - Navigation setup
- **Lines**: ~25

### Component Files

#### `components/birthday-card.tsx`
- **Purpose**: Display individual birthday information
- **Props**: birthday, onEdit, onDelete
- **Features**:
  - Name display
  - Date and age calculation
  - Countdown to birthday
  - Edit/delete actions
  - Themed styling
- **Lines**: ~150

#### `components/birthday-form.tsx`
- **Purpose**: Modal form for adding/editing birthdays
- **Props**: visible, onClose, onSave, initialData
- **Features**:
  - Text inputs for names
  - Custom date picker
  - Validation
  - Save/cancel actions
  - Themed styling
- **Lines**: ~280

### Utility Files

#### `utils/storage.ts`
- **Purpose**: AsyncStorage wrapper for data persistence
- **Functions**:
  - `getBirthdays()`: Load all birthdays
  - `saveBirthdays()`: Save birthday array
  - `addBirthday()`: Add single birthday
  - `updateBirthday()`: Update existing birthday
  - `deleteBirthday()`: Remove birthday
- **Lines**: ~50

#### `utils/notifications.ts`
- **Purpose**: Notification scheduling and management
- **Functions**:
  - `requestPermissions()`: Request notification permissions
  - `scheduleBirthdayNotification()`: Schedule birthday notification
  - `scheduleReminderNotification()`: Schedule reminder
  - `scheduleMonthlyReminder()`: Schedule monthly summary
  - `cancelNotification()`: Cancel specific notification
  - `cancelAllNotifications()`: Cancel all notifications
- **Lines**: ~150

#### `utils/fileImport.ts`
- **Purpose**: TXT file import and parsing
- **Functions**:
  - `importFromTxtFile()`: Open file picker and import
  - `parseTxtContent()`: Parse file content to birthdays
- **Format**: `Lastname_Firstname_DD.MM.YYYY`
- **Lines**: ~70

#### `utils/dateHelpers.ts`
- **Purpose**: Date calculation utilities
- **Functions**:
  - `formatDate()`: Format date for display
  - `getAge()`: Calculate current age
  - `getDaysUntilBirthday()`: Calculate days until next birthday
  - `sortByUpcoming()`: Sort birthdays by proximity
- **Lines**: ~60

### Configuration Files

#### `constants/theme.ts`
- **Purpose**: Theme configuration
- **Exports**:
  - `Colors`: Light and dark color palettes
  - `Spacing`: Consistent spacing values
  - `BorderRadius`: Border radius values
  - `FontSizes`: Typography scale
  - `Shadows`: Shadow configurations
- **Lines**: ~80

#### `hooks/use-theme.ts`
- **Purpose**: Theme hook for components
- **Returns**: colors, isDark
- **Lines**: ~15

#### `types/birthday.ts`
- **Purpose**: TypeScript interfaces
- **Exports**:
  - `Birthday`: Main birthday interface
  - `BirthdayFormData`: Form data interface
- **Lines**: ~15

## 🔄 Data Flow

```
User Action
    ↓
UI Component (app/(tabs)/index.tsx)
    ↓
Utility Service (utils/storage.ts, utils/notifications.ts)
    ↓
AsyncStorage / Notification API
    ↓
Device Storage / System Notifications
```

## 🎨 Component Hierarchy

```
App (_layout.tsx)
└── Tabs (_layout.tsx)
    ├── Home (index.tsx)
    │   ├── BirthdayCard (multiple)
    │   │   └── Actions (Edit/Delete)
    │   ├── BirthdayForm (modal)
    │   │   ├── TextInput (First Name)
    │   │   ├── TextInput (Last Name)
    │   │   └── DatePicker (Custom)
    │   └── FAB (Add Button)
    └── About (explore.tsx)
        ├── Feature Cards
        └── Info Sections
```

## 📦 Dependencies Overview

### Production Dependencies
- `expo`: ~54.0.33 - Expo framework
- `react`: 19.1.0 - React library
- `react-native`: 0.81.5 - React Native framework
- `expo-router`: ~6.0.23 - File-based routing
- `expo-notifications`: ~0.30.5 - Push notifications
- `@react-native-async-storage/async-storage`: ~2.2.0 - Local storage
- `expo-document-picker`: ~13.0.5 - File picker
- `expo-file-system`: ~18.0.11 - File system access
- `@expo/vector-icons`: ^15.0.3 - Icon library

### Development Dependencies
- `typescript`: ~5.9.2 - TypeScript compiler
- `@types/react`: ~19.1.0 - React type definitions
- `eslint`: ^9.25.0 - Code linting

## 🚀 Build Outputs

### Development
- Metro bundler output
- Source maps
- Development builds

### Production
- **APK**: `android/app/build/outputs/apk/release/app-release.apk`
- **AAB**: `android/app/build/outputs/bundle/release/app-release.aab`
- **EAS Build**: Downloaded from Expo dashboard

## 📊 Code Statistics

- **Total Files**: ~30 source files
- **Total Lines**: ~2,000 lines of code
- **TypeScript**: 100% coverage
- **Components**: 10+ reusable components
- **Screens**: 2 main screens
- **Utilities**: 4 service modules

## 🔐 Security Considerations

- **Local Storage**: All data stored on device
- **No Backend**: No external API calls
- **Permissions**: Minimal (notifications, storage)
- **Privacy**: No data collection or tracking

---

This structure follows React Native and Expo best practices for scalability and maintainability! 🎉
