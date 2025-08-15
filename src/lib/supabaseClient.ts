import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://foqlrjhukytpqbtsxuyj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvcWxyamh1a3l0cHFidHN4dXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMzExODUsImV4cCI6MjA3MDYwNzE4NX0.4EmRkjwpVZ1WtAMisieY33_vkffr_WDB527r5kk1bAA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
