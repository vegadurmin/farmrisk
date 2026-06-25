# FarmRisk Supabase setup

The application uses Supabase phone OTP authentication and a typed
`public.profiles` table.

## Hosted project

1. In **Authentication → Providers → Phone**, enable phone authentication and
   phone sign-ups.
2. Configure an SMS provider supported by Supabase. Without one, a hosted
   project cannot deliver OTP messages.
3. Apply `supabase/migrations/20260625000000_create_profiles.sql` with
   `supabase db push`, or paste it into the Supabase SQL editor.
4. Keep `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local`.

Do not configure a session timebox or inactivity timeout if users should remain
signed in until they explicitly log out. Supabase refresh-token rotation remains
enabled.

## Local development

`supabase/config.toml` enables phone sign-ups and provides this test login:

- Phone: `+919876543210`
- OTP: `123456`

After the Supabase CLI is running, copy its API URL and publishable/anon key
into `.env.local`.

## Database types

`types/database.ts` is checked in so queries are type-safe immediately. After
future migrations, regenerate it from the linked project:

```bash
npx supabase gen types typescript --linked > types/database.ts
```
