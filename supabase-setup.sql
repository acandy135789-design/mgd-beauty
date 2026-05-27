-- =============================================
-- Magic Garden 美肌花園 會員系統 SQL 設定
-- 請在 Supabase SQL Editor 執行此檔案
-- =============================================

-- 1. 會員資料表
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  phone TEXT DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  points INTEGER DEFAULT 0,
  total_earned INTEGER DEFAULT 0,
  tier TEXT DEFAULT '一般會員',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 管理員資料表（獨立，避免循環查詢）
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY
);

-- 3. 服務紀錄表
CREATE TABLE IF NOT EXISTS public.services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  service_name TEXT NOT NULL DEFAULT '',
  amount INTEGER NOT NULL DEFAULT 0,
  points_earned INTEGER NOT NULL DEFAULT 0,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 點數歷史表
CREATE TABLE IF NOT EXISTS public.points_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  points INTEGER NOT NULL DEFAULT 0,
  type TEXT NOT NULL DEFAULT 'earn',
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- 啟用 RLS 安全機制
-- =============================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.points_history ENABLE ROW LEVEL SECURITY;

-- =============================================
-- RLS 政策設定
-- =============================================

-- profiles: 本人可讀寫，管理員可讀寫所有人
CREATE POLICY "own_profile_all" ON public.profiles FOR ALL
  USING (auth.uid() = id);
CREATE POLICY "admin_profiles_all" ON public.profiles FOR ALL
  USING (auth.uid() IN (SELECT user_id FROM public.admin_users));

-- admin_users: 只有管理員自己可以看到
CREATE POLICY "admin_users_self" ON public.admin_users FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() IN (SELECT user_id FROM public.admin_users));

-- services: 本人可查詢，管理員可新增查詢
CREATE POLICY "own_services_select" ON public.services FOR SELECT
  USING (user_id = auth.uid() OR auth.uid() IN (SELECT user_id FROM public.admin_users));
CREATE POLICY "admin_services_insert" ON public.services FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT user_id FROM public.admin_users));

-- points_history: 本人可查詢，管理員可新增查詢
CREATE POLICY "own_history_select" ON public.points_history FOR SELECT
  USING (user_id = auth.uid() OR auth.uid() IN (SELECT user_id FROM public.admin_users));
CREATE POLICY "admin_history_insert" ON public.points_history FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT user_id FROM public.admin_users));

-- =============================================
-- 自動建立 Profile 的 Trigger
-- 新會員註冊後自動建立資料
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, phone)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- 完成！
-- =============================================
