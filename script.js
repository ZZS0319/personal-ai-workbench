const completeButton = document.querySelector("#complete-button");
const statusMessage = document.querySelector("#status-message");
const savedMessage = localStorage.getItem("learningMessage");

if (savedMessage) {
  statusMessage.textContent = savedMessage;
}

completeButton.addEventListener("click", function () {
  const today = new Date().toLocaleDateString("zh-CN");
  const message = `已记录 ${today} 的学习`;

  statusMessage.textContent = message;
  localStorage.setItem("learningMessage", message);
});

const goalInput = document.querySelector("#next-goal");
const saveGoalButton = document.querySelector("#save-goal-button");
const savedGoalText = document.querySelector("#saved-goal");
const savedGoal = localStorage.getItem("nextGoal");

if (savedGoal) {
  savedGoalText.textContent = `下一步：${savedGoal}`;
}

saveGoalButton.addEventListener("click", function () {
  const goal = goalInput.value.trim();

  if (goal === "") {
    savedGoalText.textContent = "请先输入一个学习目标。";
    return;
  }

  savedGoalText.textContent = `下一步：${goal}`;
  localStorage.setItem("nextGoal", goal);
  goalInput.value = "";
});
