

## Fix Malay/Chinese Pages Showing English Content

### Problem
All `/ms/` (Malay) and `/zh/` (Chinese) URLs display English content because the LanguageContext does not detect and apply the language from the URL path.

### Root Cause
The LanguageContext likely initializes language from localStorage or defaults to 'en', ignoring the URL prefix (`/ms/`, `/zh/`).

### Solution: Sync Language from URL Path

**Files to modify:**
1. `src/contexts/LanguageContext.tsx`
2. Potentially `src/App.tsx` (routes)

**Implementation Steps:**

1. **Update LanguageContext** to detect language from URL on initialization:
```typescript
// In LanguageContext.tsx
const getLanguageFromPath = (): Language => {
  const path = window.location.pathname;
  if (path.startsWith('/ms')) return 'ms';
  if (path.startsWith('/zh')) return 'zh';
  return 'en';
};

// Initialize with URL-detected language
const [language, setLanguage] = useState<Language>(getLanguageFromPath());

// Add useEffect to sync on route changes
useEffect(() => {
  const detectedLang = getLanguageFromPath();
  if (detectedLang !== language) {
    setLanguage(detectedLang);
  }
}, [window.location.pathname]);
```

2. **Add location listener** using react-router-dom's `useLocation` hook to detect route changes and update language accordingly.

3. **Ensure all page components** use the `language` from context when rendering translations (they likely already do this).

### Expected Result
- `/ms/` URLs will display Bahasa Malaysia content
- `/zh/` URLs will display Chinese content
- `/` (no prefix) URLs will display English content
- Language switcher will continue to work correctly

