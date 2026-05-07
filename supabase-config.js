<script type="module">
  import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

  window.SUPABASE_URL = "https://kdfypqsapoowarljojyh.supabase.co";
  window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkZnlwcXNhcG9vd2FybGpvanloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMjU3MTEsImV4cCI6MjA5MzcwMTcxMX0.5L7EONZhXzh6HdczBhcmXgY7LfhHOLBl2vE6eDJrytg";

  window.supabaseClient = createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY
  );
</script>
