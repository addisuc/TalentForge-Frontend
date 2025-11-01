# Screen Reader Testing Checklist

## Screen Readers to Test
- **Windows:** NVDA (free) or JAWS
- **macOS:** VoiceOver (built-in)
- **Mobile:** TalkBack (Android) or VoiceOver (iOS)

## VoiceOver Quick Start (macOS)
- **Enable:** Cmd + F5
- **Navigate:** Ctrl + Option + Arrow keys
- **Interact:** Ctrl + Option + Space
- **Rotor:** Ctrl + Option + U

## NVDA Quick Start (Windows)
- **Enable:** Ctrl + Alt + N
- **Navigate:** Arrow keys
- **Interact:** Enter/Space
- **Elements List:** NVDA + F7

## Test Scenarios

### Login Page
- [ ] Page title announced correctly
- [ ] Form labels read correctly
- [ ] Error messages announced with aria-live
- [ ] Button purposes clear ("Login", not just "Submit")
- [ ] Link purposes clear ("Forgot password?")
- [ ] Password field identified as password type

### Navigation
- [ ] Landmark regions announced (header, nav, main, footer)
- [ ] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Current page/section indicated
- [ ] Skip link announced and functional

### Job Listings
- [ ] List structure announced ("List of 25 items")
- [ ] Job titles as headings
- [ ] Job details read in logical order
- [ ] Filters and search announced correctly
- [ ] Pagination controls clear

### Forms
- [ ] All fields have labels
- [ ] Required fields announced
- [ ] Field descriptions read (aria-describedby)
- [ ] Error messages associated with fields
- [ ] Success messages announced

### Modals/Dialogs
- [ ] Modal title announced on open
- [ ] Focus moved to modal
- [ ] Modal role announced ("dialog")
- [ ] Close button clearly labeled

### Tables
- [ ] Table structure announced
- [ ] Column headers associated with cells
- [ ] Row headers if applicable
- [ ] Table caption/summary provided

### Dynamic Content
- [ ] Loading states announced
- [ ] Content updates announced (aria-live)
- [ ] Status messages announced
- [ ] Progress indicators described

## Common Issues to Check
- [ ] Images have alt text (or alt="" if decorative)
- [ ] Icons have accessible labels
- [ ] Buttons have descriptive text (not just icons)
- [ ] Links have meaningful text (not "click here")
- [ ] Form errors clearly associated with fields
- [ ] Dynamic content changes announced

## Test Results
**Date Tested:** _____________  
**Screen Reader:** _____________  
**Browser:** _____________  
**Tester:** _____________  
**Pass/Fail:** _____________  
**Issues Found:** _____________

## Priority Issues
1. **Critical:** Prevents task completion
2. **High:** Significantly impacts usability
3. **Medium:** Minor inconvenience
4. **Low:** Enhancement opportunity
