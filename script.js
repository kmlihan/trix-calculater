let currentKingdom = 1;
let totalScore = 0;
let usedChoices = [];
const options = [
  { value: "D", text: "Diamonds" },
  { value: "L", text: "Ltoosh" },
  { value: "B", text: "Queens" },
  { value: "K", text: "King" },
  { value: "T", text: "Trix" },
];
let scores = [];
document.getElementById("start-game").addEventListener("click", () => {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  if (!player1 || !player2) {
    alert("يرجى إدخال أسماء اللاعبين.");
    return;
  }
  document.getElementById(
    "players"
  ).textContent = `${player1} ، ${player2}`;
  document.querySelector(".player-names").classList.add("hidden");
  document.querySelector(".game").classList.remove("hidden");
});

// document.getElementById("add-score").addEventListener("click", () => {
//   const kingdomChoice = document.getElementById("kingdom-choice").value;
//   const category = kingdomChoice.split("-")[0]; // Extract the main category (e.g., "B" or "K")

//   // Check if the category has already been used
//   if (usedChoices.some((choice) => choice.startsWith(category))) {
//     alert(`تم استخدام تصنيف ${category} بالفعل في هذه المملكة!`);
//     return;
//   }

//   let score = 0;

//   // Handle each category separately
//   switch (category) {
//     case "D": {
//       const dinariValue = prompt("أدخل رقمًا بين 0 و 13 لديناري:");
//       const value = parseInt(dinariValue);
//       if (isNaN(value) || value < 0 || value > 13) {
//         alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
//         return;
//       }
//       score = value * -10;
//       break;
//     }
//     case "L": {
//       const lValue = prompt("أدخل رقمًا بين 0 و 13 للطوش:");
//       const value = parseInt(lValue);
//       if (isNaN(value) || value < 0 || value > 13) {
//         alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
//         return;
//       }
//       score = value * -15;
//       break;
//     }
//     case "B": {
//       const bValue = prompt("أدخل رقمًا بين 0 و 4 للبنات:");
//       const value = parseInt(bValue);
//       if (isNaN(value) || value < 0 || value > 4) {
//         alert("الرجاء إدخال رقم صحيح بين 0 و 4.");
//         return;
//       }
//       score = value * -25;
//       break;
//     }
//     case "K": {
//       const kValue = prompt("أدخل رقمًا بين 0 و 1 للشيخ:");
//       const value = parseInt(kValue);
//       if (isNaN(value) || value < 0 || value > 1) {
//         alert("الرجاء إدخال رقم صحيح بين 0 و 1.");
//         return;
//       }
//       score = value * -75;
//       break;
//     }
//     case "T": {
//       const tValue = prompt("أدخل رقمًا للتريكس (150, 200, 250, 300, 350):");
//       const value = parseInt(tValue);
//       if (![150, 200, 250, 300, 350].includes(value)) {
//         alert("الرجاء اختيار قيمة صحيحة (150, 200, 250, 300, 350).");
//         return;
//       }
//       score = value;
//       break;
//     }
//     default: {
//       alert("الرجاء اختيار تسمية صحيحة.");
//       return;
//     }
//   }

//   // Update the total score
//   totalScore += score;

//   // Add the category to the used choices list
//   usedChoices.push(kingdomChoice);

//   // Remove the selected option from the dropdown
//   const selectElement = document.getElementById("kingdom-choice");
//   const selectedOption = selectElement.querySelector(
//     `option[value="${kingdomChoice}"]`
//   );
//   if (selectedOption) {
//     selectedOption.remove();
//   }

//   // Display the new score
//   const scoreList = document.getElementById("score-list");
//   const listItem = document.createElement("li");
//   listItem.textContent = `${category}   ${score === 0 ? '-----' : score}`;
//   scoreList.appendChild(listItem);

//   // Update the total score display
//   document.getElementById(
//     "total-score"
//   ).textContent = `المجموع الكلي: ${totalScore}`;

//   // If all choices have been used, move to the next kingdom
//   if (usedChoices.length === 5) {
//     // Add a line break between kingdoms
//     const hr = document.createElement("hr");
//     Object.assign(hr.style, {
//         border: 'none',
//         height: '2px',
//         backgroundColor: '#333',
//         margin: '20px 0'
//     });
//     scoreList.appendChild(hr);

//     alert("تم الانتهاء من هذه المملكة، ننتقل إلى المملكة التالية!");
//     currentKingdom++;
//     usedChoices = [];
//     updateKingdomTitle();

//     const select = document.getElementById("kingdom-choice");

//     options.forEach((option) => {
//       const optionElement = document.createElement("option");
//       optionElement.value = option.value;
//       optionElement.textContent = option.text;
//       select.appendChild(optionElement);
//     });
//   }
// });

