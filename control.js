function inputsEnabled() {
    const inputs = document.querySelectorAll('input');

    for (let i in inputs) {
        inputs[i].disabled = !inputs[i].disabled;
        /* if (inputs[i].disabled) {
            inputs[i].disabled = false;
        }*/
    }

    controlsCorrect();
}

function passwordVerify() {
    const password = document.getElementById("password").value;

    if (password === 'TrustNo1') {
        inputsEnabled();
    }
}

function checksBoxesAllChecked() {
    const checksBoxList = document.querySelectorAll('input[type="checkbox"]');

    let allChecked = false;
    for (let checkBox of checksBoxList) {
        if (checkBox.checked) {
            allChecked = true;
        } else {
            allChecked = false;
            break;
        }
    }
    return allChecked;
}

function levelsAllMaxValue() {
    const levelList = document.querySelectorAll('input[type="range"]');

    let allLevelMaxValue = false;
    for (let level of levelList) {

        if (level.value === level.max) {
            allLevelMaxValue = true;
        } else {
            allLevelMaxValue = false;
            break;
        }
    }
    return allLevelMaxValue;
}

function controlsCorrect() {
    const checkBoxesChecked = checksBoxesAllChecked();
    const levelsMaxValue = levelsAllMaxValue();
    const buttonLaunch = document.querySelectorAll('input[type="submit"]');

    buttonLaunch[0].disabled = !(checkBoxesChecked && levelsMaxValue);
}

function rocketMove(rocketImg, top, left) {
    let topPos = top + 'px';
    let leftPos = left + 'px'
    rocketImg.style.top = topPos;
    rocketImg.style.left = leftPos;
}

function rocketLauncher() {
    let rocketImg = document.getElementById('rocket');
    let top = 450;
    let left = 335;

    for (let i= 0; i < 100 ; i++) {
        setTimeout( rocketMove, i*100, rocketImg, top, left);
        top = top - 5;
        left = left + 5;
    }
}
