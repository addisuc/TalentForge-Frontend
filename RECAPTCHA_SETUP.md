# Google reCAPTCHA v3 Setup Guide

**Status:** Implemented with test keys  
**Production:** Requires real keys

---

## ✅ Current Implementation

reCAPTCHA v3 is integrated and triggers after **3 failed login attempts**.

### Test Keys (Currently Used)
- **Site Key:** `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- **Secret Key:** `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`
- **Note:** These are Google's official test keys that always pass validation

---

## 🔧 Production Setup

### Step 1: Get Real reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Sign in with Google account
3. Click **"+"** to register a new site
4. Fill in the form:
   - **Label:** TalentForge
   - **reCAPTCHA type:** reCAPTCHA v3
   - **Domains:** 
     - `localhost` (for development)
     - `yourdomain.com` (production domain)
   - Accept terms and submit

5. Copy your keys:
   - **Site Key** (public, used in frontend)
   - **Secret Key** (private, used in backend)

### Step 2: Update Frontend

Replace test key in `login-standalone.component.ts`:

```typescript
// Line ~280 and ~295
// OLD:
script.src = 'https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// NEW:
script.src = 'https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY_HERE';

// Also update in executeRecaptcha():
.execute('YOUR_SITE_KEY_HERE', { action: 'login' })
```

**Better approach:** Use environment variables:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  recaptchaSiteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // Test key
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  recaptchaSiteKey: 'YOUR_PRODUCTION_SITE_KEY' // Real key
};
```

Then use in component:
```typescript
import { environment } from '../../../../../environments/environment';

// In loadRecaptchaScript():
script.src = `https://www.google.com/recaptcha/api.js?render=${environment.recaptchaSiteKey}`;

// In executeRecaptcha():
.execute(environment.recaptchaSiteKey, { action: 'login' })
```

### Step 3: Update Backend (Required for Production)

The backend must verify the reCAPTCHA token. Add to `auth-service`:

**1. Add dependency (pom.xml):**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

**2. Create verification service:**
```java
@Service
public class RecaptchaService {
    
    @Value("${recaptcha.secret.key}")
    private String secretKey;
    
    private static final String VERIFY_URL = 
        "https://www.google.com/recaptcha/api/siteverify";
    
    public boolean verify(String token) {
        RestTemplate restTemplate = new RestTemplate();
        
        String params = String.format("?secret=%s&response=%s", 
            secretKey, token);
        
        RecaptchaResponse response = restTemplate.postForObject(
            VERIFY_URL + params, 
            null, 
            RecaptchaResponse.class
        );
        
        return response != null && response.isSuccess() 
            && response.getScore() >= 0.5; // Threshold
    }
}

@Data
class RecaptchaResponse {
    private boolean success;
    private double score;
    private String action;
    private String challenge_ts;
    private String hostname;
}
```

**3. Update LoginRequest:**
```java
public class LoginRequest {
    private String email;
    private String password;
    private String recaptchaToken; // Add this
}
```

**4. Verify in AuthController:**
```java
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    // Verify reCAPTCHA if token provided
    if (request.getRecaptchaToken() != null) {
        if (!recaptchaService.verify(request.getRecaptchaToken())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("reCAPTCHA verification failed");
        }
    }
    
    // Continue with normal login...
}
```

**5. Add to application.yml:**
```yaml
recaptcha:
  secret:
    key: YOUR_SECRET_KEY_HERE
```

### Step 4: Update Frontend to Send Token

Modify `auth-facade.service.ts`:

```typescript
login(credentials: { email: string; password: string; recaptchaToken?: string }) {
  this.store.dispatch(AuthActions.login({ credentials }));
}
```

Update login component:
```typescript
async onSubmit(): Promise<void> {
  if (this.loginForm.valid && !this.isLocked) {
    this.loading = true;
    this.errorMessage = '';
    
    const credentials: any = this.loginForm.value;
    
    // Add reCAPTCHA token if needed
    if (this.showCaptcha) {
      try {
        credentials.recaptchaToken = await this.executeRecaptcha();
      } catch (error) {
        this.errorMessage = 'Security verification failed.';
        this.loading = false;
        return;
      }
    }
    
    this.authFacade.login(credentials);
    // ... rest of code
  }
}
```

---

## 🧪 Testing

### Development (Test Keys)
- ✅ Always passes validation
- ✅ No actual verification
- ✅ Good for testing UI flow

### Production (Real Keys)
1. Test with valid credentials → Should work
2. Fail login 3 times → reCAPTCHA activates
3. Try login again → Token sent to backend
4. Backend verifies token with Google
5. If score < 0.5 → Reject login
6. If score >= 0.5 → Allow login attempt

---

## 📊 reCAPTCHA Scoring

reCAPTCHA v3 returns a score (0.0 - 1.0):
- **1.0** = Very likely a human
- **0.5** = Neutral (recommended threshold)
- **0.0** = Very likely a bot

### Recommended Thresholds:
- **0.7+** = Allow without challenge
- **0.5-0.7** = Allow but monitor
- **< 0.5** = Reject or require additional verification

---

## 🔒 Security Best Practices

1. **Never expose secret key** in frontend code
2. **Always verify on backend** - frontend verification can be bypassed
3. **Use environment variables** for keys
4. **Monitor scores** and adjust threshold as needed
5. **Log failed verifications** for security analysis
6. **Rate limit** even with reCAPTCHA (defense in depth)

---

## 💰 Pricing

- **Free:** 1 million assessments/month
- **Paid:** $1 per 1,000 assessments after 1M
- **TalentForge estimate:** ~300K/month (well within free tier)

---

## 🐛 Troubleshooting

### Issue: "reCAPTCHA verification failed"
- Check if script loaded: `console.log(window.grecaptcha)`
- Verify site key is correct
- Check domain is registered in reCAPTCHA admin

### Issue: Backend always rejects
- Verify secret key in backend config
- Check network connectivity to Google
- Ensure token is being sent in request

### Issue: Score always low
- Test from different IPs
- Clear browser cache
- Check for browser extensions blocking reCAPTCHA

---

## 📝 Current Status

- ✅ Frontend integration complete
- ✅ UI indicators implemented
- ✅ Triggers after 3 failed attempts
- ⏳ Backend verification (TODO)
- ⏳ Production keys (TODO)

---

## 🚀 Next Steps

1. Get production reCAPTCHA keys
2. Add keys to environment files
3. Implement backend verification
4. Test end-to-end flow
5. Monitor scores and adjust threshold

---

**Last Updated:** 2024  
**Status:** Ready for production keys
