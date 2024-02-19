const buttons = document.getElementsByClassName('btn-k');
let appendedDiv = 0;
let priceCount = 0;
let grandTotalCount = 0;
let seatCount = 0;
let seatLeft = 40;
for (const b of buttons) {
    let clickCount = 0;


    b.addEventListener('click', function () {
        clickCount++;

        const buttonTitle = b.innerText;
        const titleContainer = document.getElementById('list-1');
        const addDiv = document.createElement('div');
        const addp1 = document.createElement('p');
        addp1.innerText = buttonTitle;
        addDiv.appendChild(addp1);
        const addp2 = document.createElement('p');
        addp2.innerText = 'Economy';
        addDiv.appendChild(addp2);
        const addp3 = document.createElement('p');
        addp3.innerText = '550';
        addDiv.appendChild(addp3);
        addDiv.classList.add('flex');
        addDiv.classList.add('justify-between');
        addDiv.classList.add('w-full');
        addDiv.classList.add('mb-3');

        if (appendedDiv === 4) {
            alert("You can't select more seat");
            return;
        }

        else {

            if (clickCount % 2 !== 0) {

                b.classList.add('bg-[#1DD100]');
                b.classList.add('text-white');

                titleContainer.appendChild(addDiv);
                appendedDiv++;

                priceCount += 550;
                grandTotalCount += 550;
                seatCount++;
                seatLeft--;


            } else if (clickCount % 2 === 0) {
                b.classList.remove('bg-[#1DD100]');
                b.classList.remove('text-white');

                const lastChild = titleContainer.lastElementChild;
                if (lastChild) {
                    titleContainer.removeChild(lastChild);
                    appendedDiv--;
                    priceCount -= 550;
                    grandTotalCount -= 550;
                    seatCount--;
                    seatLeft++;
                }
            }

            const p = document.getElementById('price')
            p.innerText = priceCount;
            const g = document.getElementById('grand')
            g.innerText = grandTotalCount;
            const s = document.getElementById('seat')
            s.innerText = seatCount;
            const sl = document.getElementById('left')
            sl.innerText = seatLeft;
        }

    });
}


const btn = document.getElementById('apply')
btn.addEventListener('click', function () {
    const coupon = document.getElementById('coupon').value;
    const d = document.getElementById('discount');
    const grand = document.getElementById('grand');
    const h = document.getElementById('hidden');

    if (coupon.toUpperCase() === "NEW15") {
        const discoutAmount = priceCount * .15;
        d.innerText = discoutAmount;
        const restTotal = grandTotalCount - discoutAmount;
        grand.innerText = restTotal;
        h.classList.add('hidden')
        document.getElementById('coupon').value = '';
    }
    else if (coupon.toUpperCase() === "COUPLE 20") {
        const discoutAmount = priceCount * .2;
        d.innerText = discoutAmount;
        const restTotal = grandTotalCount - discoutAmount;
        grand.innerText = restTotal;
        h.classList.add('hidden')
        document.getElementById('coupon').value = '';
    }
    else {
        alert('Invalid Coupon Card')
    }

})

const num = document.getElementById('number');
const disable = document.getElementById('disabled');

num.addEventListener('keyup', function () {
    const numbers = parseFloat(num.value);
    console.log(typeof numbers === 'number' && !isNaN(numbers));

    if (typeof numbers === 'number' && !isNaN(numbers) && appendedDiv > 0) {
        disable.removeAttribute('disabled');
    } else {
        disable.setAttribute('disabled', 'disabled');
    }
});