document.getElementById("add-score").addEventListener("click", () => {
    const kingdomChoice = document.getElementById("kingdom-choice").value;
    const category = kingdomChoice.split("-")[0];

    if (usedChoices.some((choice) => choice.startsWith(category))) {
        alert(`تم استخدام تصنيف ${category} بالفعل في هذه المملكة!`);
        return;
    }

    let score = 0;
  // Handle each category separately
  switch (category) {
    case "D": {
      const dinariValue = prompt("أدخل رقمًا بين 0 و 13 لديناري:");
      const value = parseInt(dinariValue);
      if (isNaN(value) || value < 0 || value > 13) {
        alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
        return;
      }
      score = value * -10;
      break;
    }
    case "L": {
      const lValue = prompt("أدخل رقمًا بين 0 و 13 للطوش:");
      const value = parseInt(lValue);
      if (isNaN(value) || value < 0 || value > 13) {
        alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
        return;
      }
      score = value * -15;
      break;
    }
    case "B": {
      const bValue = prompt("أدخل رقمًا بين 0 و 4 للبنات:");
      const value = parseInt(bValue);
      if (isNaN(value) || value < 0 || value > 4) {
        alert("الرجاء إدخال رقم صحيح بين 0 و 4.");
        return;
      }
      score = value * -25;
      break;
    }
    case "K": {
      const kValue = prompt("أدخل رقمًا بين 0 و 1 للشيخ:");
      const value = parseInt(kValue);
      if (isNaN(value) || value < 0 || value > 1) {
        alert("الرجاء إدخال رقم صحيح بين 0 و 1.");
        return;
      }
      score = value * -75;
      break;
    }
    case "T": {
      const tValue = prompt("أدخل رقمًا للتريكس (150, 200, 250, 300, 350):");
      const value = parseInt(tValue);
      if (![150, 200, 250, 300, 350].includes(value)) {
        alert("الرجاء اختيار قيمة صحيحة (150, 200, 250, 300, 350).");
        return;
      }
      score = value;
      break;
    }
    default: {
      alert("الرجاء اختيار تسمية صحيحة.");
      return;
    }
  }


    // Add the score to our scores array
    scores.push({ category, score, kingdom: currentKingdom });
    addScoreToList(category, score, scores.length - 1);

    // Update totals and used choices
    updateTotalScore();
    usedChoices.push(kingdomChoice);

    // Remove the selected option from dropdown
    const selectElement = document.getElementById("kingdom-choice");
    const selectedOption = selectElement.querySelector(`option[value="${kingdomChoice}"]`);
    if (selectedOption) {
        selectedOption.remove();
    }

    // Handle kingdom completion
    if (usedChoices.length === 5) {
        handleKingdomCompletion();
    }
});

function addScoreToList(category, score, index) {
    const scoreList = document.getElementById("score-list");
    const listItem = document.createElement("li");
    
    // Create the display element
    const displaySpan = document.createElement("span");
    displaySpan.textContent = `${category}   ${score === 0 ? '-----' : score}`;
    
    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "تعديل";
    editButton.style.margin = "10px";
    editButton.style.padding = "5px 10px";
    editButton.style.fontSize = "0.8em";
    
    // Add click handler for edit
    editButton.onclick = () => editScore(index, category);
    
    // Assemble the list item
    listItem.appendChild(displaySpan);
    listItem.appendChild(editButton);
    listItem.dataset.index = index;
    
    scoreList.appendChild(listItem);
}

function editScore(index, category) {
    let newScore = 0;
    
    switch (category) {
        case "D": {
            const value = prompt("أدخل رقمًا بين 0 و 13 لديناري:", Math.abs(scores[index].score / 10));
            if (isNaN(value) || value < 0 || value > 13) {
                alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
                return;
            }
            newScore = value * -10;
            break;
        }
        case "L": {
            const value = prompt("أدخل رقمًا بين 0 و 13 للطوش:", Math.abs(scores[index].score / 15));
            if (isNaN(value) || value < 0 || value > 13) {
                alert("الرجاء إدخال رقم صحيح بين 0 و 13.");
                return;
            }
            newScore = value * -15;
            break;
        }
        case "B": {
            const value = prompt("أدخل رقمًا بين 0 و 4 للبنات:", Math.abs(scores[index].score / 25));
            if (isNaN(value) || value < 0 || value > 4) {
                alert("الرجاء إدخال رقم صحيح بين 0 و 4.");
                return;
            }
            newScore = value * -25;
            break;
        }
        case "K": {
            const value = prompt("أدخل رقمًا بين 0 و 1 للشيخ:", Math.abs(scores[index].score / 75));
            if (isNaN(value) || value < 0 || value > 1) {
                alert("الرجاء إدخال رقم صحيح بين 0 و 1.");
                return;
            }
            newScore = value * -75;
            break;
        }
        case "T": {
            const value = prompt("أدخل رقمًا للتريكس (150, 200, 250, 300, 350):", scores[index].score);
            if (![150, 200, 250, 300, 350].includes(parseInt(value))) {
                alert("الرجاء اختيار قيمة صحيحة (150, 200, 250, 300, 350).");
                return;
            }
            newScore = parseInt(value);
            break;
        }
    }

    // Update the score in our array
    scores[index].score = newScore;
    
    // Update the display
    const listItem = document.querySelector(`li[data-index="${index}"]`);
    if (listItem) {
        const displaySpan = listItem.querySelector("span");
        displaySpan.textContent = `${category}   ${newScore === 0 ? '-----' : newScore}`;
    }
    
    // Update total
    updateTotalScore();
}

function updateTotalScore() {
    totalScore = scores.reduce((total, score) => total + score.score, 0);
    document.getElementById("total-score").textContent = `المجموع الكلي: ${totalScore}`;
}

function handleKingdomCompletion() {
    const scoreList = document.getElementById("score-list");
    const hr = document.createElement("hr");
    Object.assign(hr.style, {
        border: 'none',
        height: '2px',
        backgroundColor: '#333',
        margin: '20px 0'
    });
    scoreList.appendChild(hr);

    alert("تم الانتهاء من هذه المملكة، ننتقل إلى المملكة التالية!");
    currentKingdom++;
    usedChoices = [];
    updateKingdomTitle();

    // Reset kingdom choices
    const select = document.getElementById("kingdom-choice");
    select.innerHTML = ''; // Clear existing options
    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });
}
function updateKingdomTitle() {
  document.querySelector(
    ".round h3"
  ).textContent = `المملكة رقم ${currentKingdom}`;
}


