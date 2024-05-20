const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => selectOnlyTwoBoxes(e.target));
})

/**This function doesn't allow to check all three checkboxes
 * if all three checkboxes are on checked states, one box should be reset
 * the function resets a checkbox each time when the state of the last clicked checkbox changes 
 * (reset: e.g. good.checked = false) 
 */
function selectOnlyTwoBoxes(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(theClickedOne === good) {
            fast.checked = false;
        }
        else if(theClickedOne === cheap) {
            good.checked = false;
        }
        else if(theClickedOne === fast) {
            cheap.checked = false;
        }
    }
}