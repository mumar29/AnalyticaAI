CREATE TABLE  IF NOT EXISTS api_keys (
    id bigserial PRIMARY KEY,
    provider text NOT NULL,
    api_key text NOT NULL,
    created_at timestamp default now()
);