import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://skmutvzhquyqavevkfik.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbXV0dnpocXV5cWF2ZXZrZmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDE5OTUsImV4cCI6MjAyMjYxNzk5NX0.2QqToBF0lEtmFtcs-WV4aHbn6OYL_6z_KjB-iKXMWOE'

export const supabase = createClient(supabaseURL, supabaseAnonKey)