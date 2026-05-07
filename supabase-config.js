<script type="module">
  import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

  window.SUPABASE_URL = "YOUR_SUPABASE_URL";
  window.SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

  window.supabaseClient = createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY
  );
</script>
