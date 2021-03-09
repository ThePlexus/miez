module.exports = {
    name: `clear`,
    discription: "clear messages!",
    execute(message, arges)  {
         if(!args[0]) return message.replay("please enter the amount of messages that you want to clear!");
         if(isNaN(args[0])) return message.replay("please a real amount of nummbers!");
         
         if(args[0] > 100) return message.replay("you cant delete thats mutch messages!");
         if(args[0] < 1) return message.replay("you must delete at least one message!");
    }
}        