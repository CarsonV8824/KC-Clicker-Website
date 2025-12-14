import time

class Money_Generation():
    def __init__(self, game_state):
        self.game_state = game_state
        self.last_increment_time = time.time()
        
    def generate_money(self):
        money_per_sec = self.game_state.game_state["money_per_sec"]
        current_time = time.time()
        
        if money_per_sec > 0:
            elapsed = current_time - self.last_increment_time
            money_to_add = elapsed * money_per_sec
            
            if money_to_add >= 1:
                self.game_state.game_state["money"] += int(money_to_add)
                self.last_increment_time = current_time