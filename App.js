const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "children" },[
        React.createElement("h1", {}, "Im An h1 Tag"),
        React.createElement("h2", {}, "Im An h2 Tag"),
    ]),
    React.createElement("div", {id: "children" },[
        React.createElement("h1", {}, "Im An h1 Tag"),
        React.createElement("h2", {}, "Im An h2 Tag"),
    ])
]
    
)



// const heading = React.createElement("h1",{
//     id:"heading",xyz:"abc"
// },"Hello World rom React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);