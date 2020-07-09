export const MessageService = {
  messages: [] as string[],

  add(message: string) {
    this.messages.push(message);
  },

  clear() {
    this.messages = [];
  }
};
