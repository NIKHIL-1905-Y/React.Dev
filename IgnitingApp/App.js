import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div",{id:"parent"},
              [ React.createElement("div",{id:"child"},
               [React.createElement("h1",{},"This is a h1 tag"),
               React.createElement("h2",{},"This is a h2 tag"),
               React.createElement("h2",{},"This is a h3 tag"),
               React.createElement("h2",{},"This is a h4 tag"),
               React.createElement("h2",{},"This is a h5 tag"),
               React.createElement("h2",{},"This is a h6 tag")
            ],
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"This is a h1 tag"),
            React.createElement("h2",{},"This is a h2 tag"),
            React.createElement("h2",{},"This is a h3 tag"),
            React.createElement("h2",{},"This is a h4 tag"),
            React.createElement("h2",{},"This is a h5 tag"),
            React.createElement("h2",{},"This is a h6 tag")
         ]),
              )]
)





    console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)