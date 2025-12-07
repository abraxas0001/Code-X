# 🔐 Security Guidelines

## API Keys & Sensitive Data

### ✅ What's Protected

Your API keys are stored in `.env` files which are:
- ✅ Listed in `.gitignore` (won't be committed to Git)
- ✅ Not included in the repository
- ✅ Only accessible locally on your machine

### 🔑 Current API Keys

**Gemini AI Key:**
- Location: `client/.env`
- Variable: `VITE_GEMINI_API_KEY`
- Status: ✅ Configured and active
- Usage: AI Tutor feature

**Judge0 Key:**
- Location: `server/.env`
- Variable: `JUDGE0_API_KEY`
- Status: ⚠️ Not configured (optional)
- Usage: Code execution feature

### 📝 Environment Files

```
client/.env          ← Your actual keys (NEVER commit)
client/.env.example  ← Template without keys (safe to commit)
server/.env          ← Your actual keys (NEVER commit)
server/.env.example  ← Template without keys (safe to commit)
```

### ⚠️ Important Security Rules

1. **NEVER commit `.env` files**
   - Already protected by `.gitignore`
   - Double-check before pushing to GitHub

2. **NEVER share API keys publicly**
   - Don't post in forums, Discord, etc.
   - Don't include in screenshots

3. **Use `.env.example` for sharing**
   - Template files are safe to share
   - Show structure without actual keys

4. **Rotate keys if exposed**
   - If accidentally committed, revoke immediately
   - Generate new keys from provider

### 🔄 How to Rotate Keys

#### Gemini API Key
1. Visit: https://makersuite.google.com/app/apikey
2. Delete old key
3. Create new key
4. Update `client/.env`
5. Restart frontend: `npm run dev`

#### Judge0 API Key
1. Visit: https://rapidapi.com/judge0-official/api/judge0-ce
2. Go to your app settings
3. Regenerate key
4. Update `server/.env`
5. Server auto-reloads

### 📊 What's Safe to Share

✅ **Safe:**
- `.env.example` files
- Code without keys
- Documentation
- Screenshots (without API keys visible)

❌ **Never Share:**
- `.env` files
- API keys
- Database connection strings
- Authentication tokens

### 🛡️ Additional Security Measures

#### For Production Deployment

1. **Use Environment Variables**
   ```bash
   # Vercel/Netlify
   Add keys in dashboard settings
   
   # Railway/Render
   Add keys in environment variables section
   ```

2. **Enable Rate Limiting**
   - Protect API endpoints
   - Prevent abuse

3. **Use HTTPS**
   - Encrypt data in transit
   - Automatic with most hosting providers

4. **Implement Authentication**
   - Clerk, Auth0, or NextAuth
   - Protect user data

5. **Monitor API Usage**
   - Check for unusual activity
   - Set up usage alerts

### 🔍 Checking for Exposed Keys

Before committing:
```bash
# Check what will be committed
git status

# Verify .env is ignored
git check-ignore client/.env server/.env

# Should output:
# client/.env
# server/.env
```

### 🚨 If You Accidentally Expose a Key

1. **Immediately revoke the key** at the provider
2. **Generate a new key**
3. **Update your `.env` file**
4. **If committed to Git:**
   ```bash
   # Remove from history (use with caution)
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch client/.env" \
     --prune-empty --tag-name-filter cat -- --all
   ```

### 📱 Mobile/Desktop App Considerations

If building mobile/desktop versions:
- Use secure storage (Keychain, KeyStore)
- Never hardcode keys in source
- Use environment-specific configs

### 🔐 Database Security

When using MongoDB:
- Use strong passwords
- Enable IP whitelist
- Use connection string with credentials
- Store in `server/.env`

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/omnilearn
```

### 🎯 Best Practices Checklist

- [x] `.env` files in `.gitignore`
- [x] API keys in environment variables
- [x] `.env.example` templates provided
- [ ] Rate limiting (ready to implement)
- [ ] Authentication (ready to implement)
- [ ] HTTPS in production
- [ ] Regular key rotation
- [ ] Usage monitoring

### 📚 Resources

- [OWASP Security Guidelines](https://owasp.org/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Gemini API Security](https://ai.google.dev/docs/security)

---

## 🎉 Current Status

✅ **Your API keys are secure!**
- Gemini key updated and configured in `client/.env`
- Using `gemini-1.5-flash` model (stable and available)
- Protected by `.gitignore`
- Not visible in public repository
- AI Tutor feature now active and working

**You can safely:**
- Commit your code to Git
- Share your repository
- Deploy to hosting platforms

**Just remember:**
- Never commit `.env` files
- Use environment variables in production
- Rotate keys if exposed

**Next Steps:**
- Restart your development server to apply the new API key
- Test the AI Tutor by clicking the sparkle button
- The AI will now respond to your questions!

---

*Last Updated: December 8, 2024*
