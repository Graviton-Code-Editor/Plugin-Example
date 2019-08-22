"use strict"

const example_dropmenu = new dropMenu({
	id:"example_dropmenu "
});

example_dropmenu .setList({
  "button": "Example Plugin",
  "list":{
     "Click me!":{
        click:()=> new Notification({title:'Hello World!',content:'This is the notification content'})
      }
  }
})