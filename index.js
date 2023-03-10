const tasks = [
    {
        todo: "Do something nice for someone I care about",
        completed: true,
    },
    {
        todo: "Memorize the fifty states and their capitals",
        completed: false,
    },
    {
        todo: "Watch a classic movie",
        completed: false,
    },
    {
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
    },
    {
        todo: "Solve a Rubik's cube",
        completed: false,
    },
    {
        todo: "Bake pastries for me and neighbor",
        completed: false,
    },
    {
        todo: "Go see a Broadway production",
        completed: false,
    },
    {
        todo: "Write a thank you letter to an influential person in my life",
        completed: true,
    },
    {
        todo: "Invite some friends over for a game night",
        completed: false,
    },
    {
        todo: "Have a football scrimmage with some friends",
        completed: false,
    },
    {
        todo: "Text a friend I haven't talked to in a long time",
        completed: false,
    },
    {
        todo: "Organize pantry",
        completed: true,
    },
    {
        todo: "Buy a new house decoration",
        completed: false,
    },
    {
        todo: "Plan a vacation I've always wanted to take",
        completed: false,
    },
    {
        todo: "Clean out car",
        completed: false,
    },
    {
        todo: "Draw and color a Mandala",
        completed: true,
    },
    {
        todo: "Create a cookbook with favorite recipes",
        completed: false,
    },
    {
        todo: "Bake a pie with some friends",
        completed: false,
    },
    {
        todo: "Create a compost pile",
        completed: true,
    },
    {
        todo: "Take a hike at a local park",
        completed: true,
    },
    {
        todo: "Take a class at local community center that interests you",
        completed: false,
    },
    {
        todo: "Research a topic interested in",
        completed: false,
    },
    {
        todo: "Plan a trip to another country",
        completed: true,
    },
    {
        todo: "Improve touch typing",
        completed: false,
    },
    {
        todo: "Learn Express.js",
        completed: false,
    },
    {
        todo: "Learn calligraphy",
        completed: false,
    },
    {
        todo: "Have a photo session with some friends",
        completed: false,
    },
    {
        todo: "Go to the gym",
        completed: false,
    },
    {
        todo: "Make own LEGO creation",
        completed: false,
    },
    {
        todo: "Take cat on a walk",
        completed: false,
    }
]


for (let i = 0; i < tasks.length; i++) {
    const div = document.getElementById('todo')
    const text = document.createElement('p')
    text.innerHTML = tasks[i].todo
    div.appendChild(text)

    console.log(tasks[i].completed)

    if (tasks[i].completed === true) {
        text.style.backgroundColor = 'green'
        text.style.display = 'none'
    } else {
        text.style.backgroundColor = 'red'
    }

}













/*const todoList = (givenArray) => {
    const allTodo = givenArray.map((givenArray) => {
        return { todo: givenArray.todo };
    });
    return allTodo;
};

console.log(
    "Ecco un array con tutti i todo: ",
    todoList(tasks)
);

const box = document.createElement("div");
box.id = "box";
document.body.appendChild(box);
*/
