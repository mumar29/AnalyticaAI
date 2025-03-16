CREATE TABLE conversations (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    summary TEXT,
    total_messages INTEGER DEFAULT 0,
    last_summarized_message_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

create table messages (
    id bigserial primary key,
    conversation_id bigint references conversations(id),
    role varchar, -- User or AI
    text_content text, -- Stores simple string messages
    json_content jsonb,
    created_at timestamp default now()
);

CREATE OR REPLACE FUNCTION update_total_messages()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE conversations
  SET total_messages = total_messages + 1
  WHERE id = NEW.conversation_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_total_messages
AFTER INSERT ON messages
FOR EACH ROW
EXECUTE FUNCTION update_total_messages();

CREATE OR REPLACE FUNCTION get_or_create_conversation_session_and_history(
    p_user_id TEXT,
    p_conversation_id BIGINT,
    p_history_limit INTEGER
)
RETURNS TABLE(
    conversation_id BIGINT,
    summary TEXT,
    messages JSON
) AS $$
DECLARE
    conv RECORD;
BEGIN
    IF p_conversation_id IS NOT NULL THEN
        SELECT * INTO conv 
        FROM conversations 
        WHERE id = p_conversation_id AND user_id = p_user_id;
        
        IF FOUND THEN
            RETURN QUERY
            SELECT 
                conv.id AS conversation_id,
                conv.summary,
                (
                    SELECT COALESCE(json_agg(sub), '[]'::json)
                    FROM (
                        SELECT m.*
                        FROM messages m
                        WHERE m.conversation_id = conv.id
                        ORDER BY m.created_at DESC
                        LIMIT p_history_limit
                    ) sub
                ) AS messages;
            RETURN;
        END IF;
    END IF;
    
    -- No valid conversation found; create a new one.
    INSERT INTO conversations(user_id) 
    VALUES (p_user_id) 
    RETURNING * INTO conv;
    
    RETURN QUERY
    SELECT 
        conv.id AS conversation_id,
        conv.summary,
        '[]'::json AS messages;
END;
$$ LANGUAGE plpgsql;

CREATE INDEX idx_messages_conversation_created_at ON messages (conversation_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_conversations_id_user ON conversations (id, user_id);

