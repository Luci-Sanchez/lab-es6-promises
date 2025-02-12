// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  console.log(steak[0]);
  addFood(steak[1], "#steak", () => {
    console.log(steak[1]);
    addFood(steak[2], "#steak", () => {
      console.log(steak[2]);
      addFood(steak[3], "#steak", () => {
        console.log(steak[3]);
        addFood(steak[4], "#steak", () => {
          console.log(steak[4]);
          addFood(steak[5], "#steak", () => {
            console.log(steak[5]);
            addFood(steak[6], "#steak", () => {
              console.log(steak[6]);
              addFood(steak[7], "#steak", () => {
                console.log(steak[7]);
                let imageDiv = document.getElementById("table");
                let image = document.createElement("img");
                image.src = "./public/images/steak.jpg";
                imageDiv.appendChild(image);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  console.log(mashPotatoes[0]);
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    console.log(mashPotatoes[1]);
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      console.log(mashPotatoes[2]);
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        console.log(mashPotatoes[3]);
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          console.log(mashPotatoes[4]);
          let imageDiv = document.getElementById("table");
          let image = document.createElement("img");
          image.src = "./public/images/mashPotatoes.jpg";
          imageDiv.appendChild(image);
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], "#brusselSprouts");
  }
  makeFood(eachStep);
}

const brusselSproutsCook = makeFood(brusselSprouts)
  .then(() => {
    let imageDiv = document.getElementById("table");
    let image = document.createElement("img");
    image.src = "./public/images/brusselSprouts.jpg";
    imageDiv.appendChild(image);
  })
  .catch((error) => console.log(error));
