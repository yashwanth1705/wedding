-- Create the table for RSVPs
create table if not exists rsvps (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  guests integer default 1,
  attending text check (attending in ('yes', 'no')),
  message text
);

-- Enable Row Level Security (RLS)
alter table rsvps enable row level security;

-- Create a policy that allows anyone (anon) to insert data
-- This is necessary for a public RSVP form
create policy "Enable insert for everyone" 
on rsvps for insert 
with check (true);

-- Create a policy so users can only see their own data? 
-- Actually, for a wedding site, maybe we don't want public read access at all.
-- Only the admin (dashboard) should read. 
-- So we DO NOT add a SELECT policy for anon.
-- This ensures guests can't see who else RSVP'd via the API.
