let list = [
    {
      id: 1, 
      completed: true,
      action: "Study"
    },
    {
      id: 2,
      completed: false, 
      action: "Dishes"
    }
  ]


for (let i =0; i < list.length; i++){
    let fullTodo =` Id: ${list[i].id}, complete: ${list[i].complete}, action: ${list[i].action}`;
}