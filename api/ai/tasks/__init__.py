from celery import shared_task

from ai.tasks.cost import apply_cost
from ai.tasks.memory import build_memorized_chat_messages

@shared_task
def apply_cost_task(user_ids, cost, service):
    return apply_cost(user_ids, cost, service)

@shared_task
def build_memorized_chat_messages_task(user_ids, chat_messages, max_chars_per_message, max_total_chars_for_messages, cache_key, cache_timeout=3600):
    return build_memorized_chat_messages(user_ids, chat_messages, max_chars_per_message, max_total_chars_for_messages, cache_key, cache_timeout)