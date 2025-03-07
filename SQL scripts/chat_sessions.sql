create table conversations (
    id bigserial primary key,
    user_id text not null,
    summary text,
    created_at timestamp default now()
);

create table messages (
    id bigserial primary key,
    conversation_id bigint references conversations(id),
    role text, -- User or AI
    content text,
    created_at timestamp default now()
);